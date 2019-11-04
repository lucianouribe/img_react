import React from 'react';
import { connect } from 'react-redux';
import { deUmlauter } from '../helpers';

import { updateSubthemePoints } from '../actions/subThemes'

class Comparer extends React.Component {

  constructor(props) {
    super(props);
  }

  getCardMessage = (result, objective, answer, message, points) => {

   const resultCard = '###' + result + '\n' + '###' + objective + '\n' + '###' + answer + '\n' + message + '\n' + '\n' + 'Points: ' + points + '\n'

    return(resultCard)
  }

  handleSubmitWords = () => {
    const correct = 'Richtig!';
    const incorrect = 'Falsch!';
    let result = '';
    let objective = this.props.word_type === 'noun' ? this.props.objective : this.props.objective.replace(' ', '').toLowerCase();
    let answer = this.refs.answer.value;
    let message = '';
    let points = 0;

    if (answer === 'reset me'){
      this.props.resetGame()
    }

    if (answer === objective){
      result = correct;
      message = message + '\n+5 das Wort\n +1 der Artikel\n';
      points += 6;
    } else {
      result = incorrect;

      let answer_article = answer.slice(0, 3);
      let objective_article = objective.slice(0, 3);

      let answer_word = this.props.word_type === 'noun' ? answer.replace(/^(.){4}/, '') : answer;
      let objective_word = this.props.word_type === 'noun' ? objective.replace(/^(.){4}/, '') : objective;

      let answerArray = answer_word.split('');
      let objectiveArray = objective_word.split('');
      let incorrectChar = []

      if (this.props.word_type === 'noun'){
        if (answer_article !== objective_article){
          points += -2;
          message = message + '\n -2 der Artikel\n';
          answer_article = `**${answer_article}**`
        } else {
          points += 1;
          message = message + '\n +1 der Artikel\n';
        }
      }

      if (answer_word !== objective_word){

        for (let letter of answerArray.entries()) {
          if (objectiveArray[letter[0]] !== letter[1]){
            incorrectChar.push(letter[0])
            answerArray[letter[0]] = `**${answerArray[letter[0]]}**`
          }
        }

        if ((deUmlauter(answer_word).toLowerCase() === deUmlauter(objective_word).toLowerCase()) && incorrectChar.indexOf(0) === 0){
          points += -1;
          message = message + '\n -1 Großbuchstabe Substantiv\n'
        }
        if ( ( deUmlauter(answer_word).toLowerCase() === deUmlauter(objective_word).toLowerCase() ) && (answer_word.toLowerCase() !== objective_word.toLowerCase()) ) {
          points += -2;
          message = message + '\n -2 Umlaut\n'
        }
        if (deUmlauter(answer_word).toLowerCase() !== deUmlauter(objective_word).toLowerCase()) {
          points += -6;
          message = message + '\n -6 Falsch Wort!\n'
        } else {
          points += 3;
          message = message + '\n +3 das Wort\n'
        }
      } else {
        points += 5;
        message = message + '\n +5 das Wort\n'
      }
      const answer_noun = answer_article + ' ' + answerArray.join('');

      answer = this.props.word_type === 'noun' ? answer_noun : answer;

    }

    // hilfe preis!
    const { hintCounter } = this.props;
    switch (hintCounter) {
      case 0:
          points += 0;
          message = message
        break;
      case 1:
          points += -1;
          message = message + '\n -1 Hilfe\n'
        break;
      case 2:
          points += -2;
          message = message + '\n -2 Hilfe\n'
        break;
      case 3:
          points += -3;
          message = message + '\n -3 Hilfe\n'
        break;
      default:
          points += 0;
          message = message
    }

    let theSubTheme;
    const {subThemes, subthemeId} = this.props;
    for (const subT of subThemes) {
      if (subT.id === subthemeId) {
        theSubTheme = subT;
      }
    }
    const subtheme_points = theSubTheme.points + points;

    this.props.dispatch(updateSubthemePoints(theSubTheme.id, subtheme_points, theSubTheme.level))
    let cardMessage = this.getCardMessage(result, objective, answer, message, points)
    // sets the result card to render in the markdown
    this.props.setResultCard(cardMessage)
    // changes the view to the results in GameContainer
    this.props.setResult();
  }

  handleSubmitVerbs = () => {
    const correctVerb = 'Richtig!';
    const incorrectVerb = 'Falsch!';
    let result = '';
    let objective = this.props.objective.replace('\r', '');
    let answer = this.refs.answer.value;
    let message = '';
    let points = 0;
    if (answer === objective){
      result = correctVerb;
      message = message + '\n+10 Konjugation\n';
      points += 10;
    } else {
      result = incorrectVerb;
      let answer_pronom = answer.replace(/( .*)$/, '');
      const objective_pronom = objective.replace(/( .*)$/, '');

      const answer_verb = answer.replace(/^(.* )/, '');
      const objective_verb = objective.replace(/^(.* )/, '');

      let answerArray = answer_verb.split('');
      const objectiveArray = objective_verb.split('');
      let incorrectChar = []

      if (answer_pronom !== objective_pronom){
        points += -4;
        message = message + '\n -4 der Pronom';
        answer_pronom = `**${answer_pronom}**`
      }

      if (answer_verb !== objective_verb){

        for (let letter of answerArray.entries()) {
          if ((objectiveArray[letter[0]] !== letter[1])){
            incorrectChar.push(letter[0])
            answerArray[letter[0]] = `**${answerArray[letter[0]]}**`
          }
        }

        if ( ( deUmlauter(answer_verb).toLowerCase() === deUmlauter(objective_verb).toLowerCase() ) && (answer_verb.toLowerCase() !== objective_verb.toLowerCase()) ) {
          points += -2;
          message = message + '\n -2 Umlaut'
        } 
        if (deUmlauter(answer_verb).toLowerCase() !== deUmlauter(objective_verb).toLowerCase()) {
          points += -12;
          message = message + '\n -12 Falsch Verb!'
        }
        answer = answer_pronom + ' ' + answerArray.join('')
      }
    }

    // hilfe preis!
    const { hintCounter } = this.props;
    switch (hintCounter) {
      case 0:
          points += 0;
          message = message
        break;
      case 1:
          points += -1;
          message = message + '\n -1 Hilfe\n'
        break;
      case 2:
          points += -2;
          message = message + '\n -2 Hilfe\n'
        break;
      case 3:
          points += -3;
          message = message + '\n -3 Hilfe\n'
        break;
      default:
          points += 0;
          message = message
    }

    let theSubTheme;
    const {subThemes, subthemeId} = this.props;
    for (const subT of subThemes) {
      if (subT.id === subthemeId) {
        theSubTheme = subT;
      }
    }
    const subtheme_points = theSubTheme.points + points;

    this.props.dispatch(updateSubthemePoints(theSubTheme.id, subtheme_points, theSubTheme.level))
    let cardMessage = this.getCardMessage(result, objective, answer, message, points)
    // sets the result card to render in the markdown
    this.props.setResultCard(cardMessage)
    // changes the view to the results in GameContainer
    this.props.setResult();
  }

  handleSubmitPhrases = () => {
    // nothing yet
  }

  handleSubmit = () => {
    if (this.props.thematic === 'words'){
      this.handleSubmitWords()
    }
    if (this.props.thematic === 'verbs'){
      this.handleSubmitVerbs()
    }
    if (this.props.thematic === 'phrases'){
      this.handleSubmitPhrases()
    }
    // resets help & gets next word
    this.props.submitBtn()
  }

  render() {
    return (
      <div className='comparer'>
        <form>
          <input type='text' ref='answer' placeholder='...' />
        </form>
        <button onClick={() => this.handleSubmit()}><i className="fa fa-search"></i></button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    gameData: state.gameData,
    subThemes: state.subThemes
  }
}
export default connect(mapStateToProps)(Comparer);
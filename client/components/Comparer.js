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
    let objective = this.props.objective;
    let answer = this.refs.answer.value;
    let message = '';
    let points = 0;

    if (answer === 'reset me'){
      this.props.resetGame()
    }

    if (answer === objective){
      result = correct;
      message = `
      +5 das Wort
      +1 der Artikel
      `;
      points = 6;
    } else {
      result = incorrect;
      let answer_article = answer.slice(0, 3);
      const objective_article = objective.slice(0, 3);

      const answer_word = answer.replace(/^(.){4}/, '');
      const objective_word = objective.replace(/^(.){4}/, '');

      let answerArray = answer_word.split('');
      const objectiveArray = objective_word.split('');
      let incorrectChar = []

      if (answer_article !== objective_article){
        points += -2;
        message = message + '\n -2 der Artikel\n';
        answer_article = `**${answer_article}**`
      } else {
        points += 1;
        message = message + '\n +1 der Artikel\n';
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
      answer = answer_article + ' ' + answerArray.join('')


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
      message = '+10! \n';
      points = 10;
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
    console.log(this.props.objective)
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
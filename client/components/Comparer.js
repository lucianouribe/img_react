import React from 'react';
import { connect } from 'react-redux';
import { deUmlauter } from '../helpers';

import { updateThemePoints } from '../actions/themes'
import { updateSubthemePoints } from '../actions/subThemes'

class Comparer extends React.Component {

  constructor(props) {
    super(props);
  }

  getCardMessage = (result, objective, answer, message, points) => {
   const resultCard = 
        `
        ${result}
      
        ${objective}

        ${answer}

        ${message}
        
        Points: ${points}
      `
    return(resultCard)
  }

  handleSubmitWords = () => {
    const correct = 'Richtig!';
    const incorrect = 'Falsch!';
    let result = '';
    const objective = this.props.objective;
    let answer = this.refs.answer.value;
    let message = '';
    let points = 0;

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
        message = '-2 der Artikel';
        answer_article = `**${answer_article}**`
      }

      if (answer_word !== objective_word){

        for (let letter of answerArray.entries()) {
          if (objectiveArray[letter[0]] !== letter[1]){
            incorrectChar.push(letter[0])
            answerArray[letter[0]] = `**${answerArray[letter[0]]}**`
          }
        }

        if ((answer_word.toLowerCase() === objective_word.toLowerCase()) && incorrectChar.indexOf(0) === 0){
          points += -1;
          message = message + '\n -1 Großbuchstabe Substantiv'
        // } 
        // if ( ( deUmlauter(answer_word).toLowerCase() === deUmlauter(objective_word).toLowerCase() ) && (answer_word !== objective_word) ) {
        //   points += -2;
        //   message = message + '\n -2 Umlaut'
        } else {
          points += -6;
          message = message + '\n -6 Falsch Wort!'
        }
        answer = answer_article + ' ' + answerArray.join('')
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

  handleSubmitVerbs = () => {
    // nothing yet
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
import React from 'react';
import { connect } from 'react-redux';
import { fetchGameData } from '../actions/game';
import { updateThemePoints } from '../actions/themes'
import { updateSubthemePoints } from '../actions/subThemes'

class Comparer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      incorrectChar: []
    }
  }

  componentDidMount(){

  }

    // first step
  // get answer
  // get objective
  // get result
  // if result is correct
    // render results card with punctuation
  // if result is incorrect
    // render results cart with answer and objective 
    // show punctuation

// CREATE A MARKDOWN OR DIV STRING LITERAL AND SEND IT TO GAMECONTAINER
// IT MUST HAVE: ANSWER, OBJECTIVE AND PUNCTUATION!

  // idea 4 the future
  // get answer
  // get objective
  // get result
  // if result is correct
    // render results card with punctuation
  // if result is incorrect
    // render results cart with answer and objective
    // if answer issues are umlaut, article and cap leter
      // highlight them
      // show punctuation
    // if answer is incorrect
      // show punctuation

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
    const correct = 'correct';
    const incorrect = 'incorrect';
    let result = '';
    const objective = this.props.objective;
    const answer = this.refs.answer.value;
    let message = '';
    let points = 0;

    if (answer === objective){
      result = correct;
      message = `
      +5 das Wort
      +1 der Artikel
      `;
      points = 6;
    }

    if (answer !== objective){
      result = incorrect;
      const objectiveArray = objective.split('');
      const answerArray = answer.split('');
  
      let incorrectChar = []
      for (let letter of answerArray.entries()) {
        if (objectiveArray[letter[0]] !== letter[1]){
          // check article
            // -2 points

          // get the wrong characters
          incorrectChar.push(letter[0])
          this.setState({incorrectChar})
          // if with no umlaut and downcase they are the same

            // check capital letter for noun
            // -1 point
            // check umlauts
            // -2 points

          // else
            // check other spelling
            // -6 points
        }
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
import React from 'react';
import { connect } from 'react-redux';
import { letters } from '../actions/letters'
import { fails } from '../actions/fails'
import { capitalize } from '../helpers';
import GameKeyBoard from './GameKeyBoard';

class GameLogic extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      nominative: 'ich',
      object: '',
      word_type: 'noun',
      response: '_',
      letters: '',
      fails: 0,
    }
  }

  componentDidMount(){
    const object = this.getObject();
    this.setState({object});
    this.renderAnswer();
  }

  componentDidUpdate(){
    // if true -> evaluate
    if (this.state.response === this.state.object) {
      const object = this.getObject();
      this.setState({object});
    }
  }

  getObject = () => {
    const { compareMe, thematic } = this.props;
    if (thematic === 'words'){
      return this.getWord(compareMe)
    } else if ((thematic === 'verbs') && (typeof compareMe !== 'undefined')) {
      return this.getVerb(compareMe)
    } else {
      if (typeof compareMe !== 'undefined'){
        return this.getPhrase(compareMe)
      }
    }
  }

  getWord = (word) => {
    // if level 3, 5, 7, 9 get plural word
    if (word.word_type !== 'noun') {
      this.setState({word_type: 'other'})
    }
    if (this.props.actualLevel % 2 === 0 || this.props.actualLevel === 1) {
      return `${word.article} ${capitalize(word.noun)}`
    } else {
      return `Die ${capitalize(word.plural)}`
    }
  }

  getVerb = (verb) => {
    let verbArray;
    let verbPrae;
    let verbPret;
    let verbPer;
    switch (this.props.actualLevel) {
      case 1:
        verbArray = verb.praesens.split("\n")
        return this.getLine(verbArray)
        break;
        case 2:
        verbPrae = verb.praesens.split("\n")
        verbPret = verb.praeteritum.split("\n")
        verbArray = [verbPrae, verbPret]
        return this.getLine(verbArray[Math.floor(Math.random()*verbArray.length)])
        break;
        case 3:
          verbArray = verb.futur_i.split("\n")
          return this.getLine(verbArray)
          break
          case 4:
            verbPer = verb.perfekt.split("\n")
            return this.getLine(verbArray)
        break;
      case 5:
        verbArray = verb.plusquanperfekt.split("\n")
        return this.getLine(verbArray)
        break;
      default:
        verbArray = verb.futur_ii.split("\n")
        return this.getLine(verbArray)
    }
  }

  getLine = (array) => {
    const nominatives = ['ich', 'du', 'er', 'sie', 'es', 'wir', 'ihr', 'Sie'];
    // pick one personal pronoun
    const nominative = nominatives[Math.floor(Math.random()*nominatives.length)];
    const nominativesZweitePersone = ['er', 'sie', 'es', 'man'];
    const nominativesZweitePerson = nominativesZweitePersone[Math.floor(Math.random()*nominativesZweitePersone.length)];

    for (const line of array) {
      if (line.includes(nominative)){
        this.setState({nominative});
        if (line.includes('er/sie/es')){
          this.setState({nominative: nominativesZweitePerson});
          return line.replace('er/sie/es', `${nominativesZweitePerson}`);
        } else if (line.includes('sie/Sie')){
          return line.replace('sie/Sie', 'Sie');
        } else {
          return line;
        }

      }
    }
  }

  getKeywords = () =>{
    const {actualLevel, thematic, compareMe} = this.props;
    switch (thematic) {
      case 'words':
        if (actualLevel % 2 === 0 || this.props.actualLevel === 1) {
          return `${compareMe.word_type} | ${compareMe.spanish}`
        } else {
          return `${compareMe.word_type} | plural | ${compareMe.spanish}`
        }
        break;
      case 'verbs':
        return `${this.state.nominative} | ${compareMe.verb_type} | ${compareMe.spanish}`
        break;
      case 'phrases':
        return 'phrase keywords'
        break;
      default:
        return('Viel Spass!')
    }
  }

  getKeyboard = () => {
    if (this.state.object !== '') {
      return <GameKeyBoard object={this.state.object} letters={this.state.letters} handlePressedLetters={this.handlePressedLetters} evaluateResponse={this.evaluateResponse} />
    }
  }

  handlePressedLetters = (letter) => {
    this.setState({ letters: this.state.letters + letter});
    this.props.dispatch(letters(this.state.letters + letter));
    // make a script that asigns to each letter already the value of true or false so when clicked it inmediately send to the redux the fail or success of the letter
    this.evaluateLetter(letter);
  }

  evaluateLetter = (letter) => {
    let objectArray = Array.from( this.state.object.toLowerCase().replace('\r', '').replace(' ', '') );
    // this.props.dispatch(fails(this.props.fails));
    let check = objectArray.some(ele => ele === letter.toLowerCase());
    if (!check) {
      this.setState({ fails: this.state.fails + 1 })
      this.props.dispatch(fails(this.state.fails + 1));
      // get loss
      if(this.state.fails + 1 === 7){
        console.log('lost!, lets go to the next one!')
        // this.props.nextGame();
        // restart in level
        // loose one life
          // if no lifes left -> restart previous level
      }
    }
    // get win

      // get 2 points for help
  }

  evaluateResponse = (response) => {
    const object = this.state.object.replace('\r', '');
    this.setState({response});
    if ( response !== '' && (response === object) ) {
      this.setState({letters: ''});
      console.log('pass to next game')
      this.props.setGamesPassed(this.props.passedGames + 1);
      this.props.dispatch(fails(0));
      this.props.nextGame();
    }
  }

  renderAnswer = () => {
    const { letters } = this.state;
    const object = this.state.object.replace('\r', '');

    let answerArray = [];
    let objectArray = object.toLowerCase().split('');
    let lettersArray = letters.toLowerCase().split('');

    objectArray.map((objLetter, i) => {
      let letter = lettersArray.filter(l => l === objLetter)
      if (letter.length > 0) {
        if (object.charAt(i) === letter[0]){
          answerArray.push(letter);
        } else {
          answerArray.push( letter[0].toUpperCase() );
        }
      } else {
        if (objLetter === ' ') {
          answerArray.push(' ');
        } else {
          answerArray.push('_');
        }
      }
    })
    return answerArray.join('');
  }

  render() {
    return(
      <div className="game-comparer">
        <span className="keywords">{this.getKeywords()}</span>
        <span className="hint">{this.renderAnswer()}</span>
        <span className="word-input">
          {this.getKeyboard()}
        </span>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    letters: state.letters,
    fails: state.fails
  }
}
export default connect(mapStateToProps)(GameLogic);
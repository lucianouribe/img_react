import React from 'react';
import { connect } from 'react-redux';
import { fails } from '../actions/fails'
import { replaceConsonants, getFirstLetter, getDashes, capitalize, getVerbDashes, replaceVerbConsonants, getVerbFirstLetter, getSolution } from '../helpers';
// import Comparer from './Comparer';
import GameKeyBoard from './GameKeyBoard';

class GameLogic extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      nominative: 'ich',
      object: '',
      word_type: 'noun',
      letter: '',
      response: '_',
      fails: 0
    }
  }

  componentDidMount(){
    const object = this.getObject();
    this.setState({object});
    this.getLetters();
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

  getPhrase = (phrase) => {
    let phraseArray;
    switch (this.props.actualLevel) {
      case 1:
        phraseArray = phrase.phrase_praesens.split("\n")
        return this.getLine(phraseArray)
        break;
      case 2:
        phraseArray = phrase.phrase_perfekt.split("\n")
        return this.getLine(phraseArray)
        break;
      case 3:
        phraseArray = phrase.phrase_futur_i.split("\n")
        return this.getLine(phraseArray)
        break
      case 4:
        phraseArray = phrase.phrase_praeteritum.split("\n")
        return this.getLine(phraseArray)
        break;
      case 5:
        phraseArray = phrase.phrase_plusquanperfekt.split("\n")
        return this.getLine(phraseArray)
        break;
      default:
        phraseArray = phrase.phrase_futur_ii.split("\n")
        return this.getLine(phraseArray)
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

  getLetters = () => {
    const { letters } = this.props;
    let lettersArray = Array.from( letters.toLowerCase() );
    let objectArray = Array.from( this.state.object.toLowerCase() );

    let answerArray = [];
    var theObject = this.state.object;
    objectArray.map((item, i) => {
      let letter = lettersArray.filter(bla => bla === item)
      if (letter.length > 0) {
        if (theObject.charAt(i) === letter[0]){
          answerArray.push(letter);
        } else {
          answerArray.push( letter[0].toUpperCase() );
        }
      } else {
        if (item === ' ') {
          answerArray.push(' ');
        } else {
          answerArray.push('_');
        }
      }
    })
    return answerArray.join('');
  }



  hintMagikChild = () => {
    if (this.props.hintCounter < 3){
      this.props.hintMagik(this.props.hintCounter + 1)
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
      return <GameKeyBoard object={this.state.object} />
    }
  }

  submitBtn = () => {
    this.props.hintMagik(0)
    this.props.nextGame();
  }

  render() {
    return(
      <div className="game-comparer">
        <span className="keywords">{this.getKeywords()}</span>
        <span className="hint" onClick={() => this.hintMagikChild()} >{this.getLetters()}</span>
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
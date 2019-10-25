import React from 'react';
import { connect } from 'react-redux';
import { replaceConsonants, getFirstLetter, getDashes, capitalize } from '../helpers';

class GameComparer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      nominative: 'ich'
    }
  }

  componentDidMount(){
  }

  getWord = (word) => {
    // if level 3, 5, 7, 9 get plural word
    if (this.props.actualLevel % 2 === 0 || this.props.actualLevel === 1) {
      return `${word.article} ${capitalize(word.noun)}`
    } else {
      return `Die ${capitalize(word.plural)}`
    }
  }

  getVerb = (verb) => {
    let verbArray;
    switch (this.props.actualLevel) {
      case 1:
        verbArray = verb.praesens.split("\n")
        return this.getLine(verbArray)
        break;
      case 2:
        verbArray = verb.perfekt.split("\n")
        return this.getLine(verbArray)
        break;
      case 3:
        verbArray = verb.futur_i.split("\n")
        return this.getLine(verbArray)
        break
      case 4:
        verbArray = verb.praeteritum.split("\n")
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
    var nominative = nominatives[Math.floor(Math.random()*nominatives.length)];

    for (const line of array) {
      if (line.includes(nominative)){
        if (line.includes('er/sie/es')){
          return line.replace('er/sie/es', `${nominative}`)
        } else {
          return line
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

  getHint = () => {
    const { thematic, hintCounter } = this.props;
    let word = this.getObject();
    if (thematic === 'words'){
      switch (hintCounter) {
        case 0:
          return '?'
          break;
        case 1:
          return `___ ${getDashes(word)}`
          break;
        case 2:
          return `D__ ${replaceConsonants(word)}`
          break
        case 3:
          return `D__ ${getFirstLetter(word)}`
          break;
        default:
          return('Viel Spass!')
      }
    }
    if (thematic === 'verbs'){
      return ('verb hint')
    }
    if (thematic === 'phrases'){
      return ('phrase hint')
    }
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
          return `${compareMe.word_type}`
        } else {
          return `${compareMe.word_type} plural`
        }
        break;
      case 'verbs':
        return 'verb keywords'
        break;
      case 'phrases':
        return 'phrase keywords'
        break;
      default:
        return('Viel Spass!')
    }
  }

  submitBtn = () => {
    this.props.hintMagik(0)
    this.props.nextGame();
  }

  render() {
    console.log(this.getObject())
    return (
      <div className="game-comparer">
        <span className="keywords">{this.getKeywords()}</span>
        <span className="hint" onClick={() => this.hintMagikChild()}>{this.getHint()}</span>
        <span className="word-input">
          <input placeholder="..."/>
          <button onClick={() => this.submitBtn()}><i className="fa fa-search"></i></button>
        </span>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // gameData: state.gameData
  }
}
export default connect(mapStateToProps)(GameComparer);
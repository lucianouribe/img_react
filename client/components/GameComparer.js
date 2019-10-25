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
    if(this.props.actualLevel === 1){
      let verbArray = verb.praesens.split("\n")
      return this.getLine(verbArray)
    } else if (this.props.actualLevel === 2) {
      let verbArray = verb.perfekt.split("\n")
      return this.getLine(verbArray)
    } else if (this.props.actualLevel === 3) {
      let verbArray = verb.futur_i.split("\n")
      return this.getLine(verbArray)
    } else if (this.props.actualLevel === 4) {
      let verbArray = verb.praeteritum.split("\n")
      return this.getLine(verbArray)
    } else if (this.props.actualLevel === 5) {
      let verbArray = verb.plusquanperfekt.split("\n")
      return this.getLine(verbArray)
    } else {
      let verbArray = verb.futur_ii.split("\n")
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
    if(this.props.actualLevel === 1){
      let phraseArray = phrase.phrase_praesens.split("\n")
      return this.getLine(phraseArray)
    } else if (this.props.actualLevel === 2) {
      let phraseArray = phrase.phrase_perfekt.split("\n")
      return this.getLine(phraseArray)
    } else if (this.props.actualLevel === 3) {
      let phraseArray = phrase.phrase_futur_i.split("\n")
      return this.getLine(phraseArray)
    } else if (this.props.actualLevel === 4) {
      let phraseArray = phrase.phrase_praeteritum.split("\n")
      return this.getLine(phraseArray)
    } else if (this.props.actualLevel === 5) {
      let phraseArray = phrase.phrase_plusquanperfekt.split("\n")
      return this.getLine(phraseArray)
    } else {
      let phraseArray = phrase.phrase_futur_ii.split("\n")
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
    const { thematic } = this.props;
    let word = this.getObject();
    if (thematic === 'words'){
      if (this.props.hintCounter === 0) {
        return '?'
      } else if (this.props.hintCounter === 1) {
        return `___ ${getDashes(word)}`
      } else if (this.props.hintCounter === 2 ) {
        return `D__ ${replaceConsonants(word)}`
      } else {
        return `D__ ${getFirstLetter(word)}`
      }
    }
  }

  hintMagikChild = () => {
    if (this.props.hintCounter < 3){
      this.props.hintMagik(this.props.hintCounter + 1)
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
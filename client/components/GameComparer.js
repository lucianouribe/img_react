import React from 'react';
import { connect } from 'react-redux';

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
    return `${word.article} ${word.noun}`
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
    } else if (thematic === 'verbs') {
      return this.getVerb(compareMe)
    } else {
      return this.getPhrase(compareMe)
    }
  }

  render() {
    return (
      <div className="game-comparer">
        {this.getObject()}
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
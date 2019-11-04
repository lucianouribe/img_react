import React from 'react';
import { connect } from 'react-redux';
import { replaceConsonants, getFirstLetter, getDashes, capitalize, getVerbDashes, replaceVerbConsonants, getVerbFirstLetter } from '../helpers';
import Comparer from './Comparer';

class GameComparer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      nominative: 'ich',
      object: '',
      word_type: 'noun'
    }
  }

  componentDidMount(){
    const object = this.getObject();
    this.setState({object});
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

  getHint = () => {
    const { thematic, hintCounter, compareMe } = this.props;
    let full_dashes = this.state.word_type === 'noun' ? '___ ' : '';
    let ddd_dashes = this.state.word_type === 'noun' ? 'd__ ' : '';
    let object = this.state.word_type === 'noun' ? this.state.object : this.state.object.replace(' ', '').toLowerCase();
    if (thematic === 'words'){
      switch (hintCounter) {
        case 0:
          return `${full_dashes}${getDashes(object)}`
          break;
        case 1:
          return `${ddd_dashes}${replaceConsonants(object)}`
          break;
        case 2:
          return `${ddd_dashes}${getFirstLetter(object)}`
          break
        case 3:
          return `${ddd_dashes}${getFirstLetter(object)} \n(${compareMe.spanish})` 
          break;
        default:
          return('Viel Spass!')
      }
    }
    if (thematic === 'verbs'){
      switch (hintCounter) {
        case 0:
          return `${getVerbDashes(object)}`
          break;
        case 1:
          return `${replaceVerbConsonants(object)}`
          break;
        case 2:
          return `${getVerbFirstLetter(object)}`
          break
        case 3:
            return `${getVerbFirstLetter(object)} \n(${compareMe.spanish})`
          break;
        default:
          return('Viel Spass!')
      }
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
        return `${this.state.nominative} | ${compareMe.verb_type}`
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
    return(
      <div className="game-comparer">
        <span className="keywords">{this.getKeywords()}</span>
        <span className="hint" onClick={() => this.hintMagikChild()}>{this.getHint()}</span>
        <span className="word-input">
          <Comparer 
            submitBtn={this.submitBtn} 
            objective={this.state.object} 
            setResult={this.props.setResult} 
            setResultCard={this.props.setResultCard} 
            thematic={this.props.thematic} 
            setIncorrectChar={this.setIncorrectChar} 
            subthemeId={this.props.subthemeId} 
            resetGame={this.props.resetGame} 
            hintCounter={this.props.hintCounter} 
            word_type={this.state.word_type} />
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
import React from 'react';
import { connect } from 'react-redux';
import { letters } from '../actions/letters'
import { fails } from '../actions/fails'
import { capitalize, shuffle } from '../helpers';
import GameKeyBoard from './GameKeyBoard';

class GameLogic extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      nominative: 'ich',
      object: '',
      verb_tense: 'präsens',
      response: '_',
      letters: '',
      fails: 0,
    }
  }

  componentDidMount(){
    this.newObject();
    this.renderAnswer();
  }

  componentDidUpdate(){
    if (this.props.letters !== this.state.letters) {this.setState({letters: this.props.letters})};
    if (this.state.response === this.state.object.replace('\r', '')) {this.newObject()};
    if (this.props.letters === 'AÄUÜ'){this.props.resetGame()};
  }

  newObject = () => {
    const object = this.getObject();
    this.setState({object});
    this.props.selectedObject(object);
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
    const {passedGames, compareMe} = this.props;
    if (passedGames % 2 === 0 || passedGames === 1) {
      if (word.word_type !== 'noun') {
        this.props.setCardAnswer([`${capitalize(word.noun)}`, compareMe.spanish]);
        return `${capitalize(word.noun)}`
      } else {
        this.props.setCardAnswer([`${word.article} ${capitalize(word.noun)}`, compareMe.spanish]);
        return `${word.article} ${capitalize(word.noun)}`
      }
    } else {
      if (word.word_type !== 'noun') {
        this.props.setCardAnswer([`${capitalize(word.noun)}`, compareMe.spanish]);
        return `${capitalize(word.noun)}`
      } else {
        this.props.setCardAnswer([`Die ${capitalize(word.plural)}`, compareMe.spanish]);
        return `Die ${capitalize(word.plural)}`
      }
    }
  }

  getVerb = (verb) => {
    const {compareMe} = this.props;
    let verbArray;
    const verbPraes = verb.praesens.split("\n");
    const verbPraet  = verb.praeteritum.split("\n");
    const verbPer = verb.perfekt.split("\n");
    const verbPlusQuan = verb.plusquamperfekt.split("\n");
    const futur_i = verb.futur_i.split("\n");
    const futur_ii = verb.futur_ii.split("\n");
    const {passedGames} = this.props;
    if (passedGames <= 8){
      verbArray = verbPraes;
    } else if (passedGames > 8 && passedGames <= 10) {
      verbArray = [...verbPraes, ...verbPer];
    } else if (passedGames > 10 && passedGames <= 12) {
      verbArray = [...verbPer, ...verbPraet];
    } else if (passedGames > 12 && passedGames <= 14) {
      verbArray = [...verbPraet, ...futur_i];
    } else if (passedGames > 14 && passedGames <= 16) {
      verbArray = [...futur_i, ...verbPlusQuan];
    } else if (passedGames > 16 && passedGames <= 18) {
      verbArray = [...verbPlusQuan, ...futur_ii];
    } else {
      verbArray = [...verbPraes, ...verbPraet, ...verbPer, ...futur_i];
    }
    // get line
    const line = this.getLine(verbArray);
    // check if line present in one of the arrays
    let isPraes = verbPraes.includes(line) ? 'präsens' : '';
    let isPraet = verbPraet.includes(line) ? 'präteritum' : '';
    let isPer = verbPer.includes(line) ? 'perfekt' : '';
    let isPlusQuan = verbPlusQuan.includes(line) ? 'plusquanperfekt' : '';
    let isFuturI = futur_i.includes(line) ? 'futur 1' : '';
    let isFuturII = futur_ii.includes(line) ? 'futur 2' : '';
    // set verb_type state
    this.setState({verb_tense: isPraes + isPraet + isPer + isPlusQuan + isFuturI + isFuturII});
    this.props.setCardAnswer([line, compareMe.spanish]);
    return line;
  }

  getPhrase = (phrase) => {
    const {compareMe} = this.props;
    let phraseArray;
    const phrasePraes = phrase.phrase_praesens.split("\n");
    const phrasePraet  = phrase.phrase_praeteritum.split("\n");
    const phrasePer = phrase.phrase_perfekt.split("\n");
    const phrasePlusQuan = phrase.phrase_plusquamperfekt.split("\n");
    const futur_i = phrase.phrase_futur_i.split("\n");
    const futur_ii = phrase.phrase_futur_ii.split("\n");
    const {passedGames} = this.props;
    if (passedGames <= 20){
      phraseArray = phrasePraes;
    } else if (passedGames > 20 && passedGames <= 22) {
      phraseArray = [...phrasePraes, ...phrasePer];
    } else if (passedGames > 22 && passedGames <= 24) {
      phraseArray = [...phrasePer, ...phrasePraet];
    } else if (passedGames > 24 && passedGames <= 26) {
      phraseArray = [...phrasePraet, ...futur_i];
    } else if (passedGames > 26 && passedGames <= 28) {
      phraseArray = [...futur_i, ...phrasePlusQuan];
    } else if (passedGames > 28 && passedGames <= 30) {
      phraseArray = [...phrasePlusQuan, ...futur_ii];
    } else {
      phraseArray = [...phrasePraes, ...phrasePraet, ...phrasePer, ...futur_i];
    }
    // get line
    const line = this.getLine(phraseArray);
    // check if line present in one of the arrays
    let isPraes = phrasePraes.includes(line) ? 'präsens' : '';
    let isPraet = phrasePraet.includes(line) ? 'präteritum' : '';
    let isPer = phrasePer.includes(line) ? 'perfekt' : '';
    let isPlusQuan = phrasePlusQuan.includes(line) ? 'plusquanperfekt' : '';
    let isFuturI = futur_i.includes(line) ? 'futur 1' : '';
    let isFuturII = futur_ii.includes(line) ? 'futur 2' : '';
    // set phrase_type state
    this.setState({phrase_tense: isPraes + isPraet + isPer + isPlusQuan + isFuturI + isFuturII});
    this.props.setCardAnswer([line, compareMe.spanish]);
    return line;
  }



  getLine = (array) => {
    const shuffledArray = shuffle(array);
    const nominatives = ['ich', 'du', 'er', 'sie', 'es', 'wir', 'ihr', 'Sie'];
    // pick one personal pronoun
    const nominative = nominatives[Math.floor(Math.random()*nominatives.length)];
    const nominativesZweitePersone = ['er', 'sie', 'es', 'man'];
    const nominativesZweitePerson = nominativesZweitePersone[Math.floor(Math.random()*nominativesZweitePersone.length)];

    for (const line of shuffledArray) {
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
    const {passedGames, thematic, compareMe} = this.props;
    switch (thematic) {
      case 'words':
        if (passedGames % 2 === 0 || passedGames === 1) {
          return (
            <div>
              <span>{compareMe.word_type}</span>
              <span>{compareMe.spanish}</span>
            </div>
            )
        } else {
          return (
            <div>
              { compareMe.word_type !== 'noun' ? null : <span>plural</span> }
              <span>{compareMe.word_type}</span>
              <span>{compareMe.spanish}</span>
            </div>
          )
        }
        break;
      case 'verbs':
        return (
          <div>
            <span>{this.state.nominative}</span>
            {this.state.verb_tense === '' ? null : <span>{this.state.verb_tense}</span>}
            {compareMe.verb_type === 'regelmäßiges' ? null : <span>{compareMe.verb_type}</span>}
            <span>{compareMe.spanish}</span>
          </div>
        )
        break;
      case 'phrases':
        return (
          <div>
            <span>{this.state.nominative}</span>
            {this.state.phrase_tense === '' ? null : <span>{this.state.phrase_tense}</span>}
            {compareMe.phrase_type === 'simple' ? null : <span>{compareMe.phrase_type}</span>}
            <span>{compareMe.spanish}</span>
          </div>
        )
        break;
      default:
        return('Viel Spass!')
    }
  }

  getKeyboard = () => {
    if (this.state.object !== '') {
      return (
        <GameKeyBoard 
          object={this.state.object} 
          letters={this.state.letters} 
          handlePressedLetters={this.handlePressedLetters} 
          evaluateResponse={this.evaluateResponse} />
      )
    }
  }

  handlePressedLetters = (letter) => {
    this.setState({ letters: this.state.letters + letter});
    this.props.dispatch(letters(this.state.letters + letter));
    this.evaluateLetter(letter);
  }

  evaluateLetter = (letter) => {
    let objectArray = Array.from( this.state.object.toLowerCase().replace('\r', '').replace(' ', '') );
    let check = objectArray.some(ele => ele === letter.toLowerCase());
    if (!check) {
      this.setState({ fails: this.state.fails + 1 })
      this.props.dispatch(fails(this.state.fails + 1));
      if(this.state.fails + 1 === 7){
        this.props.resolveDeath();
      }
    }
  }

  evaluateResponse = (response) => {
    const object = this.state.object.replace('\r', '');
    this.setState({response});
    if ( response !== '' && (response === object) ) {
      console.log('pass to next game')
      this.props.setGamesPassed(this.props.passedGames + 1);
      this.setState({letters: '', fails: 0});
      this.props.dispatch(letters(''));
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
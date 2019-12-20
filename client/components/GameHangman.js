import React from 'react';
import { connect } from 'react-redux';
import { history } from '../store';
import Markdown from 'markdown-to-jsx';

import GameSubNav from './GameSubNav';
import GameLogic from './GameLogic';

import { updateGame } from '../actions/germanGame'
import { updateSubthemePoints } from '../actions/subThemes'
import { letters } from '../actions/letters'
import { fails } from '../actions/fails'
import { shuffle } from '../helpers';

class GameHangman extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      actual: 0,
      actualIndex: 0,
      actualObject: {},
      actualThematic: 'words',
      actualLevel: 0,
      subthemeImage: '',
      show: true,
      passedGames: 0,
      showTotal: false,
      totalCard: '',
      cardAnswer: [],
      coins: 0,
      objective: ''
    }
  }

  gameSubNav = () => {
    let subtheme = this.props.gameData.subtheme;
    let subthemeName;
    let amount;
    if(typeof subtheme !== 'undefined') {
      subthemeName = subtheme.name;
      amount  = this.getAmount(this.props.gameData)

      return(
        <GameSubNav 
          subthemeName={subtheme.name}
          subthemeBest={this.state.passedGames}
          amount={amount}
          actual={this.state.actual} />
      )
    }
  }

  setCardAnswer = (cardAnswer) => {
    this.setState({cardAnswer});
  }

  resetGame = () => {
    $.ajax({
      url: `api/reset`,
      type: 'PUT',
    }).done( data => {
      console.log('reset Game success', data);
      history.push('/deutsch');
    }).fail( err => {
      console.log('reset Game fail', err);
      history.push('/deutsch');
    });
  }

  getAmount = (gameData) => {
    let word_length = gameData.words.length
    let verb_length = gameData.verbs.length
    let phrase_length = gameData.phrases.length
    return word_length + verb_length + phrase_length
  }

  // sets how many hints are left
  setGamesPassed = (passedGames) => {
    this.setState({passedGames})
  }

  startGame = () => {
    let gameData = this.props.gameData;
    let words = gameData.words;
    let actualObject = words[0];
    // console.log(gameData, words, actualObject)
    this.setState({
      actualObject, 
      subthemeImage: gameData.subtheme_img, 
      actualLevel: gameData.subtheme.level,
      coins: gameData.subtheme.coins,
      show: false
    });
  }

  nextGame = () => {
    let {words, verbs, phrases} = this.props.gameData;
    // console.log(words, verbs, phrases)
    let {actualIndex, actual, actualThematic, coins } = this.state;
    // console.log('words', actualIndex, actual, actualThematic, this.props.gameData)
    if(actualThematic === 'words'){
      if(actualIndex + 1 < words.length){
        console.log('there are more words');
        let actualObject = words[actualIndex + 1];
        this.setState({actualIndex: actualIndex + 1, actualObject, actual: actual + 1, coins: coins + 1  });
      } else {
        let actualObject = verbs[0];
        if (typeof actualObject !== 'undefined'){
          console.log('pass to verbs');
          this.setState({actualIndex: 0, actualObject, actualThematic: 'verbs', actual: actual + 1, coins: coins + 1 });
        } else {
          this.resolveWin();
        }
      }
    }

    if(actualThematic === 'verbs'){
      if(actualIndex + 1 < verbs.length){
        console.log('there are more verbs');
        let actualObject = verbs[actualIndex + 1];
        this.setState({actualIndex: actualIndex + 1, actualObject, actual: actual + 1, coins: coins + 1 });
      } else {
        console.log('pass to punctuation');
        let actualObject = phrases[0];
        if (typeof actualObject !== 'undefined'){
          console.log('pass to phrases');
          this.setState({actualIndex: 0, actualObject, actualThematic: 'phrases', actual: actual + 1});
        } else {
          console.log('pass to punctuation');
          this.resolveWin();
        }
      }
    }

    if (actualThematic === 'phrases') {
      if(actualIndex + 1 < phrases.length){
        console.log('there are more phrases');
        let actualObject = phrases[actualIndex + 1];
        this.setState({actualIndex: actualIndex + 1, actualObject, actual: actual + 1, coins: coins + 1 });
      } else {
        this.resolveWin();
      }
    }

  }

  resolveWin = () => {
    this.setState({showTotal: true, resultMessage: 'Thema Bestanden!'});
    // get subthemes
    const {subtheme} = this.props.gameData;

    // set best_spree & close subtheme
    if (this.state.passedGames > subtheme.best_spree) {
      this.props.dispatch(updateSubthemePoints(subtheme.id, this.state.coins + 1, 'closed', this.state.passedGames, subtheme.games_lost));
    } else {
      this.props.dispatch(updateSubthemePoints(subtheme.id, this.state.coins + 1, 'closed', subtheme.best_spree + 1, subtheme.games_lost));
    }
    // get player data
    const player = this.props.germanGame;
    const playerLifes = player.lifes;
    const playerPunctuation = player.punctuation;
    // win one life
    this.props.dispatch(updateGame(player.id, playerLifes + 1, playerPunctuation + 1, player.punctuation_4_total + 1, player.level));
  }

  resolveDeath = () => {
    this.setState({showTotal: true, resultMessage: 'Du bist tot!'});

    // get subthemes
    const {subtheme} = this.props.gameData;

    // set best_spree
    if (this.state.passedGames > subtheme.best_spree) {
      this.props.dispatch(updateSubthemePoints(subtheme.id, 6, 'lost', this.state.passedGames + 1, subtheme.games_lost + 1 ));
    } else {
      this.props.dispatch(updateSubthemePoints(subtheme.id, 8, 'lost', subtheme.best_spree, subtheme.games_lost + 1));
    }

    // get player data
    const player = this.props.germanGame;
    const playerLifes = player.lifes;
    const playerPunctuation = player.punctuation;

    this.props.dispatch(letters(''));
    this.props.dispatch(fails(0));
    // loose one life
    if (playerLifes > 1) {
      this.props.dispatch(updateGame(player.id, playerLifes - 1, playerPunctuation, player.punctuation_4_total + 1, player.level));
    } else {
      this.setState({resultMessage: 'Game Over!'});
      this.resetGame();
    }

  }

  gameLogic = () => {
    const {actualObject, actualLevel, actualThematic} = this.state;
    return( 
      <GameLogic 
        compareMe={actualObject} 
        actualLevel={actualLevel}
        thematic={actualThematic}
        nextGame={this.nextGame}
        resolveDeath={this.resolveDeath}
        passedGames={this.state.passedGames}
        setGamesPassed={this.setGamesPassed}
        subthemeId={this.props.subthemeId} 
        resetGame={this.resetGame} 
        passedGames={this.state.passedGames} 
        setCardAnswer={this.setCardAnswer} 
        selectedObject={this.selectedObject} /> 
      )
  }

  renderCoins = () =>{
    return (
      <div className="coins">
        <span>{this.state.coins}</span>
      </div>
    )
  }

  renderHelp = () => {
    return (<i className='get-help fa fa-question-circle' onClick={() => this.getHelp()}></i>)
  }

  getHelp = () => {
    // get word objective
    const { coins, objective } = this.state;
    if (coins >= 2) {
      this.setState({coins: coins - 3});
      let usedLetters = this.props.letters;
      let abecedary = 'ABCDEFGHIJKLMNOPQRSTUVWXYZßÄÖÜ'.split('').map( (letter) => {
          if (usedLetters.indexOf(letter) === -1) {
            return letter
          }
      })
      let selectedLetter = shuffle(abecedary).join('').charAt(0);

      this.props.dispatch(letters(usedLetters + selectedLetter));
      // make game logic this.state.letters to reflect change
      if (objective.toLowerCase().indexOf(selectedLetter.toLowerCase()) > -1){
        jQuery(`.keyboard span:contains(${selectedLetter})`).click()
      }
      // on pass game force keyboard cleanup
    }

  }

  selectedObject = (objective) => {
    this.setState({objective})
  }

  swapViews = () => {
    if (this.state.show) {
      return(
        <div className="start-me" onClick={() => this.startGame()}>
          <h1>Anfang!</h1>
        </div>
      )
    } else {
      return(
        <div>
          {this.gameSubNav()}
          {this.renderCoins()}
          {this.renderHelp()}
          <div className={`game-image hang-${this.props.fails}`}></div>
          {this.gameLogic()}
        </div>
      )

    }
  }

  result = () => {
    const {subtheme} = this.props.gameData;
    if (this.state.passedGames > subtheme.best_spree) {
      return `
        ${this.state.cardAnswer[0]}\r\n
        ${this.state.cardAnswer[1]}\r\n
        \n
        ${this.state.resultMessage}\r\n
        ${subtheme.name}\r\n
        New Record: ${this.state.passedGames} !!!\r\n
        Lifes: ${this.props.germanGame.lifes}
      `
    } else {
      return `
        ${this.state.cardAnswer[0]}\r\n
        ${this.state.cardAnswer[1]}\r\n
        \n
        ${this.state.resultMessage}\r\n
        ${subtheme.name}\r\n
        Level Record: ${subtheme.best_spree}\r\n
        Current Spree: ${this.state.passedGames}\r\n
        Lifes: ${this.props.germanGame.lifes}
    `
    }
  }

  acceptFate = () => {
    this.setState({showTotal: false});
    history.push(`/subthemes?theme=${this.props.gameData.subtheme.theme}`);
  }

  renderGameOrResult = () => {
    if (this.state.showTotal) {
      return (
        <div className="game-comparer markdown" onClick={() => this.acceptFate()}>
          <Markdown>{this.result()}</Markdown>
        </div>
      )
    } else {
      return this.swapViews()
    }
  }
  
  render() {
    return (
      <div className="game-container">
        {this.renderGameOrResult()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    gameData: state.gameData,
    subThemes: state.subThemes,
    germanGame: state.germanGame,
    letters: state.letters,
    fails: state.fails
  }
}
export default connect(mapStateToProps)(GameHangman);
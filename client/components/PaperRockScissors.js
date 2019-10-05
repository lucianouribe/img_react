import React from 'react';
import { connect } from 'react-redux';

class PaperRockScissors extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      go: true,
      whatToShow: 'player1',
      message: '',
      playerChoice: '',
      pcChoice: '',
      computer: 0,
      player: 0,
      ties: 0,
      games: 0
    }

    this.elector = this.elector.bind(this);
    this.computerTime = this.computerTime.bind(this);
    this.evaluatingTime = this.evaluatingTime.bind(this);
  }

  componentDidUpdate(){
    this.evaluatingPoints()
  }

  elector(chosen){
    this.setState({playerChoice: chosen, go:false, whatToShow: 'election'});
    //spend some time here
    setInterval(this.computerTime(chosen), 3000);
  }

  computerTime(chosen){
    let pcChoiceArray = ['rock', 'paper', 'scissors'];
    let pcChoice = Math.floor(Math.random() * pcChoiceArray.length)
    let pcChosen = pcChoiceArray[pcChoice]
    this.setState({pcChoice: pcChosen, whatToShow: 'computer'})
    this.evaluatingTime(chosen, pcChosen)
  }

  evaluatingTime(player, compu) {
    if(player === 'rock' && compu === 'rock') {
      this.setState({ties: this.state.ties + 1, message: 'Tie!'});
    } else if (player === 'rock' && compu === 'paper') {
      this.setState({computer: this.state.computer + 1, message: 'You loose!'});
    } else if (player === 'rock' && compu === 'scissors') {
        this.setState({player: this.state.player + 1, message: 'You Win!!'});
    } else if (player === 'paper' && compu === 'rock') {
        this.setState({player: this.state.player + 1, message: 'You Win!!'});
    } else if (player === 'paper' && compu === 'paper') {
        this.setState({ties: this.state.ties + 1, message: 'Tie!'});
    } else if (player === 'paper' && compu === 'scissors') {
          this.setState({computer: this.state.computer + 1, message: 'You loose!'});
    } else if (player === 'scissors' && compu === 'rock') {
          this.setState({computer: this.state.computer + 1, message: 'You loose!'});
    } else if (player === 'scissors' && compu === 'paper') {
        this.setState({player: this.state.player + 1, message: 'You Win!!'});
    } else if (player === 'scissors' && compu === 'scissors') {
        this.setState({ties: this.state.ties + 1, message: 'Tie!'});
    }
    // this.evaluatingPoints();
    this.setState({go: true})
  }

  evaluatingPoints(){
    let gameWon = 'gameWon';
    let gameLost = 'gameLost';
    if(this.state.player === 3){
      this.props.finish(true)
      this.props.whatToShow(gameWon)
    } else if (this.state.computer === 3){
      this.props.finish(true)
      this.props.whatToShow(gameLost)
    }
  }


  rpsContainer(){
    let rock = 'rock';
    let paper = 'paper';
    let scissors = 'scissors';

    return(
      <div className="the-rps-container">
        <i className="ppt fa fa-hand-scissors-o" onClick={()=> this.elector(scissors)}></i>
        <i className="ppt fa fa-hand-paper-o" onClick={()=> this.elector(paper)}></i>
        <i className="ppt fa fa-hand-rock-o" onClick={()=> this.elector(rock)}></i>
        <i className="rppt space"></i>
        <i className="rppt fa fa-hand-rock-o"></i>
        <i className="rppt fa fa-hand-paper-o"></i>
        <i className="rppt fa fa-hand-scissors-o"></i>
      </div>
    )
    
  }

  choiseContainer(){
    return(
      <div className="the-rps-container">
        <div className="hand-choices">{this.state.playerChoice}</div>
        <div className="hand-choices">{this.state.pcChoice}</div>
      </div>
    )
  }

  resultingStuff(){
    return(
      <div className='resulting-stuff'>
        <p>Player: <strong className="verde" >{this.state.player}</strong></p>
        <p>Computer: <strong className="rojo" >{this.state.computer}</strong></p>
        <p>Ties: <strong className="negro" >{this.state.ties}</strong></p>
      </div>
    )
  }
  continuePlaying(){
    this.setState({whatToShow: 'player1'})
  }

  renderer(){
    switch (this.state.whatToShow) {
      case 'player1':
        return(this.rpsContainer())
        break;
      case 'election':
        return(<div className={`hand-choices img-${this.state.playerChoice}`}></div>)
        break;
      case 'computer':
        return(
          <div className="competing">
            <div className={`hand-choices img-${this.state.playerChoice}`}></div>
            <div className="message-btn" onClick={()=> this.continuePlaying()}>{this.state.message}<p>click to continue</p></div>
            <div className={`hand-choices rimg-${this.state.pcChoice}`}></div>
          </div>
        )
        break;
      default:

    }
  }

  render(){
    return(
      <div className="paper-rock-scissors-container">
        <p className='bienvenido'>Rock, Paper, Scissors</p>
        <h4>{`THE BEST OF 3`}</h4>
        {this.resultingStuff()}
        {this.renderer()}
      </div>
    )
  }

}
const mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps)(PaperRockScissors);

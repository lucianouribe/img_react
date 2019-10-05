import React from 'react';
import { connect } from 'react-redux';

import PaperRockScissors from './PaperRockScissors';
import ColorForm from './ColorForm';

class Introduction extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      finishGame: false,
      whatToShow: ''
    }

    this.setStaterFinish = this.setStaterFinish.bind(this);
    this.setStaterWhat = this.setStaterWhat.bind(this);
  }

  setStaterFinish(info){
    this.setState({finishGame: info})
  }
  setStaterWhat(info){
    this.setState({whatToShow: info})
  }

  renderer(){
    if(this.state.finishGame){
      if(this.state.whatToShow === 'gameWon') {
        return(
          <div>
            <span className="game-lost-won">
              <p className='bienvenido'>You Won!!!</p>
              <div className="play-again-btn" onClick={()=> this.setState({finishGame: false})}><span>play again</span></div>
            </span>
            <span className="game-color-form">
              <h2>Since you won, you get to change the color of this site</h2>
              <ColorForm />
            </span>
          </div>
        )
      } else if (this.state.whatToShow === 'gameLost'){
        return(
          <div>
            <span className="game-lost-won">
              <p className='bienvenido'>You loose!!!</p>
              <div className="play-again-btn" onClick={()=> this.setState({finishGame: false})}><span>play again</span></div>
            </span>
          </div>
        )
      }
    } else {
      return(<PaperRockScissors finish={this.setStaterFinish} whatToShow={this.setStaterWhat}/>)
    }
  }

  render(){
    return(
      <div className="introduction">
        {this.renderer()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    idiomas: state.idiomas
  }
}

export default connect(mapStateToProps)(Introduction);

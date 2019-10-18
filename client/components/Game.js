import React from 'react';
import { connect } from 'react-redux';
import { fetchGameData } from '../actions/game';

class Game extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      subtheme: ''
    }
  }
  componentDidMount(){
    const subtheme = window.location.search.replace("?theme=", "");
    this.setState({subtheme});
    this.props.dispatch(fetchGameData(subtheme))
  }

  render() {
    return (
      <div id="game">
        <p>{`Subtheme: ${this.state.subtheme}`}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    gameData: state.gameData
  }
}
export default connect(mapStateToProps)(Game);
import React from 'react';
import { connect } from 'react-redux';

class PlayerStats extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
  }

  render() {
    const player = this.props.player;
    return (
      <div className="player_stats">
        <p>Lifes: {player.lifes}</p>
        <p>Points: {player.punctuation}</p>
        <p>Games Played: {player.punctuation_4_total}</p>
        <p>Level: {player.level}</p>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}
export default connect(mapStateToProps)(PlayerStats);
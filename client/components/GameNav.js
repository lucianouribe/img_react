import React from 'react';
import { connect } from 'react-redux';

class GameNav extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
  }
  
  render() {
    return (
      <div className="game-nav">
        <span>{this.props.subtheme.level}</span>
        <span>{this.props.subtheme.theme}</span>
        <span>{this.props.subtheme.points}</span>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // gameData: state.gameData
  }
}
export default connect(mapStateToProps)(GameNav);
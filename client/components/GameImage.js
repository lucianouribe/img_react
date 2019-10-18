import React from 'react';
import { connect } from 'react-redux';

class GameImage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
  }

  render() {
    return (
      <div className="game-image">
        game image
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // gameData: state.gameData
  }
}
export default connect(mapStateToProps)(GameImage);
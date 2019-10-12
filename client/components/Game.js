import React from 'react';
import { connect } from 'react-redux';

class Game extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Hello Game!</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    germanGame: state.germanGame
  }
}
export default connect(mapStateToProps)(Game);
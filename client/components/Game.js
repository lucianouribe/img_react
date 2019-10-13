import React from 'react';
import { connect } from 'react-redux';

class Game extends React.Component {

  constructor(props) {
    super(props);
  }
  componentDidMount(){
    // const search = window.location.search.replace("?theme=", "");
  }

  render() {
    const search = window.location.search.replace("?theme=", "");
    return (
      <div>{`Hello Game! ${search}`}</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    germanGame: state.germanGame
  }
}
export default connect(mapStateToProps)(Game);
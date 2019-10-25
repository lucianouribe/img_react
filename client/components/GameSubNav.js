import React from 'react';
import { connect } from 'react-redux';

class GameSubNav extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
  }

  render() {
    const {subthemeName, subthemeHearts, actual, amount, hintCounter} = this.props;
    return (
      <div className="game-sub-nav">
        <span>{subthemeName}</span>
        <span className="hearts"><i className="fa fa-heart"></i><p>x</p><span>{subthemeHearts - hintCounter}</span></span>
        <span>{actual + 1}|{amount}</span>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // gameData: state.gameData
  }
}
export default connect(mapStateToProps)(GameSubNav);
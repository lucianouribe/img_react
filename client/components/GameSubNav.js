import React from 'react';
import { connect } from 'react-redux';

class GameSubNav extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
  }

  render() {
    const { subthemeName, subthemeBest, actual, amount } = this.props;
    return (
      <div className="game-sub-nav">
        <span>{subthemeName}</span>
        <span className="trophy"><i className="fa fa-trophy"></i><p>x</p><span>{subthemeBest}</span></span>
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
import React from 'react';
import { connect } from 'react-redux';

class GameNav extends React.Component {

  getInfo = () => {
    const {subThemes, subthemeId} = this.props;
    for (const subT of subThemes) {
      if (subT.id === subthemeId) {
        return (
          <div className="game-nav">
            <span>{subT.level}</span>
            <span>{subT.theme}</span>
            <span>{subT.points}</span>
          </div>
        )
      }
    }
  }
  
  render() {
    return (
      <div>
        {this.getInfo()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    subThemes: state.subThemes
  }
}
export default connect(mapStateToProps)(GameNav);
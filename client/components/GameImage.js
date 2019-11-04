import React from 'react';
import { connect } from 'react-redux';

class GameImage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
  }

  getStyle = () => {
    const {subthemeImage, compareMe} = this.props;
    // console.log(compareMe)
    let divStyle;
    divStyle = {
      backgroundImage: `url(${subthemeImage})`
    };
    return divStyle
  }

  render() {


    return (
      <div className="game-image" style={this.getStyle()}></div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    gameData: state.gameData
  }
}
export default connect(mapStateToProps)(GameImage);
import React from 'react';
import { connect } from 'react-redux';

import { fetchGermanGame } from '../actions/germanGame';

class Deutsch extends React.Component {

  constructor(props) {
    super(props);

    this.state = {}
  }

  componentDidMount(){
    this.props.dispatch(fetchGermanGame());
  }

  worlds =()=> {
    console.log('world', this.props.germanGame.world_themes)
    const world = this.props.germanGame.world_themes;
    if(world){
      return world.forEach(element => {
        console.log(element)
      });
      // for (const item in world) {
      //   console.log(item)
      // }
    }
    // let worldThemes = this.props.germanGame.world_themes;
    // if(worldThemes > 0) {
      // return worldThemes.map(theme => {
      //   console.log(theme)
      //   return(<div>{theme}</div>)
      // })
    // }
  }
  
  render() {
    return (
      <div id="deutsch">
        <p>Lifes: {this.props.germanGame.lifes}</p>
        {this.worlds()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    germanGame: state.germanGame
  }
}
export default connect(mapStateToProps)(Deutsch);
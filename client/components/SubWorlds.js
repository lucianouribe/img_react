import React from 'react';
import { connect } from 'react-redux';
import { fetchSubThemes } from '../actions/subThemes';
import PlayerStats from './PlayerStats';
import SubWorld from './SubWorld';
import Game from './Game';

class SubWorlds extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      theme: '',
      game: false
    }
  }

  componentDidMount(){
    const search = window.location.search.replace("?theme=", "");
    this.setState({theme: search})
    this.props.dispatch(fetchSubThemes(search))
  }

  toggleView = () => {
    this.setState({game: !this.state.game});
  }

  renderSubWorlds = () => {
    const world = this.props.subThemes;
    return world.map(subtheme => {
      return(<SubWorld key={subtheme.id} subtheme={subtheme} theme={this.state.theme} toggleView={this.toggleView} /> )
    })
  }

  renderView = () => {
    const player = this.props.germanGame;
    if(this.state.game) {
      return(<Game />)
    } else {
      return(
        <div id="world_subthemes">
          <PlayerStats player={player} title={this.state.theme}/>
          {this.renderSubWorlds()}
        </div>
      )
    }
  }

  render() {
    return (
      this.renderView()
    )
  }
}

const mapStateToProps = (state) => {
  return {
    germanGame: state.germanGame,
    subThemes: state.subThemes
  }
}
export default connect(mapStateToProps)(SubWorlds);
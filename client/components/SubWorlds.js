import React from 'react';
import { connect } from 'react-redux';
import { fetchSubThemes } from '../actions/subThemes';
import PlayerStats from './PlayerStats';
import SubWorld from './SubWorld';

class SubWorlds extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      theme: ''
    }
  }

  componentDidMount(){
    const search = window.location.search.replace("?theme=", "");
    this.setState({theme: search})
    this.props.dispatch(fetchSubThemes(search))
  }

  renderSubWorlds = () => {
    const world = this.props.subThemes;
    return world.map(subtheme => {
      return(<SubWorld key={subtheme.id} subtheme={subtheme} theme={this.state.theme} toggleView={this.toggleView} /> )
    })
  }

  render() {
    const player = this.props.germanGame;
    return (
      <div id="world_subthemes">
        <PlayerStats player={player} title={this.state.theme}/>
        {this.renderSubWorlds()}
      </div>
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
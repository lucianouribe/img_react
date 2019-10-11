import React from 'react';
import { connect } from 'react-redux';
import { fetchSubThemes } from '../actions/subThemes';

class SubWorld extends React.Component {

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
      return(<div key={subtheme.id}>{subtheme.name}</div> )
    })
  }

  render() {
    return (
      <div id="world_subthemes">
        <h1>{this.state.theme}</h1>
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
export default connect(mapStateToProps)(SubWorld);
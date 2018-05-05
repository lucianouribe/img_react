import React from 'react';
import { connect } from 'react-redux';
import { fetchProyectos } from '../actions/proyectos';

class ProyectosSearch extends React.Component {

  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(){
    this.props.dispatch(fetchProyectos(this.refs.searchInput.value));
  }

  render() {
    return (
      	<input type="text" className="search-input" placeholder="buscar proyecto" ref='searchInput' onChange={this.handleChange} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    proyectos: state.proyectos
 }
}

export default connect(mapStateToProps)(ProyectosSearch);

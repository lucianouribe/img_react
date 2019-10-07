import React from 'react';
import { connect } from 'react-redux';
import { deleteProyecto } from '../actions/proyectos';

class ProyectoShow extends React.Component {
  constructor(props){
    super(props);

    this.displayButtons = this.displayButtons.bind(this);
  }

  componentDidMount(){
    let url = window.location.search
    console.log(url)
  }

  displayButtons(){
    const allowed = this.props.user.role === 'admin';
    let proyecto = this.props.proyecto;
    let topic = proyecto.topic;
    let subtopic = proyecto.subtopic;
    if (allowed) {
      return(
        <span className={`botones ${proyecto.difficulty}`}>
          <i className="material-icons btn-icon btn-add" onClick={() => this.props.showAddPasoOption()}>add</i>
          <i className="material-icons btn-icon btn-delete" onClick={() => this.props.dispatch(deleteProyecto(proyecto.id))}>delete</i>
          <i className="material-icons btn-icon btn-edit" onClick={() => this.props.showEditContent(topic, subtopic)}>edit</i>
        </span>
      )
    }
  }

  render() {
    let proyecto = this.props.proyecto;
    let topic = proyecto.topic;
    let subtopic = proyecto.subtopic;
    let proyecto_name = proyecto.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase()
    return (
      <div id={`${proyecto_name}_project`} className={`proyecto-unidad principal`}>
        <span className='container-logos'>
          <div className={`cont-log ${topic}`}></div>
          <div className={`cont-log ${subtopic}`}></div>
        </span>
        <span className='titulo-nombre' onClick={() => this.props.showPasosDisplay(proyecto_name)}>
          <h4>{proyecto.name}</h4>
        </span>
        {this.displayButtons()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(ProyectoShow);

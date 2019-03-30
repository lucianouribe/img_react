import React from 'react';
import { connect } from 'react-redux';
import { deleteProyecto } from '../actions/proyectos';

class ProyectoShow extends React.Component {
  constructor(props){
    super(props);

    this.displayButtons = this.displayButtons.bind(this);
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
    return (
      <div className={`proyecto-unidad principal`}>
        <span className='container-logos'>
          <div className={`cont-log ${topic}`}></div>
          <div className={`cont-log ${subtopic}`}></div>
        </span>
        <span className='titulo-nombre'>
          <h4 onClick={() => this.props.showPasosDisplay()}>{proyecto.name}</h4>
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

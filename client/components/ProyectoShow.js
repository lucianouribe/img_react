import React from 'react';
import { deleteProyecto } from '../actions/proyectos';

class ProyectoShow extends React.Component {
  constructor(props){
    super(props);
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
        <span className={`botones ${proyecto.difficulty}`}>
          <i className="material-icons btn-icon btn-add" onClick={() => this.props.showAddPasoOption()}>add</i>
          <i className="material-icons btn-icon btn-delete" onClick={() => this.props.dispatch(deleteProyecto(proyecto.id))}>delete</i>
          <i className="material-icons btn-icon btn-edit" onClick={() => this.props.showEditContent(topic, subtopic)}>edit</i>
        </span>
      </div>
    )
  }
}

export default ProyectoShow;

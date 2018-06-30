import React from 'react';
import Tutorials from '../Tutorials';

class ProyectoEdit extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      cualTopic: null,
      cualSubTopic: null
    }

    this.topicChanger = this.topicChanger.bind(this)
  }

  componentDidMount(){
    let proyectoTopic = this.props.proyecto.topic
    let picked = Tutorials[proyectoTopic]
    this.setState({
      cualTopic: proyectoTopic,
      cualSubTopic: picked
    });
  }

  topicChanger(aTopic){
    let picked = Tutorials[aTopic];
    this.setState({cualTopic: aTopic, cualSubTopic: picked});
  }

  getTopic(){
    let topic = this.props.proyecto.topic;
    let elProyecto = Tutorials.topic;
    let proyectoTopic = elProyecto.map((elPro, i) => {
      if(elPro === topic) {
        return (<option type="text" key={i} selected value={elPro}>{elPro}</option>)
      } else {
        return (<option type="text" key={i} value={elPro}>{elPro}</option>)
      }
    });
    return proyectoTopic;
  }

  getSubTopic(){
    let cualSubTopic = this.state.cualSubTopic;
    let subtopic = this.props.proyecto.subtopic;
    if(cualSubTopic !== null) {
      let subProyectoTopic = cualSubTopic.map((subPro, i) => {
        if(subPro === subtopic) {
          return (<option type="text" key={i} selected value={subPro}>{subPro}</option>)
        } else {
          return (<option type="text" key={i} value={subPro}>{subPro}</option>)
        }
      });
      return subProyectoTopic;
    }
  }

  getDifficulty(){
    let proyecto = this.props.proyecto;
    let proyectoDiffi = Tutorials.difficulty.map((diffiOpt, i) => {
      if(diffiOpt === proyecto.difficulty) {
        return (<option type="text" key={i} selected value={diffiOpt}>{diffiOpt}</option>)
      } else {
        return (<option type="text" key={i} value={diffiOpt}>{diffiOpt}</option>)
      }
    });
    return proyectoDiffi;
  }

  render() {
    let proyecto = this.props.proyecto;
    return(
      <div className="proyecto-unidad principal">
        <span className='titulo-nombre'>
          <form className="name-edit-form">
            <select className="browser-default select-topic" ref="topic" onChange={()=> this.topicChanger(this.refs.topic.value)}>
              {this.getTopic()}
            </select>
            <select className="browser-default select-topic" ref="subtopic">
              {this.getSubTopic()}
            </select>
            <select className="browser-default select-difficulty" ref="difficulty">
              {this.getDifficulty()}
            </select>
            <input type="hidden" ref='id' value={proyecto.id}/>
            <input className="name-edit" type="text" ref='name' defaultValue={proyecto.name}/>
          </form>
        </span>
        <span className='botones'>
          <i className="material-icons btn-icon btn-edit" onClick={() => this.props.saveProyecto(this.refs)}>done</i>
          <i className="material-icons btn-icon btn-edit" onClick={() => this.props.showEditContent()}>cancel</i>
        </span>
      </div>
    )
  }
}

export default ProyectoEdit;

import React from 'react';
import { connect } from 'react-redux';
import { addProyecto } from '../actions/proyectos';
import { ortografica } from '../helpers';
import Tutorials from '../Tutorials';

class ProyectoAdd extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      cualTopic: 'none',
      cualSubTopic: ['none']
    }

    this.setTopics = this.setTopics.bind(this);
    // this.addForm = this.addForm.bind(this);
    this.addHandleSubmit = this.addHandleSubmit.bind(this);
  }

  setTopics(aTopic){
    let picked = Tutorials[aTopic];
    this.setState({cualTopic: aTopic, cualSubTopic: picked});
  }

  addHandleSubmit(e){
    e.preventDefault();
    // console.log('handle sumbit')
    let name = this.refs.name.value.toLowerCase();
    let topic = this.refs.topic.value;
    let subtopic = this.refs.subtopic.value;
    let difficulty = this.refs.difficulty.value;
    let orden = 0;
    this.props.dispatch(addProyecto(name, topic, subtopic, difficulty, orden, this.props.user.id));
    this.props.toggleDisplay();
  }

  render(){
    let elProyecto = Tutorials.topic;
    let proyectoTopic = elProyecto.map((elPro, i) => {
      return (
        <option type="text" key={i} value={elPro} >{elPro}</option>
      );
    });

    let elSubProyecto = this.state.cualSubTopic;
    let subProyectoTopic;
    if(elSubProyecto !== []) {
      subProyectoTopic = elSubProyecto.map((subPro, i) => {
        return (
          <option type="text" key={i} value={subPro} >{ortografica(subPro)}</option>
        );
      });
    }
    // select topics could be a component or a separated method?
    return(
        <div className="tarjeta form-edit">
          <form className="input-field" encType="multipart/form-data">
            <div className="tarjeta-content">
              <h3 className='tarjeta-title center'>Proyecto nuevo</h3>
                <input type="text" ref='name' required placeholder="nombre"/>
                <select className="browser-default" ref="topic" onChange={() => this.setTopics(this.refs.topic.value)}>
                  {proyectoTopic}
                </select>
                <select className="browser-default" ref="subtopic">
                  {subProyectoTopic}
                </select>
                <select className="browser-default" ref="difficulty">
                  <option>basic</option>
                  <option>medium</option>
                  <option>advanced</option>
                  <option>sayayin</option>
                </select>
            </div>
            <div className="tarjeta-action">
              <span onClick={this.addHandleSubmit}><i className="material-icons">done</i></span>
              <span onClick={this.toggleDisplay}><i className="material-icons">cancel</i></span>
            </div>
          </form>
        </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    user: state.user
 }
}

export default connect(mapStateToProps)(ProyectoAdd);

import React from 'react';
import { connect } from 'react-redux';

import Procom from './Procom';

import { fetchPasos, deletePaso } from '../actions/proyectos';
import { createMarkup } from '../helpers';


class Paso extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      showComment: false,
      showProblem: false,
      typeOfProcom: true
    }

    this.toggleProcoms = this.toggleProcoms.bind(this);
    this.setComment = this.setComment.bind(this);
    this.setProblem = this.setProblem.bind(this);
    this.deletePaso = this.deletePaso.bind(this);
    this.procoms = this.procoms.bind(this);
  }

  toggleProcoms(){
    this.setState({show: !this.state.show})
  }

  setComment(){
    this.setState({showComment: !this.state.showComment, typeOfProcom: true});
  }

  setProblem(){
    this.setState({showProblem: !this.state.showProblem, typeOfProcom: false});
  }

  deletePaso(pasId, proyecto){
    console.log('delete me')
    this.props.dispatch(deletePaso(pasId, proyecto));
    // this.props.showContent();
    // let full = 'full';
    // this.props.dispatch(fetchProyectos(full));
  }

  procoms(){
    let showProcoms = this.props.procoms;
    let paso = this.props.elpaso;
    let comments = this.props.procoms.filter( comme => { if(comme.type_of_issue === true) return comme })
    let problems = this.props.procoms.filter( proble => { if(proble.type_of_issue === false) return proble })
    if(this.state.showComment && this.state.typeOfProcom === true) {
      if(showProcoms.length > 0) {
        return comments.map( procom => {
          return(<Procom key={procom.id} procom={procom} paso={paso} />);
        })
      } else {
        return (<p>no comments</p>)
      }
    } else if (this.state.showProblem && this.state.typeOfProcom === false) {
      if(showProcoms.length > 0) {
        return problems.map( procom => {
          return(<Procom key={procom.id} procom={procom} paso={paso} />);
        })
      } else {
        return (<p>no problems</p>)
      }
    }
  }

  render() {
    let paso = this.props.elpaso;
    let proyecto = this.props.proyecto;
    return(
      <div>
      <div className={`paso-container ${paso.estilo}`}>
        <div className="paso-content" dangerouslySetInnerHTML={createMarkup(paso.step)}/>
        <span className='botones'>
          <i className="material-icons btn-icon btn-add">add</i>
          <i className="material-icons btn-icon btn-report" onClick={() => this.setProblem()}>report</i>
          <i className="material-icons btn-icon btn-comment" onClick={() => this.setComment()}>comment</i>
          <i className="material-icons btn-icon btn-edit">edit</i>
          <i className="material-icons btn-icon btn-delete" onClick={() => this.deletePaso(paso.id, proyecto)}>delete</i>
        </span>
      </div>
      {this.procoms()}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {

  }
}
export default connect(mapStateToProps)(Paso);

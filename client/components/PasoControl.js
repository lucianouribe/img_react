import React from 'react';

class PasoControl extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      showDelete: false
    }

    this.setShow = this.setShow.bind(this);
    this.setDelete = this.setDelete.bind(this);
  }

  setShow(){
    this.props.addProcomSetter();
    this.setState({ showDelete: !this.state.showDelete })
  }

  setDelete(){
    const { pasoId, proyectoId } = this.props;
    if(confirm('Are you sure?')) {
      this.props.deletePasoFunc(pasoId, proyectoId)
    }
  }

  controlOptions(){
    if(this.state.showDelete === true) {
      return(<i className="fa fa-trash btn-icon" aria-hidden="true" onClick={() => this.setDelete()}></i>)
    } else {
      return(<i className="fa fa-plus-circle btn-icon" aria-hidden="true" onClick={() => this.setShow()}></i>)
    }
  }

  render() {
    const comment = 'comment';
    const problem = 'problem';
    let showComment;
    let showProblem;
    if(this.props.comments) { showComment = { display: 'block'} }
    if(this.props.problems) { showProblem = { display: 'block'} }
    return (
      <div className="paso-control">
        <span className='procom-status'>
          <i className="fa fa-comments btn-icon problem-btn" aria-hidden="true" style={showComment} onClick={() => this.props.showProcomsFu(comment)}></i>
          <i className="fa fa-exclamation-triangle btn-icon comment-btn" aria-hidden="true" style={showProblem} onClick={() => this.props.showProcomsFu(problem)}></i>
        </span>
        <span className="mini-botones">
          {this.controlOptions()}
        </span>
      </div>
    )
  }
}

export default PasoControl;

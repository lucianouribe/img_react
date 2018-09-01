import React from 'react';

class PasoControl extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      buttonPressed: false,
    }

    this.setShow = this.setShow.bind(this);
    this.setDelete = this.setDelete.bind(this);
    this.utilitiesOptions = this.utilitiesOptions.bind(this);
  }

  componentDidUpdate(){
    if(this.props.closeStuff === true) {
      this.setState({ buttonPressed: false });
      this.props.setCloseStuff(false)
    }
  }

  setShow(){
    this.props.addProcomSetter();
    this.setState({ buttonPressed: !this.state.buttonPressed })
  }

  setDelete(){
    const { pasoId, proyectoId } = this.props;
    if(confirm('Are you sure?')) {
      this.props.deletePasoFunc(pasoId, proyectoId)
    }
  }

  utilitiesOptions(){
    const comments = this.props.procoms.some( comme => comme.type_of_issue === 'comment' );
    const problems = this.props.procoms.some( proble => proble.type_of_issue === 'problem' );
    const comment = 'comment';
    const problem = 'problem';
    let showComment;
    let showProblem;
    if(comments) { showComment = { display: 'block'} }
    if(problems) { showProblem = { display: 'block'} }

    if(this.state.buttonPressed === true){
      return(
        <span className='procom-status'>
          <i className="fa fa-trash btn-icon beware-btn" aria-hidden="true" onClick={() => this.setDelete()}></i>
        </span>
      )
    } else {
      return(
        <span className='procom-status'>
          <i className="fa fa-comments btn-icon comment-btn" aria-hidden="true" style={showComment} onClick={() => this.props.showProcomsFu(comment)}></i>
          <i className="fa fa-exclamation-triangle btn-icon problem-btn" aria-hidden="true" style={showProblem} onClick={() => this.props.showProcomsFu(problem)}></i>
        </span>
      )
    }
  }

  controlOptions(){
    if(this.state.buttonPressed === true) {
      return(<i className="fa fa-ban mini-btn" aria-hidden="true" onClick={() => this.setState({buttonPressed: false})}></i>)
    } else {
      return(<i className="fa fa-plus-circle mini-btn" aria-hidden="true"></i>)
    }
  }

  render() {
    return (
      <div className="paso-control">
        {this.utilitiesOptions()}
        <span className="mini-botones"onClick={() => this.setShow()}>
          {this.controlOptions()}
        </span>
      </div>
    )
  }
}

export default PasoControl;

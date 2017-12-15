import React from 'react';
import { connect } from 'react-redux';
import { createMarkup } from '../helpers';
import { editProcom, deleteProcom } from '../actions/proyectos';

class Procom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      typeOfIssue: true,
      showEditButtons: 'hide-buttons',
    }

    this.showEditForm = this.showEditForm.bind(this);
    this.submitEditProcom = this.submitEditProcom.bind(this);
    this.deleteProcom = this.deleteProcom.bind(this);
    this.setTextareaHeight = this.setTextareaHeight.bind(this);
  }

  componentDidMount(){
    this.setTextareaHeight($('textarea'));
  }

  setTextareaHeight(paso){
    paso.each(function(index, item){
      item.style.height = item.scrollHeight+'px';
    });
  }

  // edit
  showEditForm(){
    this.setState({showEdit: !this.state.showEdit})
  }

  submitEditProcom(){
    let paso = this.props.paso;
    let procom = this.props.procom;
    let pro_content = this.refs.pro_content.value;
    let type_of_issue = this.state.typeOfIssue;
    let pro_style;
    if(this.state.typeOfIssue) {
      pro_style = 'comentario';
    } else {
      pro_style = 'problema';
    }
    let pro_order = 0;
    // console.log(pro_content)
    this.props.dispatch(editProcom(paso, procom.id, pro_content, pro_style, pro_order, type_of_issue));
    this.setState({showEditButtons: 'hide-buttons'})
  }

  // delete
  deleteProcom(procomId, pasoId){
    console.log('delete me')
    this.props.dispatch(deleteProcom(procomId, pasoId));
  }

  optionButtons(){
    let comentario = true;
    let problema = false;
    return(
      <div className={`botones btns-radial-procom ${this.state.showEditButtons}`}>
        <input type='radio' name="radAnswer" id='comentario' onClick={()=> this.setState({typeOfIssue: comentario})}/>
        <label htmlFor='comentario'><i className="fa fa-comments btn-icon" aria-hidden="true"></i></label>
        <input type='radio' name="radAnswer" id='problema' onClick={()=> this.setState({typeOfIssue: problema})}/>
        <label htmlFor='problema'><i className="fa fa-exclamation-triangle btn-icon" aria-hidden="true"></i></label>
      </div>
    )
  }

  render(){
    let procom = this.props.procom;
    let paso = this.props.paso;
    let comentario = true;
    let problema = false;
    let show = 'show-buttons';
    let hide = 'hide-buttons';
    return (
      <div className={`procom-container ${procom.pro_style}`}>
        <span className="procom-content">
          <p>{`<- ${procom.pro_style} `}<strong>{`#${this.props.numeracion}`}</strong>{`  ->`}</p>
          <textarea ref='pro_content' onChange={()=>this.setState({showEditButtons: show})}>{procom.pro_content}</textarea>
        </span>
        <span className="botones-container">
          <span className={`botones`}>
            <i className="fa fa-check" aria-hidden="true" onClick={()=> this.submitEditProcom()}></i>
            <i className="fa fa-ban" aria-hidden="true" onClick={()=> this.setState({ showEditButtons: hide})}></i>
            <i className="fa fa-trash" aria-hidden="true" onClick={()=> this.deleteProcom(procom.id, paso.id)}></i>
          </span>
          {this.optionButtons()}
        </span>
      </div>
    )
  }

}


const mapStateToProps = (state) => {
  return {

  }
}
export default connect(mapStateToProps)(Procom);

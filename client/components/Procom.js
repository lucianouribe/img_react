import React from 'react';
import { connect } from 'react-redux';
import { createMarkup } from '../helpers';
import { editProcom, deleteProcom } from '../actions/proyectos';

class Procom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showEdit: false
    }

    this.showEditForm = this.showEditForm.bind(this);
    this.submitEditProcom = this.submitEditProcom.bind(this);
    this.deleteProcom = this.deleteProcom.bind(this);
  }

  // edit
  showEditForm(){
    this.setState({showEdit: !this.state.showEdit})
  }

  procomEditForm(){
    let procom = this.props.procom;
    return(
      <div className="tarjeta form-edit">
        <form className="add-form-container input-field">
          <div className="tarjeta-content">
            <textarea ref='pro_content'>{procom.pro_content}</textarea>
          </div>
          <div className="tarjeta-action">
            <span><i className="material-icons" onClick={()=> this.submitEditProcom()}>done</i></span>
            <span><i className="material-icons" onClick={()=> this.showEditForm()}>cancel</i></span>
          </div>
        </form>
      </div>
    )
  }

  submitEditProcom(){
    let paso = this.props.paso;
    let procom = this.props.procom;
    let pro_content = this.refs.pro_content.value;
    let pro_style = 'comentario';
    let pro_order = 0;
    let type_of_issue = true;
    // console.log(pro_content)
    this.props.dispatch(editProcom(paso, procom.id, pro_content, pro_style, pro_order, type_of_issue));
    this.showEditForm();
  }

  // delete
  deleteProcom(procomId, pasoId){
    console.log('delete me')
    // console.log(procomId, paso)
    this.props.dispatch(deleteProcom(procomId, pasoId));
  }

  showProcomContent(){
    let procom = this.props.procom;
    let paso = this.props.paso;
    return (
      <div className={`procom-container ${procom.pro_style}`}>
        <div className="procom-content" dangerouslySetInnerHTML={createMarkup(procom.pro_content)}/>
        <span className='botones'>
          <i className="fa fa-pencil" aria-hidden="true" onClick={()=> this.showEditForm()}></i>
          <i className="fa fa-trash" aria-hidden="true" onClick={()=> this.deleteProcom(procom.id, paso.id)}></i>
        </span>
      </div>
    )
  }

  render() {
    if(!this.state.showEdit){
      return(this.showProcomContent())
    } else {
      return(this.procomEditForm())
    }
  }

}

const mapStateToProps = (state) => {
  return {

  }
}
export default connect(mapStateToProps)(Procom);

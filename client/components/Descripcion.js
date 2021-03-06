import React from 'react';
import { connect } from 'react-redux';
import { editDescripcion, deleteDescripcion } from '../actions/descripcions';
import { createMarkup } from '../helpers';


class Descripcion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false
    }

    this.toggleEdit = this.toggleEdit.bind(this);
    this.displayDescripcion = this.displayDescripcion.bind(this);
    this.editDescripcion = this.editDescripcion.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleEdit() {
    this.setState({edit: !this.state.edit});
  }

  handleSubmit(e){
    e.preventDefault();
    // console.log('Descripcion handle submit');
    let titulo = this.refs.titulo.value;
    let contenido = this.refs.contenido.value;

    this.props.dispatch(editDescripcion(this.props.descripcion.id, titulo, contenido ))
    this.toggleEdit();
  }

  editDescripcion() {
    let descripcion = this.props.descripcion;

    return(
      <div className="tarjeta form-edit">
        <form>
          <div className="tarjeta-content">
            <p>
              <strong>Title:</strong>
              <input type="text" ref='titulo' defaultValue={descripcion.titulo}/>
            </p>
            <p>
              <strong>Description:</strong>
              <textarea ref='contenido' defaultValue={descripcion.contenido}></textarea>
            </p>
          </div>
          <div className="tarjeta-action">
            <span onClick={this.handleSubmit}><i className="material-icons">done</i></span>
            <span onClick={this.toggleEdit}><i className="material-icons">cancel</i></span>
          </div>
        </form>
      </div>
    );
  }

  displayDescripcion(){
    let descripcion = this.props.descripcion;
    return (
      <div className="tarjeta">
        <div className="tarjeta-content">
          <h3>{ descripcion.titulo }</h3>
          <h6 className="campo"><span>{ descripcion.campo }</span></h6>
          <h6><span>{ descripcion.lenguaje }</span></h6>
          <div className="descripcion-contenido" dangerouslySetInnerHTML={createMarkup(descripcion.contenido)} />
        </div>
        <div className="tarjeta-action">
          <span onClick={this.toggleEdit}><i className="material-icons">mode_edit</i></span>
          <span onClick={() => this.props.dispatch(deleteDescripcion(descripcion.id))}><i className="material-icons">delete</i></span>
        </div>
      </div>
    )
  }


  render(){
    if(this.state.edit) {
      return(this.editDescripcion());
    } else {
      return(this.displayDescripcion());
    }
  }

}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    descripcions: state.descripcions
  }
}

export default connect(mapStateToProps)(Descripcion);

import React from 'react';
import { connect } from 'react-redux';
import { editDescripcion, deleteDescripcion } from '../actions/descripcions';
// import { createMarkup, ortografica } from '../helpers';


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
  //
  handleSubmit(e){
    e.preventDefault();
    console.log('Descripcion handle submit');

    let campo = this.refs.campo.value;
    let titulo = this.refs.titulo.value;
    let contenido = this.refs.contenido.value;
    let lenguaje = this.refs.lenguaje.value;

    this.props.dispatch(editDescripcion(this.props.descripcion.id, campo, titulo, contenido, lenguaje))
    this.toggleEdit();
  }

  editDescripcion() {
    let descripcion = this.props.descripcion;

    return(
      <div className="col s12 m4">
        <div className="card form-edit">
          <form>
            <div className="card-content">
              <p>
                <strong>Campo:</strong>
                <select className="browser-default" ref="campo" required>
                  <option value="panoramicos">panoramicos</option>
                  <option value="renders">renders</option>
                  <option value="productos">foto productos</option>
                  <option value="galeria">galeria</option>
                  <option value="gifs">gifs</option>
                  <option value="cirilico">cirilico</option>
                  <option value="morse">morse</option>
                  <option value="calculadora">calculadora</option>
                  <option value="equilibrio">equilibrio</option>
                </select>
              </p>
              <p>
                <strong>Title:</strong>
                <input type="text" ref='titulo' defaultValue={descripcion.titulo}/>
              </p>
              <p>
                <strong>Description:</strong>
                <textarea ref='contenido' defaultValue={descripcion.contenido}></textarea>
              </p>
              <p>
                <strong>Languaje:</strong>
                <select className="browser-default" ref="lenguaje" required>
                  <option value="ingles">english</option>
                  <option value="espanol">espanol</option>
                  <option value="frances">francais</option>
                  <option value="aleman">deutsch</option>
                  <option value="portugues">portugues</option>
                  <option value="italiano">italiano</option>
                </select>
              </p>
            </div>
            <div className="card-action">
              <span onClick={this.handleSubmit}><i className="material-icons">done</i></span>
              <span onClick={this.toggleEdit}><i className="material-icons">cancel</i></span>
            </div>
          </form>
        </div>
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
          <p>{descripcion.contenido}</p>
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

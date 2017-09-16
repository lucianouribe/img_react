import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCarrusel, editCarrusel } from '../actions/carrusels';


class CarruselsEdit extends Component {

  constructor(props) {
    super(props);


    this.addForm = this.addForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.editForm = this.editForm.bind(this);
    this.handleSubmitEdit = this.handleSubmitEdit.bind(this);

  }


  addForm() {
    return (
      <div>
        <form ref="imageForm" className="input-field">
          <span className="center title"><i type="button" onClick={this.props.showItem} className="close material-icons right">close</i><h5>Add new image</h5></span>
          <div className="card-content">
            <span className="card-title">
              <input type="text" required ref='name'  placeholder="name" />
            </span>
            <p><input type="text" ref="address" placeholder="Paste URL" /></p>
            <p><input type="text" ref="infopic" placeholder="Comments"  /></p>
            <select className="browser-default" ref="role">
              <option type="text" disabled>select role</option>
              <option type="text" value="panodigital">Pano Digital</option>
              <option type="text" value="panofotografia">Pano Foto</option>
              <option type="text" value="panoradar">Pano Radar</option>
              <option type="text" value="productos">Render Productos</option>
              <option type="text" value="espacios">Render Espacio</option>
              <option type="text" value="otros">Render Otros</option>
              <option type="text" value="renderGifs">Render Gifs</option>
              <option type="text" value="fotosJoyas">Fotos Joyas</option>
              <option type="text" value="fotosComp">Fotos Componentes</option>
              <option type="text" value="fotosCuadros">Fotos Cuadros</option>
              <option type="text" value="fotosDetalles">Galeria Detalles</option>
              <option type="text" value="fotosPaisajes">Galeria Paisajes</option>
              <option type="text" value="fotosUrbano">Galeria Urbano</option>
              <option type="text" value="fotosTexturas">Galeria Texturas</option>
              <option type="text" value="fotosMuelles">Galeria Muelles</option>
              <option type="text" value="fotosCuadrados">Galeria Cuadrados</option>
            </select>
          </div>
          <div className="card-action">
            <div type="submit" className="btn" onClick={this.handleSubmit}>submit</div>
          </div>
        </form>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log('this is my handle sumbit');
    let name = this.refs.name.value;
    let image = this.refs.address.value;
    let infopic = this.refs.infopic.value;
    let role = this.refs.role.value;
    this.props.dispatch(addCarrusel(name, image, infopic, role));
    let change = "show";
    this.props.menuButtonsMagic(change);
  }

  editForm() {
    let image = this.props.transitoryInfo[this.props.currentSlide];
    const show = "show"
    // console.log(image);
    return (
      <div>
        <form ref="imageForm" className="input-field">
          <span className="center title"><i type="button" onClick={()=> this.props.menuButtonsMagic(show)} className="close material-icons right">close</i><h5>Edit {image.name}</h5></span>
          <div className="card-content">
            <span className="card-title">
              <input type="text" required ref='name'  placeholder="name" defaultValue={image.name}/>
            </span>
            <p><input type="text" ref="address" placeholder="address" defaultValue={image.image}/></p>
            <p><input type="text" ref="infopic" placeholder="Picture Information" required defaultValue={image.infopic} /></p>
            <p><input type="text" ref="role" placeholder="role" required defaultValue={image.role} /></p>
          </div>
          <div className="card-action">
            <div type="submit" className="btn" onClick={this.handleSubmitEdit}>submit</div>
          </div>
        </form>
      </div>
    );
  }

  handleSubmitEdit(e) {
    e.preventDefault();
    // console.log('handle submit edit')
    let id = this.props.transitoryInfo[this.props.currentSlide].id
    let name = this.refs.name.value;
    let image = this.refs.address.value;
    let infopic = this.refs.infopic.value;
    let role = this.refs.role.value;
    this.props.dispatch(editCarrusel(id, name, image, infopic, role));
    let change = "show";
    this.props.menuButtonsMagic(change);
  }

  render() {
    if(this.props.doWhat === "add") {
      return(this.addForm());
    } else {
      return(this.editForm());
    }
  }

}


const mapStateToProps = (state) => {
  return {
    user: state.user,
    transitoryInfo: state.transitoryInfo
  }
}

export default connect(mapStateToProps)(CarruselsEdit);

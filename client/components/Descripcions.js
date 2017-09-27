import React from 'react';
import { connect } from 'react-redux';

import { fetchDescripcions, addDescripcion } from '../actions/descripcions';

import Descripcion from './Descripcion';

class Descripcions extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      showForm: false
    }

    this.toggleDisplay = this.toggleDisplay.bind(this);
    this.displayChanger = this.displayChanger.bind(this);
    this.addForm = this.addForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.showSearcher = this.showSearcher.bind(this);
  }

  componentDidMount(){
    $('select').material_select();
    let full = 'full'
    this.props.dispatch(fetchDescripcions(full));
  }

  componentDidUpdate() {
    $('select').material_select();
  }

  toggleDisplay(){
    this.setState({showForm: !this.state.showForm})
  }

  displayChanger(){
    if(this.state.showForm) {
      return(this.addForm());
    } else {
      return(this.displayDescripcions());
    }
  }

  displayDescripcions(){
    let descripcions = this.props.descripcions;
    if(descripcions.length) {
      return descripcions.map( descripcion => {
        return(<Descripcion key={descripcion.id} descripcion={descripcion} />);
      })
    }
  }

  addForm(){

    return(
      <div className="tarjeta form-edit">
        <form className="input-field">
          <div className="tarjeta-content">
            <h3 className='tarjeta-title center'>Add New Description</h3>
            <p>
              <select className="browser-default" ref="campo" required>
                <option disabled selected>Campo:</option>
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
            <p><input type="text" ref='titulo' required placeholder="Title:"/></p>
            <p><textarea ref='contenido' required placeholder="Description:"></textarea></p>
            <p>
              <select className="browser-default" ref="lenguaje" required>
                <option disabled selected>Languaje:</option>
                <option value="ingles">english</option>
                <option value="espanol">espanol</option>
                <option value="frances">francais</option>
                <option value="aleman">deutsch</option>
                <option value="portugues">portugues</option>
                <option value="italiano">italiano</option>
              </select>
            </p>
          </div>
          <div className="tarjeta-action">
            <span onClick={this.handleSubmit}><i className="material-icons">done</i></span>
            <span onClick={this.toggleDisplay}><i className="material-icons">cancel</i></span>
          </div>
        </form>
      </div>
    );
  }

  handleSubmit(e){
    e.preventDefault();
    // console.log('handle sumbit')
    let campo = this.refs.campo.value;
    let titulo = this.refs.titulo.value;
    let contenido = this.refs.contenido.value;
    let lenguaje = this.refs.lenguaje.value;

    this.props.dispatch(addDescripcion(campo, titulo, contenido, lenguaje))
    this.toggleDisplay();
  }

  // fix this part (the highlightened color)!!!!
  handleChange(){
    this.props.dispatch(fetchDescripcions(this.refs.searchInput.value));
    // signals with colors the matched words
    // $(`.card span`).removeClass("matched");
    // $(`.card p`).removeClass("matched");
    // let hello = this.refs.searchInput.value
    // if(hello !== '') {
    //   $(`.card span:contains(${hello})`).addClass("matched");
    //   $(`.card p:contains(${hello})`).addClass("matched");
    // }
  }

  showSearcher(){
    return(
      <input type="text" className="search-input" placeholder="buscar campo" ref='searchInput' onChange={this.handleChange} />
    )
  }

  render(){
    return (
      <div className='descripciones-container'>
        <div className='admin-title'>
          <h1>Descripciones</h1>
          {this.showSearcher()}
          <span onClick={this.toggleDisplay}><i className="add-btn material-icons medium">add</i></span>
        </div>
        <div className="description-cards">
          {this.displayChanger()}
        </div>
      </div>
    )
  }


}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    queVeo: state.queVeo,
    idiomas: state.idiomas,
    descripcions: state.descripcions,
  }
}

export default connect(mapStateToProps)(Descripcions);

import React, { Component } from 'react';
import { Link } from 'react-router';

class DashButtons extends Component {

  constructor() {
    super();
    // this.panodigital = this.panodigital.bind(this);
    // this.panocombinados = this.panocombinados.bind(this);
  }

  componentDidMount() {
    $('.collapsible').collapsible();
  }

  // panodigital(e) {
  //   e.preventDefault();
  //   console.log("this is goToSlider")
  //   const slide = {
  //     num: 1,
  //     name: "Panoramicos Digital",
  //     id: ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7'],
  //     commentsPerPic: ["AlteschGletcher | Switzerland", "Road in Bs | Argentina", "I dont Know", "Really, I dont", "How are you"],
  //     description: "This is what you see behind the bars and blablablalbal"
  //   }
  //   console.log(slide)
  //   this.props.convertSlide(slide);
  // }

  render() {
    return(
      <div className="dash-buttons">
        <ul className="collapsible" data-collapsible="accordion">
          <li>
            <div className="collapsible-header"><i className="material-icons">filter_drama</i>Panoramicos 360</div>
            <div className="collapsible-body"><a onClick={this.panodigital} >Digital</a></div>
            <div className="collapsible-body"><a onClick={this.props.panofotografia}>Fotografia</a></div>
            <div className="collapsible-body"><a onClick={this.panocombinados}>Combinados</a></div>
          </li>
          <li>
            <div className="collapsible-header"><i className="material-icons">filter_drama</i>Renders</div>
            <div className="collapsible-body" onClick={this.props.renderArq}><a>Arquitectura</a></div>
            <div className="collapsible-body" onClick={this.props.renderProd}><a>Productos</a></div>
            <div className="collapsible-body" onClick={this.props.renderAmb}><a>Ambientes</a></div>
          </li>
          <li>
            <div className="collapsible-header"><i className="material-icons">filter_drama</i>Programming</div>
            <div className="collapsible-body"><a>What time is it?</a></div>
            <div className="collapsible-body"><a>Batterie</a></div>
            <div className="collapsible-body"><a>Something else</a></div>
          </li>
          <li>
            <div className="collapsible-header"><i className="material-icons">filter_drama</i>Fotografia Productos</div>
            <div className="collapsible-body"><a>Joyas</a></div>
            <div className="collapsible-body"><a>Componentes</a></div>
            <div className="collapsible-body"><a>Cuadros</a></div>
          </li>
          <li>
            <div className="collapsible-header"><i className="material-icons">place</i>Fotografia Decorativa</div>
            <div className="collapsible-body"><a>Detalles</a></div>
            <div className="collapsible-body"><a>Paisajes</a></div>
            <div className="collapsible-body"><a>Urbano</a></div>
            <div className="collapsible-body"><a>Texturas</a></div>
            <div className="collapsible-body"><a>Muelles</a></div>
            <div className="collapsible-body"><a>Cuadrados</a></div>
          </li>
          <li>
            <div className="collapsible-header"><i className="material-icons">whatshot</i>Libros</div>
            <div className="collapsible-body"><a>Bitacora del Motoneto</a></div>
            <div className="collapsible-body"><a>Rutas de Oriente</a></div>
          </li>
          <li>
            <div className="collapsible-header"><i className="material-icons">whatshot</i>Blogs</div>
            <div className="collapsible-body"><a>Bitacora del Motoneto</a></div>
            <div className="collapsible-body"><a>Tribunal de Justicia</a></div>
          </li>
        </ul>
      </div>
    )
  }
}

export default DashButtons;

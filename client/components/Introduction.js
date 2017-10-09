import React from 'react';
import { connect } from 'react-redux';

class Introduction extends React.Component {
  render(){
    let navigatingConsole = navigator.platform.toLowerCase();
    let idioma = this.props.idiomas;
    let bienvenida;
    let mensaje;
    let arrow;
    switch (idioma) {
      case 'ingles':
        bienvenida = 'Welcome!';
        mensaje = 'Click in this menu to see the panoramas, images, promming stuff and others!!!'
        break;
      case 'espanol':
        bienvenida = 'Bienvenido!';
        mensaje = 'Haz click en el menu para visualizar los panorámicos, imágenes, cosas de programación y otros.'
      default:

    }
    if(navigatingConsole === 'iphone' || navigatingConsole === 'android'){
      arrow = '^^^^^'
    } else {
      arrow = '<<<<----'
    }
    return(
      <div className="card intro">
        <p className='bienvenido'>{arrow}{bienvenida}</p>
        {mensaje}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    idiomas: state.idiomas
  }
}

export default connect(mapStateToProps)(Introduction);

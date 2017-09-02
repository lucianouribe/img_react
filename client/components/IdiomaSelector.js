import React from 'react';
import { connect } from 'react-redux';
import { setIdioma } from '../actions/idiomas';

class IdiomaSelector extends React.Component {
  constructor(props) {
    super(props);

    this.changeIdioma = this.changeIdioma.bind(this);
  }

  changeIdioma(idioma){
    this.props.dispatch(setIdioma(idioma));
  }

  render(){
    const ingles = 'ingles';
    const espanol = 'espanol';
    const frances = 'frances';
    const italiano = 'italiano';
    const portugues = 'portugues';
    const aleman = 'aleman';
    return(
      <div className="idioma-selector-container">
        <div className="idioma-flag idioma-eng" onClick={() => this.changeIdioma(ingles)}></div>
        <div className="idioma-flag idioma-esp" onClick={() => this.changeIdioma(espanol)}></div>
        <div className="idioma-flag idioma-fra" onClick={() => this.changeIdioma(frances)}></div>
        <div className="idioma-flag idioma-ita" onClick={() => this.changeIdioma(italiano)}></div>
        <div className="idioma-flag idioma-por" onClick={() => this.changeIdioma(portugues)}></div>
        <div className="idioma-flag idioma-deu" onClick={() => this.changeIdioma(aleman)}></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps)(IdiomaSelector);

import React from 'react';

class PasoOptions extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      estilo: 'paragraph'
    }
  }

// for refactoring... put the results in redux state-props, and then it would work. Also check in paso and proyecto where to put the hiding thing
  componentDidUpdate(){

  }

  radialButtons(){
    let goTo = 'go-to'
    let terminal = 'terminal'
    let codigo = 'codigo'
    let paragraph = 'paragraph'
    let linkTuto = 'linkTuto'
    let linkVideo = 'linkVideo'
    let linkImage = 'linkImage'

    let goToS;
    let terminalS;
    let codigoS;
    let paragraphS;
    let linkTutoS;
    let linkVideoS;
    let linkImageS;

    let elected = {color: 'red', fontSize: '1.4rem'}

    switch (this.state.estilo) {
      case 'go-to':
        goToS = elected
        break;
      case 'terminal':
        terminalS = elected
        break;
      case 'codigo':
        codigoS = elected
        break;
      case 'paragraph':
        paragraphS = elected
        break;
      case 'linkTuto':
        linkTutoS = elected
        break;
      case 'linkVideo':
        linkVideoS = elected
        break;
      case 'linkImage':
        linkImageS = elected
        break;
      default:

    }

    return(
      <div className="edit-btns-estilo">
        <i className="fa fa-long-arrow-right" style={goToS} aria-hidden="true" onClick={()=> this.setState({ estilo: goTo})}></i>
        <i className="fa fa-terminal" style={terminalS} aria-hidden="true" onClick={()=> this.setState({ estilo: terminal})}></i>
        <i className="fa fa-code" style={codigoS} aria-hidden="true" onClick={()=> this.setState({ estilo: codigo})}></i>
        <i className="fa fa-paragraph" style={paragraphS} aria-hidden="true" onClick={()=> this.setState({ estilo: paragraph})}></i>
        <i className="fa fa-link" style={linkTutoS} aria-hidden="true" onClick={()=> this.setState({ estilo: linkTuto})}></i>
        <i className="fa fa-video-camera" style={linkVideoS} aria-hidden="true" onClick={()=> this.setState({ estilo: linkVideo})}></i>
        <i className="fa fa-picture-o" style={linkImageS} aria-hidden="true" onClick={()=> this.setState({ estilo: linkImage})}></i>
      </div>
    )
  }
}

export default PasoOptions;

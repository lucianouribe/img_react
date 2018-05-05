import React from 'react';

class PasoOptions extends React.Component {

  render(){
    let submit = 'submit'
    let cancel = 'cancel'

    let titulo = 'titulo'
    let goTo = 'go-to'
    let terminal = 'terminal'
    let codigo = 'codigo'
    let paragraph = 'paragraph'
    let linkTuto = 'link-tuto'
    let linkVideo = 'link-video'
    let linkImage = 'link-image'
    let download = 'download'

    let tituloS;
    let goToS;
    let terminalS;
    let codigoS;
    let paragraphS;
    let linkTutoS;
    let linkVideoS;
    let linkImageS;
    let downloadS;

    let ejemplo = 'ejemplo';
    let comentario = 'comentario';
    let resultado = 'resultado';
    let problema = 'problema';

    let ejemploS;
    let comentarioS;
    let problemaS;
    let resultadoS;

    let elected = {color: 'red', fontSize: '1.4rem'}

    switch (this.props.elected) {
      case 'titulo':
        tituloS = elected
        break;
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
      case 'link-tuto':
        linkTutoS = elected
        break;
      case 'link-video':
        linkVideoS = elected
        break;
      case 'link-image':
        linkImageS = elected
        break;
      case 'download':
        downloadS = elected
        break;
      case 'ejemplo':
        ejemploS = elected
        break;
      case 'comentario':
        comentarioS = elected
        break;
      case 'problema':
        problemaS = elected
        break;
      case 'resultado':
        resultadoS = elected
        break;
      default:

    }
    if(this.props.whichType === 'add-paso-full-buttons') {
      return(
        <span className="paso-option-container">
          <div className="paso-option-botones-form">
            <span onClick={()=> this.props.conection(submit)}><i className="fa fa-check listo" aria-hidden="true" ></i></span>
            <i className="fa fa-at" style={tituloS} aria-hidden="true" onClick={()=> this.props.conection(titulo)}></i>
            <i className="fa fa-long-arrow-right" style={goToS} aria-hidden="true" onClick={()=> this.props.conection(goTo)}></i>
            <i className="fa fa-terminal" style={terminalS} aria-hidden="true" onClick={()=> this.props.conection(terminal)}></i>
            <i className="fa fa-code" style={codigoS} aria-hidden="true" onClick={()=> this.props.conection(codigo)}></i>
            <i className="fa fa-paragraph" style={paragraphS} aria-hidden="true" onClick={()=> this.props.conection(paragraph)}></i>
            <i className="fa fa-link" style={linkTutoS} aria-hidden="true" onClick={()=> this.props.conection(linkTuto)}></i>
            <i className="fa fa-video-camera" style={linkVideoS} aria-hidden="true" onClick={()=> this.props.conection(linkVideo)}></i>
            <i className="fa fa-picture-o" style={linkImageS} aria-hidden="true" onClick={()=> this.props.conection(linkImage)}></i>
            <i className="fa fa-download" style={downloadS} aria-hidden="true" onClick={()=> this.props.conection(download)}></i>
          </div>
        </span>
      )
    } else if (this.props.whichType === 'add-procom-full-buttons') {
      return (
        <span className="paso-option-container">
          <div className="paso-option-botones-form">
            <span onClick={()=> this.props.conection(submit)}><i className="fa fa-check listo" aria-hidden="true" ></i></span>
            <i className="fa fa-terminal btn-icon" style={resultadoS} aria-hidden="true" onClick={()=> this.props.conection(resultado)}></i>
            <i className="fa fa-eye btn-icon" style={ejemploS} aria-hidden="true" onClick={()=> this.props.conection(ejemplo)}></i>
            <i className="fa fa-comments btn-icon" style={comentarioS} aria-hidden="true" onClick={()=> this.props.conection(comentario)}></i>
            <i className="fa fa-exclamation-triangle btn-icon" style={problemaS} aria-hidden="true" onClick={()=> this.props.conection(problema)}></i>
          </div>
        </span>
      )
    }
  }
}

export default PasoOptions;

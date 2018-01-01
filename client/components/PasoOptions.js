import React from 'react';

class PasoOptions extends React.Component {

  render(){
    let submit = 'submit'
    let cancel = 'cancel'

    let goTo = 'go-to'
    let terminal = 'terminal'
    let codigo = 'codigo'
    let paragraph = 'paragraph'
    let linkTuto = 'link-tuto'
    let linkVideo = 'link-video'
    let linkImage = 'link-image'

    let goToS;
    let terminalS;
    let codigoS;
    let paragraphS;
    let linkTutoS;
    let linkVideoS;
    let linkImageS;

    let ejemplo = 'ejemplo';
    let comentario = 'comentario';
    let problema = 'problema';

    let ejemploS;
    let comentarioS;
    let problemaS;

    let elected = {color: 'red', fontSize: '1.4rem'}

    switch (this.props.elected) {
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
      case 'ejemplo':
        ejemploS = elected
        break;
      case 'comentario':
        comentarioS = elected
        break;
      case 'problema':
        problemaS = elected
        break;
      default:

    }
    if(this.props.whichType === 'add-paso-full-buttons') {
      return(
        <span className="paso-option-container">
          <div className="paso-option-botones-form">
            <span onClick={()=> this.props.conection(submit)}><i className="fa fa-check listo" aria-hidden="true" ></i></span>
            <i className="fa fa-long-arrow-right" style={goToS} aria-hidden="true" onClick={()=> this.props.conection(goTo)}></i>
            <i className="fa fa-terminal" style={terminalS} aria-hidden="true" onClick={()=> this.props.conection(terminal)}></i>
            <i className="fa fa-code" style={codigoS} aria-hidden="true" onClick={()=> this.props.conection(codigo)}></i>
            <i className="fa fa-paragraph" style={paragraphS} aria-hidden="true" onClick={()=> this.props.conection(paragraph)}></i>
            <i className="fa fa-link" style={linkTutoS} aria-hidden="true" onClick={()=> this.props.conection(linkTuto)}></i>
            <i className="fa fa-video-camera" style={linkVideoS} aria-hidden="true" onClick={()=> this.props.conection(linkVideo)}></i>
            <i className="fa fa-picture-o" style={linkImageS} aria-hidden="true" onClick={()=> this.props.conection(linkImage)}></i>
            <span onClick={()=> this.props.conection(cancel)}><i className="fa fa-ban pues-no" aria-hidden="true" ></i></span>
          </div>
        </span>
      )
    } else if (this.props.whichType === 'add-procom-full-buttons') {
      return (
        <span className="paso-option-container">
          <div className="paso-option-botones-form">
            <span onClick={()=> this.props.conection(submit)}><i className="fa fa-check listo" aria-hidden="true" ></i></span>

            <i className="fa fa-eye btn-icon" style={ejemploS} aria-hidden="true" onClick={()=> this.props.conection(ejemplo)}></i>
            <i className="fa fa-comments btn-icon" style={comentarioS} aria-hidden="true" onClick={()=> this.props.conection(comentario)}></i>
            <i className="fa fa-exclamation-triangle btn-icon" style={problemaS} aria-hidden="true" onClick={()=> this.props.conection(problema)}></i>

            <span onClick={()=> this.props.conection(cancel)}><i className="fa fa-ban pues-no" aria-hidden="true" ></i></span>
          </div>
        </span>
      )
    }
  }
}

export default PasoOptions;

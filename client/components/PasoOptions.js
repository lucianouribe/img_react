import React from 'react';

class PasoOptions extends React.Component {

  render(){
    let submit = 'submit'
    let download = 'download'
    let cancel = 'cancel'
    return(
      <span className="paso-option-container">
        <div className="paso-option-botones-form">
          <span onClick={()=> this.props.conection(submit)}><i className="fa fa-check listo" aria-hidden="true" ></i></span>
          <span><i className="fa fa-download" aria-hidden="true" onClick={()=> this.props.conection(download)}></i></span>
          <span><i className="fa fa-ban" aria-hidden="true" onClick={()=> this.props.conection(cancel)}></i></span>
        </div>
      </span>
    )
  }
}

export default PasoOptions;

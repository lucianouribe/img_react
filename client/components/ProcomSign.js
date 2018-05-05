import React from 'react';

class ProcomSign extends React.Component {

  extraContent(){
    let procom = this.props.procom;
    if(procom.pro_style === 'ejemplo') {
      return(<i className="fa fa-eye procom-type" aria-hidden="true"></i>)
    } else if (procom.pro_style === 'comentario') {
      return(<i className="fa fa-comments procom-type" aria-hidden="true"></i>)
    } else if (procom.pro_style === 'problema'){
      return(<i className="fa fa-exclamation-triangle procom-type" aria-hidden="true"></i>)
    } else if (procom.pro_style === 'resultado'){
      return(<i className="fa fa-terminal procom-type" aria-hidden="true"></i>)
    }
  }

  render() {
    return (
      this.extraContent()
    )
  }
}

export default ProcomSign;

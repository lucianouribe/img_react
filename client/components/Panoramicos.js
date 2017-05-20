import React from 'react';

class Panoramicos extends React.Component {

  constructor(props){
    super(props);

  }

  componentDidMount(){
    console.log("this.props.xmlLocation");
    console.log(this.props.xmlLocation);
    let containerId = "my-pano-container";
    this.pano = new window.pano2vrPlayer(containerId);
    // add the skin object
    this.skin = new window.pano2vrSkin(this.pano);
    // load the configuration
    this.pano.readConfigUrl(this.props.xmlLocation);
    // add gyroscope controller
    this.gyro = new window.pano2vrGyro(this.pano,containerId);
  }

  render(){
    return (
      <div id='my-pano-container'>

      </div>
    )
  }
}

export default Panoramicos;

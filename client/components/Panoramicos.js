import React from 'react';



class Panoramicos extends React.Component {

  constructor(props){
    super(props);

  }

  componentDidMount(){
    let containerId = "my-pano-container";
    // create the panorama player with the container
    this.pano = new window.pano2vrPlayer(containerId);
    console.log('this.pano')
    console.log(this.pano)
    // add the skin object
    this.skin = new window.pano2vrSkin(this.pano);
    console.log('this.skin')
    console.log(this.skin)
    // load the configuration
    this.pano.readConfigUrl('../assets/javascripts/libs/Terraza_PH_out.xml');
    // this.pano.readConfigUrl(this.props.xmlLocation);
    // add gyroscope controller
    this.gyro = new window.pano2vrGyro(this.pano, containerId);
  }


  render(){
    return (
      <div id='my-pano-container'>

      </div>
    )
  }
}

export default Panoramicos;

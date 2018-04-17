import React from 'react';

class TempPicture extends React.Component {

  imageRender(){
    var images = this.props.files.map( (f, x) => {
      return(
        <div key={x} className="paso-second-image-cont">
          <img src={f} className="paso-second-image"/>
        </div>
      )
    });
    return(<div>{images}</div>)
  }

  render() {
    return (
      <div className={this.props.preview ? "image-preview" : "hide"}>
        {this.imageRender()}
      </div>
    )
  }
}

export default TempPicture;

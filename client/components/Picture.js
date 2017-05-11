import React from 'react';

class Picture extends React.Component {

  render() {
    return (
      <div className={this.props.thePicture}></div>
    )
  }
}

export default Picture;

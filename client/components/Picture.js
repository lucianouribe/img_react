import React from 'react';

class Picture extends React.Component {
  render() {
    return (
      <div>
        <div className="carousel-item" data-info={this.props.details.commentsPerPic} id={this.props.details.id}></div>
      </div>
    )
  }
}

export default Picture;

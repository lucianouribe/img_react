import React from 'react';

class Trisixti extends React.Component {

  render() {
    return (
      <div>
        <p>{this.props.details.name}</p>
        <iframe src={this.props.details.address} seamless></iframe>
      </div>
    )
  }
}

export default Trisixti;

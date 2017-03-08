import React from 'react';

class Trisixti extends React.Component {




  render() {
    return (
      <div className="frame">
        <iframe src={this.props.details.address} seamless></iframe>
      </div>
    )
  }
}

export default Trisixti;

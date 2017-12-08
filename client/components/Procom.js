import React from 'react';
import { connect } from 'react-redux';

class Procom extends React.Component {

  render() {
    let procom = this.props.procom.pro_content;
    return (
      <div>{procom}</div>
    )
  }

}

const mapStateToProps = (state) => {
  return {

  }
}
export default connect(mapStateToProps)(Procom);

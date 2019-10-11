import React from 'react';
import { connect } from 'react-redux';

class SubWorld extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
  }

  render() {
    const subtheme = this.props.subtheme;
    return (
      <div className="world_subtheme">
        <h1>{subtheme.name}</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}
export default connect(mapStateToProps)(SubWorld);
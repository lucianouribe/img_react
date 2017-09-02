import React from 'react';
import { connect } from 'react-redux';

class Description extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    return (
      <div className="description-container">
        I'm description
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    queVeo: state.queVeo,
    idiomas: state.idiomas
  }
}

export default connect(mapStateToProps)(Description);

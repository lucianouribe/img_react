import React from 'react';
import { connect } from 'react-redux';
import AdminDashButtons from './AdminDashButtons';

class AdminDashboard extends React.Component {
  render(){
    return(
      <div className="admin-dashboard-container">
        <AdminDashButtons setRenderOption={this.props.setRenderOption}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user}
}

export default connect(mapStateToProps)(AdminDashboard);

import React from 'react';
import { connect } from 'react-redux';

class AdminDashButtons extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    const description = 'description'
    const boton1 = 'boton 1'
    const boton2 = 'boton 2'
    return (
      <div className="admin-dash-buttons">
        <div className='admin-btn' onClick={() => this.props.setRenderOption(description)}><span>description</span></div>
        <div className='admin-btn' onClick={() => this.props.setRenderOption(boton1)}><span>boton 2</span></div>
        <div className='admin-btn' onClick={() => this.props.setRenderOption(boton2)}><span>boton 3</span></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user}
}

export default connect(mapStateToProps)(AdminDashButtons);

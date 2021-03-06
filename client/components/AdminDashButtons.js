import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { setQueVeo } from '../actions/queVeo';

class AdminDashButtons extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    const boton1 = 'description'
    const boton2 = 'admin'
    const boton3 = 'tutoriales'
    return (
      <div className="admin-dash-buttons">
        <Link to='/main' className='admin-btn'><div onClick={() => this.props.dispatch(setQueVeo(boton2))}><span>edit carrusel</span></div></Link>
        <div className='admin-btn' onClick={() => this.props.setRenderOption(boton1)}><span>description</span></div>
        <div className='admin-btn' onClick={() => this.props.setRenderOption(boton3)}><span>tutoriales</span></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user}
}

export default connect(mapStateToProps)(AdminDashButtons);

import React from 'react';
import { connect } from 'react-redux';


import Navbar from './Navbar';
import AdminDashboard from './AdminDashboard';
import Descripcions from './Descripcions';
import Proyectos from './Proyectos';


class Admin extends React.Component {
  constructor(){
    super();

    this.state = {
      renderOption: ''
    }

    this.setRenderOption = this.setRenderOption.bind(this);
  }

  setRenderOption(iAmTheOption){
    this.setState({ renderOption: iAmTheOption })
  }

  mainRenderer(){
    const admin = 'admin'
    switch (this.state.renderOption) {
      case 'edit carrusel':
        return(<div>yo</div>)
        break;
      case 'description':
          return(<Descripcions />)
        break;
      case 'tutoriales':
          return(<Proyectos />)
        break;
      default:
        return(<Proyectos />)
    }
  }

  render(){
    return (
      <div className='main-component'>
        <Navbar />
        <div className='admin-container'>
          <AdminDashboard setRenderOption={this.setRenderOption}/>
          <div className='admin-main-container'>
            {this.mainRenderer()}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    idiomas: state.idiomas,
    queVeo: state.queVeo,
    carrusels: state.carrusels,
    selectedCarrusel: state.selectedCarrusel,
    transitoryInfo: state.transitoryInfo
  }
}

export default connect(mapStateToProps)(Admin);

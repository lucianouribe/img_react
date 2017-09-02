import React from 'react';
import Navbar from './Navbar';
import AdminDashboard from './AdminDashboard';
import Description from './Description';


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
    switch (this.state.renderOption) {
      case 'description':
          return(<Description />)
        break;
      case 'boton 1':
          return(<div>i'm boton 1</div>)
        break;
      case 'boton 2':
          return(<div>i'm boton 2</div>)
        break;
      default:
        return(<div>i'm the default component</div>)
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

export default Admin;

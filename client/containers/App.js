import React from 'react';
import { connect } from 'react-redux';
import { refreshLogin } from '../actions/auth';
import Navbar from '../components/Navbar';
import { setColor } from '../actions/colorset';


class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    $.ajax({
      url: 'api/users/info',
      type: 'GET',
      dataType: 'JSON'
    }).done( user => {
      this.props.dispatch(refreshLogin(user));
    }).fail( err => {
      console.log(err)
    });
  }


  render(){
    let menuItems = [
      {id: 1, name: 'home'},
      {id: 2, name: 'tutorials'},
      {id: 9, name: 'deutsch'},
      {id: 3, name: 'transliterator'},
      {id: 7, name: 'graphic'},
      {id: 4, name: 'contact'},
      // {id: 5, name: 'about'},
      {id: 6, name: 'signin'},
      // {id: 8, name: 'gramatica'},
    ]
    const divStyle = {
      backgroundColor: this.props.colorset,
      WebkitTransition: 'all',
      msTransition: 'all'
    };
    return (
      <div style={divStyle}>
        <Navbar menuData={menuItems}/>
        { this.props.children }
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return { 
    user: state.user,
    colorset: state.colorset
  }
}

export default connect(mapStateToProps)(App);

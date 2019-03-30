import React from 'react';
import { connect } from 'react-redux';
import { refreshLogin } from '../actions/auth';
import Navbar from '../components/Navbar';


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
      {id: 3, name: 'transliterator'},
      {id: 4, name: 'contact'},
      // {id: 5, name: 'about'},
      {id: 6, name: 'signin'},
      // {id: 7, name: 'carrusels'},
      // {id: 8, name: 'gramatica'},
    ]
    return (
      <div>
        <Navbar menuData={menuItems}/>
        { this.props.children }
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(App);

import React from 'react';
import { connect } from 'react-redux';
import { refreshLogin } from '../actions/auth';


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
    return (
      <div>
        { this.props.children }
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(App);

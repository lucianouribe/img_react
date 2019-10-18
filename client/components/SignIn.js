import React from 'react';
import { connect } from 'react-redux';
import { refreshLogin } from '../actions/auth';
import { Link } from 'react-router';


class SignIn extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let { email, password } = this.refs;
    let user = { user: {
      email: email.value,
      password: password.value
    }}
    $.ajax({
      url: '/users/sign_in',
      type: 'POST',
      dataType: 'JSON',
      data: user
    }).done( user => {
      console.log('loged in or sign in')
      this.props.dispatch(refreshLogin(user));
      this.props.history.push("/tutorials")
    }).fail( err => {
      console.log('something failed with the log in')
      console.log(err);
    });
  }

  render() {
    return(
      <div className="super-container sign-in-up">
        <div className="admin-title">
          <h1>login</h1>
        </div>
        <form className="container" onSubmit={this.handleSubmit}>
          <input type="email" required={true} ref="email" placeholder="email" />
          <input type="password" required={true} ref="password" placeholder="password" />
          <div className="btns">
            <button className='btn-send'>Sign In</button>
            <span className=""><Link className="btn-sign" to='/signup'>SignUp</Link></span>
          </div>
        </form>
      </div>
    )
  }

}

export default connect()(SignIn);

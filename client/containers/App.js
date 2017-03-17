import React from 'react';
import { connect } from 'react-redux';


class App extends React.Component {

  constructor(props) {
    super(props);
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

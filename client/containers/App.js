import React from 'react';
import Navbar from '../components/Navbar';


class App extends React.Component {

  render(){
    return (
      <div>
          { this.children }
      </div>
    );
  }

}

export default App;

import React from 'react';
import { connect } from 'react-redux';

class GameKeyBoard extends React.Component {

  constructor(props) {
    super(props);
  }
  
  componentDidUpdate() {
    let answer = $('.hint').text();
    this.props.evaluateResponse(answer);
  }

  keyboard = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZßÄÖÜ'.split('').map( (letter) => {
      if (this.props.letters.indexOf(letter) > -1) {
        let isSuccessful = this.props.object.toLowerCase().indexOf( letter.toLowerCase() ) > -1 ? 'success' : 'unsuccess'
        return ( <span key={letter} className={isSuccessful} disabled={true} >{letter}</span> );
      } else {
        return ( <span key={letter} onClick={() => this.props.handlePressedLetters(letter)}>{letter}</span> );
      }
    });
    return alphabet;
  }

  render() {
    return (
        <div className='keyboard'>
          {this.keyboard()}
        </div>
    )
  }

}

export default connect(null)(GameKeyBoard);
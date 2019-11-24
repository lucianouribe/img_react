import React from 'react';
import { connect } from 'react-redux';
import { letters } from '../actions/letters'
import { fails } from '../actions/fails'

class GameKeyBoard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      letters: '',
      fails: 0
    }
  }

  componentDidMount(){
    console.log('->', this.props.object)
    // get this.props.letters
    // get this.props.object
    // letters that exist get success and disbled class
    // letters that exist but are not on the word get fail and disabled class
    // this.props.evaluate();
  }

  magic = (letter) => {
    this.setState({ letters: this.state.letters + letter});
    this.props.dispatch(letters(this.state.letters + letter));
    // make a script that asigns to each letter already the value of true or false so when clicked it inmediately send to the redux the fail or success of the letter
    this.evaluate(letter);
  }


  evaluate = (letter) => {
    let objectArray = Array.from( this.props.object.toLowerCase().replace(' ', '') );
    // this.props.dispatch(fails(this.props.fails));
    let check = objectArray.some(ele => ele === letter.toLowerCase());
    if (!check) {
      this.setState({ fails: this.state.fails + 1 })
      this.props.dispatch(fails(this.state.fails + 1));
    }

    // get win
    // get loss
  }

  keyboard = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZßÄÖÜ'.split('').map( (letter) => {
      if (this.state.letters.indexOf(letter) > -1) {
        let isSuccessful = this.props.object.toLowerCase().indexOf( letter.toLowerCase() ) > -1 ? 'success' : 'unsuccess'
        return ( <span key={letter} className={isSuccessful} disabled={true} >{letter}</span> );
      } else {
        return ( <span key={letter} onClick={() => this.magic(letter)}>{letter}</span> );
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

const mapStateToProps = (state) => {
  return {
    letters: state.letters
  }
}
export default connect(mapStateToProps)(GameKeyBoard);
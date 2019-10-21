import React from 'react';
import { connect } from 'react-redux';

class GameComparer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pronoun: 'ich'
    }
  }

  componentDidMount(){
    const pronouns = ['ich', 'du', 'er', 'sie', 'es', 'wir', 'ihr', 'sie'];
    var pronoun = pronouns[Math.floor(Math.random()*pronouns.length)];
    this.setState({pronoun});
  }

  getWord = (word) => {
    return `${word.article} ${word.noun}`
  }

  getVerb = (verb) => {
    //check! get randombly a pronoun -> ich, du, er, sie, es, wir, ihr, sie 

    // if level 1 get praesens
    // if level 2 get perfekt
    // if level 3 get futur 1
    // if level 4 get praeteritum
    // if level 5 get plusquanperfekt

    // get the line that corresponds to the pronoun
    //===========

    return verb.infinitive
  }

  getObject = () => {
    const { compareMe, thematic } = this.props;
    if (thematic === 'words'){
      return this.getWord(compareMe)
    } else if (thematic === 'verbs') {
      return this.getVerb(compareMe)
    } else {
      return compareMe.phrase_praesens
    }
  }

  render() {
    return (
      <div className="game-comparer">
        {this.getObject()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // gameData: state.gameData
  }
}
export default connect(mapStateToProps)(GameComparer);
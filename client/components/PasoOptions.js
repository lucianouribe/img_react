import React from 'react';
import { connect } from 'react-redux';
import { selectedCarrusel } from '../actions/selectedCarrusel';

class Picture extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      estilo: 'paragraph'
    }
  }

// for refactoring... put the results in redux state-props, and then it would work. Also check in paso and proyecto where to put the hiding thing
  componentDidUpdate(){

  }

  radialButtons(){
    let goTo = 'go-to'
    let terminal = 'terminal'
    let codigo = 'codigo'
    let paragraph = 'paragraph'
    let linkTuto = 'linkTuto'
    let linkVideo = 'linkVideo'
    let linkImage = 'linkImage'
    return(
      <div className="edit-btns-estilo">
        <input type='radio' name="radAnswer" id='go-to' onClick={()=> this.setState({estilo: goTo})}/>
        <label htmlFor='go-to'><i className="fa fa-long-arrow-right" aria-hidden="true"></i></label>
        <input type='radio' name="radAnswer" id='terminal' onClick={()=> this.setState({estilo: terminal})}/>
        <label htmlFor='terminal'><i className="fa fa-terminal" aria-hidden="true"></i></label>
        <input type='radio' name="radAnswer" id='codigo' onClick={()=> this.setState({estilo: codigo})}/>
        <label htmlFor='codigo'><i className="fa fa-code" aria-hidden="true"></i></label>
        <input type='radio' name="radAnswer" id='paragraph' onClick={()=> this.setState({estilo: paragraph})}/>
        <label htmlFor='paragraph'><i className="fa fa-paragraph" aria-hidden="true"></i></label>
        <input type='radio' name="radAnswer" id='link-tuto' onClick={()=> this.setState({estilo: linkTuto})}/>
        <label htmlFor='link-tuto'><i className="fa fa-link" aria-hidden="true"></i></label>
        <input type='radio' name="radAnswer" id='link-video' onClick={()=> this.setState({estilo: linkVideo})}/>
        <label htmlFor='link-video'><i className="fa fa-video-camera" aria-hidden="true"></i></label>
        <input type='radio' name="radAnswer" id='link-image' onClick={()=> this.setState({estilo: linkImage})}/>
        <label htmlFor='link-image'><i className="fa fa-picture-o" aria-hidden="true"></i></label>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedCarrusel: state.selectedCarrusel
  }
}
export default connect(mapStateToProps)(Picture);

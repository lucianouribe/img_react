import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setColor } from '../actions/colorset';

class ColorForm extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  changeIdioma(idioma){
    this.props.dispatch(setIdioma(idioma));
  }

  handleSubmit(e) {
    e.preventDefault();
    let color = this.refs.color.value;
    this.props.dispatch(setColor(color));
  }

  render() {
    let color = this.props.colorset;
    let inlineStyle = {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      border: '1px solid #FF6949',
      backgroundColor: color
    };
    return(
      <div className="color-form-container" >
        <form className="color-form" >
          <label style={inlineStyle} id="colorlabel">
            <input className='color-picker' id="colorimp" type='color' ref='color' defaultValue="#ffffff" onChange={this.handleSubmit}/>
          </label>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    colorset: state.colorset
 }
}
export default connect(mapStateToProps)(ColorForm);

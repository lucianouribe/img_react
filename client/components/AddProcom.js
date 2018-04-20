import React from 'react';
import PasoOptions from './PasoOptions';

class AddProcom extends React.Component {
  constructor(props){
    super(props);

    this.setTextareaHeight = this.setTextareaHeight.bind(this);
  }

  setTextareaHeight(paso){
    paso.each( (index, item) => item.style.height = item.scrollHeight+'px' );
  }

  render() {
    return (
      <form className="paso-container-form" onSubmit={() => this.props.procomBuild}>
        <PasoOptions whichType={this.props.whichType} elected={this.props.proStyle} conection={this.props.conection} />
        <textarea id="add-procom-textarea" className="paso-content-text" ref='pro_content' placeholder="Add Comment, example or Problem" onChange={()=>this.setTextareaHeight($('#add-procom-textarea'))}></textarea>
      </form>
    )
  }
}

export default AddProcom;

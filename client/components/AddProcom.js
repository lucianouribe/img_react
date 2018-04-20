import React from 'react';
import PasoOptions from './PasoOptions';
import { addProcom, editProcom } from '../actions/proyectos';
import update from 'immutability-helper';

class AddProcom extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      proStyle: 'comment'
    }

    this.setTextareaHeight = this.setTextareaHeight.bind(this);
    this.procomOptionsConection = this.procomOptionsConection.bind(this);
    this.procomBuild = this.procomBuild.bind(this);
  }

  setTextareaHeight(paso){
    paso.each( (index, item) => item.style.height = item.scrollHeight+'px' );
  }

  procomOptionsConection(income){
    if(income === 'submit') {
      this.procomBuild()
    } else if (income === 'cancel') {
      this.props.addProcomSetter() //check
    } else {
      this.setState({ proStyle: income}) //check
    }
  }

  procomBuild(){
    let procoms = this.props.procoms;
    let id = new Date();
    let pro_content = this.refs.pro_content.value;
    let type_of_issue;
    let pro_style;
    if(this.state.proStyle === 'problema') {
      pro_style = this.state.proStyle;
      type_of_issue = 'problem';
    } else if (this.state.proStyle === 'ejemplo'){
      pro_style = this.state.proStyle;
      type_of_issue = "comment";
    } else {
      pro_style = this.state.proStyle;
      type_of_issue = 'comment';
    }
    let pro_order;
    let novelty = true;
    let new_procom = {id, pro_content, type_of_issue, pro_style, pro_order, novelty};
    procoms = [...procoms, new_procom];
    // this.setState({ procoms, max_id: this.props.max_id + 1 });
    let max_id = this.props.max_id + 1
    this.props.setProcom(procoms)
    this.props.setMaxId(max_id)
    this.props.memorySetter(true, type_of_issue);
    this.props.addProcomSetter();
  }

  render() {
    return (
      <form className="paso-container-form" onSubmit={() => this.props.procomBuild}>
        <PasoOptions whichType={this.props.whichType} elected={this.props.proStyle} conection={this.procomOptionsConection} />
        <textarea id="add-procom-textarea" className="paso-content-text" ref='pro_content' placeholder="Add Comment, example or Problem" onChange={()=>this.setTextareaHeight($('#add-procom-textarea'))}></textarea>
      </form>
    )
  }
}

export default AddProcom;

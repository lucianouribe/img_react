import React from 'react';

class TextArea extends React.Component {
  constructor(props) {
    super(props);

    this.setTextareaHeight = this.setTextareaHeight.bind(this);
    this.setOnChange = this.setOnChange.bind(this);
  }

  componentDidMount(){
    this.setTextareaHeight($('#edit-textarea'));
  }
  
  setTextareaHeight(paso){
    paso.each(function(index, item){
      item.style.height = item.scrollHeight+'px';
    });
  }

  setOnChange(){
    let show = 'show-buttons';
    this.props.onChange4Textarea(show)
    this.setTextareaHeight($('#edit-textarea'));
  }

  render() {
    let inlineStyle = {height: '18px'};
    return (
  	 <textarea id="edit-textarea" className={this.props.the_class} style={inlineStyle} ref='text_content' onChange={()=> this.setOnChange()} defaultValue={this.props.the_content}></textarea>
    )
  }
}
export default TextArea;

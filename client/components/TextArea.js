import React from 'react';

class TextArea extends React.Component {
  constructor(props) {
    super(props);

    this.setTextareaHeight = this.setTextareaHeight.bind(this);
    this.setOnChange = this.setOnChange.bind(this);
  }

  componentDidMount(){
    this.setTextareaHeight($('textarea'));
  }

  componentWillMount(){
    this.setTextareaHeight($('textarea'));
  }

  setTextareaHeight(txtArea){
    txtArea.each(function(index, item){
      item.style.height = item.scrollHeight+'px';
    });
  }

  setOnChange(){
    let show = 'show-buttons';
    this.props.onChange4Textarea(show)
    this.setTextareaHeight($('textarea'));
  }

  render() {
    return (
  	 <textarea className={this.props.the_class} ref='text_content' onChange={()=> this.setOnChange()} defaultValue={this.props.the_content}></textarea>
    )
  }
}
export default TextArea;

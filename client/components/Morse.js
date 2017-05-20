import React from 'react';

class Morse extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      transInfo: '',
      lengua1: 'rom',
      lengua2: 'mor'
    }

    this.answer = this.answer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.putPlease = this.putPlease.bind(this);
    this.language = this.language.bind(this);
    this.language2 = this.language2.bind(this);
  }

  componentDidMount(){
    // jquery button clicked effect
    $('.btn-lang').on('click', function(){
      $('.btn-lang').removeClass('clicked');
      $(this).addClass('clicked');
    });
    $('.btn-lang2').on('click', function(){
      $('.btn-lang2').removeClass('clicked');
      $(this).addClass('clicked');
    });
    $('.rom1').on('click', function(){
      $('.rom2').hide();
      $('.mor2').show();
    })
    $('.mor1').on('click', function(){
      $('.mor2').hide();
      $('.rom2').show();
    })
  }

  language(idiom) {
    this.setState({ lengua1: idiom })
  }

  language2(idiom) {
    this.setState({ lengua2: idiom })
  }

  putPlease() {
    return(
      <div>
        <p className="morse-output">{this.state.transInfo}</p>
      </div>
    );
  }

  answer() {
    $.ajax({
      url: '/api/morse',
      type: 'GET',
      dataType: 'JSON'
    }).done( data => {
      // console.log('its hitting answer')
      // console.log(data.outphrase)
      this.setState({transInfo: data.outphrase});
    }).fail( data => {
      // console.log('its hitting answer BUT IN FAIL')
      // console.log(data)
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    let inphrase = this.refs.translateMe.value;
    let outphrase;

    let lang_first;
    switch (this.state.lengua1) {
      case 'rom':
        lang_first = 'roman';
        break;
      case 'cir':
        lang_first = 'cirilico';
        break;
      case 'mor':
        lang_first = 'morse';
        lang_second = 'roman'
        break;
      default:
        lang_first = 'roman';
        break;
    }

    let lang_second;
    switch (this.state.lengua2) {
      case 'mor':
        lang_second = 'morse';
        break;
      case 'rom':
        lang_second = 'roman';
        break;
      case 'cir':
        lang_second = 'cirilico';
        break;
      default:
        lang_second = 'morse';
        break;
    }

    $.ajax({
      url: '/api/morse',
      type: 'POST',
      dataType: 'JSON',
      data: { morse: {inphrase, outphrase, lang_first, lang_second }}
    }).done( data => {
      // console.log("morse handle submit done");
      // console.log(data);
      this.answer();
      this.refs.translateForm.reset();
    }).fail( data => {
      // console.log("morse handle submit fail");
      // console.log(data);
      this.refs.translateForm.reset();
    })
  }

  render() {
    let morse = 'mor';
    let roman = 'rom';
    let cirilico = 'cir';

    return (
      <div className="card translate">
        <form ref="translateForm" className="input-field">
          <span className="center title"><h5>Morse Transliterator</h5></span>
          <div type="button" className="btn btn-lang rom rom1 clicked" onClick={() => this.language(roman)}><p className="btn-name">roman</p></div>
          <div type="button" className="btn btn-lang cir rom1" onClick={() => this.language(cirilico)}><p className="btn-name">cyrillic</p></div>
          <div type="button" className="btn btn-lang mor mor1 hide" onClick={() => this.language(morse)}><p className="btn-name">morse</p></div>

          <div type="button" className="btn btn-translate right" onClick={this.handleSubmit}><p className="btn-name">transliterate</p></div>
          <textarea className="input" type="text" ref="translateMe" placeholder="Write something"></textarea>
          <div type="button" className="btn btn-lang2 mor mor2 clicked" onClick={() => this.language2(morse)}><p className="btn-name">morse</p></div>
          <div type="button" className="btn btn-lang2 rom rom2 hide" onClick={() => this.language2(roman)}><p className="btn-name">roman</p></div>
          <div type="button" className="btn btn-lang2 rom rom2 hide" onClick={() => this.language2(cirilico)}><p className="btn-name">cyrillic</p></div>
        </form>
        <div className="answer">
          {this.putPlease()}
        </div>

      </div>
    )
  }
}

export default Morse;

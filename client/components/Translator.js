import React from 'react';

class Translator extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      transInfo: '',
      lengua1: 'esp',
      lengua2: 'cir'
    }

    this.answer = this.answer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.putPlease = this.putPlease.bind(this);
    this.language = this.language.bind(this);
    this.language2 = this.language2.bind(this);
  }

  componentDidMount(){
    $('.btn-lang').on('click', function(){
      $('.btn-lang').removeClass('clicked');
      $(this).addClass('clicked');
    });
    $('.btn-lang2').on('click', function(){
      $('.btn-lang2').removeClass('clicked');
      $(this).addClass('clicked');
    });
    $('.lat1').on('click', function(){
      $('.lat2').hide();
      $('.cir2').show();
    })
    $('.cir1').on('click', function(){
      $('.cir2').hide();
      $('.lat2').show();
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
        <p>{this.state.transInfo}</p>
      </div>
    );
  }

  answer() {
    $.ajax({
      url: '/api/translator',
      type: 'GET',
      dataType: 'JSON'
    }).done( data => {
      // console.log('its hitting answer')
      // console.log(data)
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
      case 'esp':
        lang_first = 'espanol';
        break;
      case 'eng':
        lang_first = 'english';
        break;
      case 'deu':
        lang_first = 'deutsch';
        break;
      case 'rus':
        lang_first = 'ruso';
        break;
      default:
        lang_first = 'espanol';
        break;
    }

    let lang_second;
    switch (this.state.lengua2) {
      case 'cir':
        lang_second = 'cirilico';
        break;
      case 'lat':
        lang_second = 'latino';
        break;
      default:
        lang_second = 'cirilico';
        break;
    }

    $.ajax({
      url: '/api/translator',
      type: 'POST',
      dataType: 'JSON',
      data: { translator: {inphrase, outphrase, lang_first, lang_second }}
    }).done( data => {
      // console.log("its hitting done");
      // console.log(data);
      this.answer();
      this.refs.translateForm.reset();
    }).fail( data => {
      // console.log("its hitting fail first part");
      // console.log(data);
      this.refs.translateForm.reset();
    })
  }

  render() {
    let espanol = 'esp';
    let english = 'eng';
    let deutsch = 'deu';
    let ruso = 'rus';
    let cirilico = 'cir';
    let latino = 'lat';
    return (
      <div className="card translate">
        <form ref="translateForm" className="input-field">
          <span className="center title"><h5>Kirilik Translator</h5></span>
          <div type="button" className="btn btn-lang lat1" onClick={() => this.language(espanol)}>español</div>
          <div type="button" className="btn btn-lang lat1" onClick={() => this.language(english)}>english</div>
          <div type="button" className="btn btn-lang lat1" onClick={() => this.language(deutsch)}>deutsch</div>
          <div type="button" className="btn btn-lang cir1" onClick={() => this.language(ruso)}>ruso</div>
          <textarea className="input" type="text" ref="translateMe" placeholder="Write something"></textarea>
          <div type="button" className="btn btn-lang2 cir2" onClick={() => this.language2(cirilico)}>cirilico</div>
          <div type="button" className="btn btn-lang2 lat2" onClick={() => this.language2(latino)}>latino</div>
          <div type="submit" className="btn btn-translate right" onClick={this.handleSubmit}>translate</div>
        </form>
        <div className="answer">
          {this.putPlease()}
        </div>
      </div>
    )
  }
}

export default Translator;

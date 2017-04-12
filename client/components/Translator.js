import React from 'react';

class Translator extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      transInfo: '',
      lengua1: 'espanol',
      lengua2: ''
    }

    this.answer = this.answer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.putPlease = this.putPlease.bind(this);
    this.language = this.language.bind(this);
  }

  componentDidMount(){
    $('.btn-lang').on('click', function(){
      $('.btn-lang').removeClass('clicked');
      $(this).addClass('clicked');
    });
  }

  language(idiom) {
    this.setState({ lengua1: idiom })
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
      console.log('its hitting answer')
      console.log(data)
      this.setState({transInfo: data.inphrase});
    }).fail( data => {
      console.log('its hitting answer BUT IN FAIL')
      console.log(data)
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
      default:
        lang_first = 'espanol';
        break;
    }
    let lang_second = this.state.lengua2;
      $.ajax({
        url: '/api/translator',
        type: 'POST',
        dataType: 'JSON',
        data: { translator: {inphrase, outphrase, lang_first, lang_second }}
      }).done( data => {
        console.log("its hitting done");
        console.log(data);
        this.answer();
        this.refs.translateForm.reset();
      }).fail( data => {
        console.log("its hitting fail first part");
        console.log(data);
        this.refs.translateForm.reset();
    })
  }

  // <div type="submit" className="btn btn-translate rus" onClick={() => this.language(russkiy)}>russkiy</div>
  render() {
    let espanol = 'esp';
    let english = 'eng';
    let deutsch = 'deu';
    return (
      <div className="card translate">
        <form ref="translateForm" className="input-field">
          <span className="center title"><h5>Kirilik Translator</h5></span>
          <div type="button" className="btn btn-lang esp" onClick={() => this.language(espanol)}>español</div>
          <div type="button" className="btn btn-lang eng" onClick={() => this.language(english)}>english</div>
          <div type="button" className="btn btn-lang deu" onClick={() => this.language(deutsch)}>deutsch</div>
          <div type="submit" className="btn btn-translate right" onClick={this.handleSubmit}>translate</div>
          <textarea className="input" type="text" ref="translateMe" placeholder="Write something"></textarea>
        </form>
        <div className="answer">
          {this.putPlease()}
        </div>
      </div>
    )
  }
}

export default Translator;

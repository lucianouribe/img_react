import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let contact = { contact: {
      name: this.refs.name.value,
      email: this.refs.email.value,
      message: this.refs.message.value,
    }}
    console.log(contact);
    $.ajax({
      url: '/api/contact_mailer',
      type: 'POST',
      dataType: 'JSON',
      data: contact
    }).done( contact => {
      console.log('contact done')
      this.refs.mailForm.reset();
    }).fail( err => {
      console.log('something failed with the contact')
      console.log(err);
    });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} ref="mailForm">
          <input type="text" required ref='name'  placeholder="name" />
          <input type="email" required ref='email'  placeholder="email" />
          <textarea type="textarea" required ref='message'  placeholder="message" ></textarea>
          <button type="submit" className="btn">Send</button>
        </form>
      </div>
    )
  }
}

export default Contact;

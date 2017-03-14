import React, { Component } from 'react';
import Picture from './Picture';

class Carrusel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      show: true,
      frontState: 'show',
      currentSlide: 0,
      data: this.props.details,
    }


    this.toggleCard = this.toggleCard.bind(this);

    this.frontOptions = this.frontOptions.bind(this);

    this.addForm = this.addForm.bind(this);
    this.addItem = this.addItem.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.editItem = this.editItem.bind(this);
    this.editForm = this.editForm.bind(this);
    this.handleSubmitEdit = this.handleSubmitEdit.bind(this);

    this.deleteItem = this.deleteItem.bind(this);

    this.showMeThePic = this.showMeThePic.bind(this);
    this.toggleNext = this.toggleNext.bind(this);
    this.togglePrev = this.togglePrev.bind(this);

  }

  toggleCard() {
    this.setState({ show: !this.state.show });
  }

  componentDidMount(){
    // Text of each picture
    $('.carousel-item').on('mouseenter', function() {
      var info = this.dataset.info || "";
      if(info != "") {
        $('.letter').text(info);
        $('.letter').show();
      };
    });

    $('.carousel').on('mouseleave', function() {
      $('.letter').hide();
    });
  }

  componentDidUpdate(){
    // Text of each picture
    $('.carousel-item').on('mouseenter', function() {
      var info = this.dataset.info || "";
      if(info != "") {
        $('.letter').text(info);
        $('.letter').show();
      };
    });

    $('.carousel').on('mouseleave', function() {
      $('.letter').hide();
    });
  }

  showMeThePic() {
    const info = this.props.details
    const actualPic = this.state.currentSlide;
    const id = info[actualPic].id;

    return (<img className="carousel-item" src={info[actualPic].image} data-info={info[actualPic].infopic} id={id} />)
  }

  toggleNext() {
    // console.log("this is toggle next");
    // console.log(this.state.data);
    const data = this.state.data;

    const current = this.state.currentSlide;
    // console.log(current)
    let next = current + 1;
    if (next > data.length - 1) {
      next = 0;
    }
    console.log(next);
    this.setState({ currentSlide: next });
    // console.log(this.state.currentSlide)
  }

  togglePrev() {
    // console.log("this is toggle prev");
    // console.log(this.state);
    var data = this.state.data;
    var current = this.state.currentSlide;
    var prev = current - 1;
    if (prev < 0) {
      prev = data.length - 1;
    }
    console.log(prev);
    this.setState({ currentSlide: prev });
    // console.log(this.state.currentSlide)
  }

  addItem() {
    this.setState({ frontState: 'add' });
  }

  addForm() {
    return (
      <div>
        <form ref="imageForm" className="input-field">
          <h4 className="center title">Add item</h4>
          <div className="card-content">
            <span className="card-title">
              <input type="text" required ref='name'  placeholder="name" />
            </span>
            <p><input type="text" ref="address" placeholder="address" /></p>
            <p><input type="text" ref="infopic" placeholder="Comments" required /></p>
          </div>
          <div className="card-action">
            <div type="submit" className="btn" onClick={this.handleSubmit}>submit</div>
          </div>
        </form>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    let name = this.refs.name.value;
    let image = this.refs.address.value;
    let infopic = this.refs.infopic.value;
    let role = this.props.details[1].role;

      $.ajax({
        url: '/api/carrusels',
        type: 'POST',
        dataType: 'JSON',
        data: { carrusel: {name, image, infopic, role} }
      }).done( image => {
        console.log(image)
        this.refs.imageForm.reset();
        this.setState({
          data: [...this.state.data, image],
          frontState: 'show'
        })
      }).fail( data => {
        console.log(data)
    })
  }


  editItem() {
    this.setState({ frontState: 'edit' });
  }

  editForm() {
    let image = this.props.details[this.state.currentSlide]
    console.log(image);
    return (
      <div>
        <form ref="imageForm" className="input-field">
          <h4 className="center title">Add item</h4>
          <div className="card-content">
            <span className="card-title">
              <input type="text" required ref='name'  placeholder="name" defaultValue={image.name}/>
            </span>
            <p><input type="text" ref="address" placeholder="address" defaultValue={image.image}/></p>
            <p><input type="text" ref="infopic" placeholder="Picture Information" required defaultValue={image.infopic} /></p>
            <p><input type="text" ref="role" placeholder="role" required defaultValue={image.role} /></p>
          </div>
          <div className="card-action">
            <div type="submit" className="btn" onClick={this.handleSubmitEdit}>submit</div>
          </div>
        </form>
      </div>
    );
  }

  handleSubmitEdit(e) {
    e.preventDefault();
    let id = this.props.details[this.state.currentSlide].id
    let name = this.refs.name.value;
    let image = this.refs.address.value;
    let infopic = this.refs.infopic.value;
    let role = this.refs.role.value;

      $.ajax({
        url: `/api/carrusels/${id}`,
        type: 'PUT',
        dataType: 'JSON',
        data: { carrusel: { name, image, infopic, role} }
      }).done( image => {
        console.log(image)
        this.refs.imageForm.reset();
        this.setState({
          data: [...this.state.data, image],
          frontState: 'show'
        })
      }).fail( data => {
        console.log(data)
    })
  }
  
  deleteItem(e) {
    e.preventDefault();
    let id = this.props.details[this.state.currentSlide].id
      $.ajax({
        url: `/api/carrusels/${id}`,
        type: 'DELETE',
        dataType: 'JSON'
      }).done( data => {
        this.setState({
          currentSlide: 0
        })
      }).fail( data => {
        console.log(data)
    })
  }

  frontOptions() {
    if(this.state.frontState === 'show') {
      return(
        <div className="card-image waves-effect waves-block waves-light">
          <div className="prev detalles valign-wrapper" onClick={this.togglePrev}></div>
            <div id="detalles" className="carousel carousel-slider">
              {this.showMeThePic(this.props.details)}
            </div>
          <div className="letter"></div>
          <div className="next detalles valign-wrapper" onClick={this.toggleNext}></div>
        </div>
      );
    } else if (this.state.frontState === 'add') {
      return(this.addFrom());
    } else {
      return(this.editForm())
    }
  }


  front() {
    const actualPic = this.state.currentSlide;
    return(
      <div>
        <div className="card">
          { this.frontOptions()}
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{this.props.details[actualPic].name}
              <div type="button" onClick={this.toggleCard} className="hamburger right"></div>
              <div type="button" onClick={this.addItem}><i className="small material-icons">add</i></div>
              <div type="button" onClick={this.editItem}><i className="small material-icons">mode_edit</i></div>
              <div type="button" onClick={this.deleteItem}><i className="small material-icons">delete</i></div>
            </span>
          </div>
        </div>
      </div>
    )
  }

  behind() {
    return(
      <div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">{this.props.details.name}<i type="button" onClick={this.toggleCard} className="material-icons right">close</i></span>
          <p>{this.props.description.description}</p>
          <div className="logos">
            <div className={this.props.description.logo1}></div>
            <div className={this.props.description.logo2}></div>
            <div className={this.props.description.logo3}></div>
            <div className={this.props.description.logo4}></div>
          </div>
        </div>
      </div>
    )
  }


  render() {
    if(this.state.show) {
      return(this.front());
    } else {
      return(this.behind());
    }
  }

}


export default Carrusel;

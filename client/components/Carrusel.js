import React, { Component } from 'react';
import Picture from './Picture';

class Carrusel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      show: true,
      currentSlide: 0,
      data: this.props.details,
    }

    this.toggleCard = this.toggleCard.bind(this);
    this.showMeThePic = this.showMeThePic.bind(this);
    this.toggleNext = this.toggleNext.bind(this);
    this.togglePrev = this.togglePrev.bind(this);

  }

  toggleCard() {
    this.setState({ show: !this.state.show });
  }

  componentDidMount(){
    $('.carousel').carousel({full_width: true});
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
    $('.carousel').carousel({full_width: true});
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

    return (<img className="carousel-item" src={info[actualPic].image} data-info={info[actualPic].commentsPerPic} id={id} />)
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

  front() {
    const actualPic = this.state.currentSlide;
    return(
      <div>
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <div className="prev detalles valign-wrapper" onClick={this.togglePrev}></div>
              <div id="detalles" className="carousel carousel-slider">
                { this.showMeThePic(this.props.details)}
              </div>
            <div className="letter"></div>
            <div className="next detalles valign-wrapper" onClick={this.toggleNext}></div>
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{this.props.details[actualPic].name}<div type="button" onClick={this.toggleCard} className="hamburger right"></div></span>
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

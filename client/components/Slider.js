import React, { Component } from 'react';
import Picture from './Picture';

class Slider extends Component {

  constructor(props) {
    super(props);

    this.state = {
      show: true
    }

    this.toggleCard = this.toggleCard.bind(this);
    // this.showMeThePic = this.showMeThePic.bind(this);

  }

  toggleCard() {
    this.setState({ show: !this.state.show });
  }

  componentDidMount(){
    $('.carousel').carousel({full_width: true});

    $('.next').on('click', function() {
      $('.carousel').carousel('next');
    });

    $('.prev').on('click', function() {
      $('.carousel').carousel('prev');
    });

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

    $('.next').on('click', function() {
      $('.carousel').carousel('next');
    });

    $('.prev').on('click', function() {
      $('.carousel').carousel('prev');
    });

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

// <div className="carousel-item" data-info={this.props.details.commentsPerPic[0]} id={this.props.details.id[0]}></div>

// {Object.key(this.showMeThePic)}

  // showMeThePic() {
  //   // console.log(this.props.details.id.length);
  //   console.log(this.props.details);
  //   const info = this.props.details
  //
  //   for(var i = 0; i < info.id.length; i++) {
  //     console.log(info.commentsPerPic[i]);
  //     return (<div className="carousel-item" data-info={info.commentsPerPic[i]} id={info.id[i]}></div>)
  //   }
  // }

  // const fullNames = inventors.map( inventor => `${inventor.first} ${inventor.last}`);


// {Object.keys(this.props.details).map(key => <div className="carousel-item" data-info={this.props.details.commentsPerPic[key]} id={this.props.details.id[key]}></div>)}

// {console.log(Object.keys(this.props.details.id.length).map(key => key))}

  front() {
    return(
      <div>
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <div className="prev detalles valign-wrapper"></div>
              <div id="detalles" className="carousel carousel-slider">
                <div className="carousel-item" data-info={this.props.details.commentsPerPic[0]} id={this.props.details.id[0]}></div>
                <div className="carousel-item" data-info={this.props.details.commentsPerPic[1]} id={this.props.details.id[1]}></div>
                <div className="carousel-item" data-info={this.props.details.commentsPerPic[2]} id={this.props.details.id[2]}></div>
              </div>
            <div className="letter"></div>
            <div className="next valign-wrapper"></div>
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{this.props.details.name}<div type="button" onClick={this.toggleCard} className="hamburger right"></div></span>
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
          <p>{this.props.details.description}</p>
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


export default Slider;

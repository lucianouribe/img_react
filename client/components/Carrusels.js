import React, { Component } from 'react';
import { connect } from 'react-redux';

import CarruselsEdit from './CarruselsEdit';
import CarruselsDescription from './CarruselsDescription';

import { deleteCarrusel } from '../actions/carrusels';
import { setIdioma } from '../actions/idiomas';
import { reseter } from '../actions/reseter';

import { createMarkup } from '../helpers';


class Carrusels extends Component {

  constructor(props) {
    super(props);

    this.state = {
      show: true,
      frontState: 'show',
      currentSlide: 0
    }

    this.toggleCard = this.toggleCard.bind(this);

    this.menuButtons = this.menuButtons.bind(this);
    this.menuButtonsMagic = this.menuButtonsMagic.bind(this);

    this.showMeThePic = this.showMeThePic.bind(this);
    this.toggleNext = this.toggleNext.bind(this);
    this.togglePrev = this.togglePrev.bind(this);

  }

  componentDidMount(){
    // Text of each picture
    $('.carruslide').on('mouseenter', function() {
      var info = this.dataset.info || "";
      if(info != "") {
        $('.letter').text(info);
        $('.letter').show();
      };
    });

    $('.carruslide').on('mouseleave', function() {
      $('.letter').hide();
    });
  }

  componentDidUpdate(){
    // reset current slide to cero!
    if(this.props.reseter == true) {
      this.setState({
        currentSlide: 0
      })
      this.props.dispatch(reseter(false));
    }
    // Text of each picture
    $('.carruslide').on('mouseenter', function() {
      var info = this.dataset.info || "";
      if(info != "") {
        $('.letter').text(info);
        $('.letter').show();
      };
    });

    $('.carruslide').on('mouseleave', function() {
      $('.letter').hide();
    });
  }

  menuButtons() {
    // console.log('menu buttons')
    const add = 'add';
    const edit = 'edit';
    const errase = 'errase';
    if(this.props.user.role == 'admin' && this.props.queVeo == 'admin') {
      return(
        <div>
          <i type="button" onClick={() => this.menuButtonsMagic(add)} className="pic-options small material-icons">add</i>
          <i type="button" onClick={() => this.menuButtonsMagic(edit)} className="pic-options small material-icons">mode_edit</i>
          <i type="button" onClick={() => this.menuButtonsMagic(errase)} className="pic-options small material-icons">delete</i>
        </div>
      )
    }
  }


  menuButtonsMagic(command) {
    switch (command) {
      case 'errase':
        console.log('this is errase')
        let id = this.props.transitoryInfo[this.state.currentSlide].id
        let yes = confirm('are you sure');
        if (yes == true) {
          this.props.dispatch(deleteCarrusel(id));
          this.setState({currentSlide: 0});
        }
        break;
      case 'show':
      case 'add':
      case 'edit':
        this.setState({ frontState: command });
        break;
      default:
        this.setState({ frontState: 'show' });
        break;
    }
  }

  toggleCard() {
    this.setState({ show: !this.state.show });
  }

  showMeThePic() {
    // console.log('show me the pic')
    const info = this.props.transitoryInfo;
    const actualPic = this.state.currentSlide;
    if(info.length > 0){
      const id = info[actualPic].id;
      return (<img className="carruslide" src={this.props.transitoryInfo[this.state.currentSlide].image} data-info={info[actualPic].infopic} id={id}/>)
    } else {
      return (<p>Library without images</p>);
    }
  }

  toggleNext() {
    // console.log("this is toggle next");
    var data = this.props.transitoryInfo;
    var current = this.state.currentSlide;
    // console.log(current)
    var next = current + 1;
    if (next > data.length - 1) {
      next = 0;
    }
    console.log(next);
    this.setState({currentSlide: next});
    this.props.dispatch(reseter(false));
    // console.log(this.state.currentSlide)
  }

  togglePrev() {
    // console.log("this is toggle prev");
    var data = this.props.transitoryInfo;
    var current = this.state.currentSlide;
    var prev = current - 1;
    if (prev < 0) {
      prev = data.length - 1;
    }
    // console.log(prev);
    this.setState({currentSlide: prev});
    this.props.dispatch(reseter(false));
    // console.log(this.state.currentSlide)
  }

  front() {
    if(this.props.transitoryInfo.length > 0) {
      var actualPic = this.props.transitoryInfo[this.state.currentSlide].name;
    } else {
      var actualPic = "no";
    }
    if(this.state.frontState === 'show') {
      return(
        <div className="card">
          <div>
            <div id="detalles" className="carousel carruholder center">
              <div className="prev detalles valign-wrapper" onClick={this.togglePrev}></div>
              {this.showMeThePic()}
              <div className="letter truncate"></div>
              <div className="next detalles valign-wrapper" onClick={this.toggleNext}></div>
            </div>
          </div>
          <div className="card-info">
            <h5 className="card-title left">{actualPic}</h5>
            <span className="rigth">
              {this.menuButtons()}
              <i type="button" onClick={this.toggleCard} className="hamburger right"></i>
            </span>
          </div>
        </div>
      );
    } else if (this.state.frontState === 'add' || this.state.frontState === 'edit') {
        return(<CarruselsEdit doWhat={this.state.frontState} menuButtonsMagic={this.menuButtonsMagic} currentSlide={this.state.currentSlide}/>);
    } else {
      return(<p>I'm confused</p>)
    }
  }

  render() {
    if(this.state.show) {
      return(<div className='card'>{this.front()}</div>);
    } else {
      return(<CarruselsDescription show={this.toggleCard} selectedCarrusel={this.props.selectedCarrusel}/>);
    }
  }


}


const mapStateToProps = (state) => {
  return {
    user: state.user,
    selectedCarrusel: state.selectedCarrusel,
    transitoryInfo: state.transitoryInfo,
    idiomas: state.idiomas,
    queVeo: state.queVeo,
    reseter: state.reseter,
  }
}

export default connect(mapStateToProps)(Carrusels);

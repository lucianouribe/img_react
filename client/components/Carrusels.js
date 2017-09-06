import React, { Component } from 'react';
import Picture from './Picture';
import { connect } from 'react-redux';
import { addCarrusel, editCarrusel, deleteCarrusel } from '../actions/carrusels';


class Carrusels extends Component {

  constructor(props) {
    super(props);

    this.state = {
      show: true,
      frontState: 'show',
      currentSlide: 0,
      data: this.props.details
    }

    this.toggleCard = this.toggleCard.bind(this);
    this.showItem = this.showItem.bind(this);

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

    this.canSee = this.canSee.bind(this);
    this.menuButtons = this.menuButtons.bind(this);

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
    if(this.props.reset == true) {
      this.setState({
        currentSlide: 0
      })
      this.props.reseter();
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

  canSee() {
    // console.log('can see')
    if(this.props.user.role == 'admin')
      return true
  }

  menuButtons() {
    // console.log('menu buttons')
    if(this.canSee()) {
      return(
        <div>
          <i type="button" onClick={this.addItem} className="pic-options small material-icons">add</i>
          <i type="button" onClick={this.editItem} className="pic-options small material-icons">mode_edit</i>
          <i type="button" onClick={this.deleteItem} className="pic-options small material-icons">delete</i>
        </div>
      )
    }
  }

  toggleCard() {
    this.setState({ show: !this.state.show });
  }

  showMeThePic() {
    const info = this.props.transitoryInfo
    console.log('show me the pic info')
    console.log(info)
    console.log('actualPic')
    const actualPic = this.state.currentSlide;
    console.log(actualPic)
    let id = info[actualPic].id;
    console.log('id')
    console.log(info[actualPic])
    // return (<img className="carruslide" src={info[actualPic].image} data-info={info[actualPic].infopic} id={id} />)
  }

  toggleNext() {
    // console.log("this is toggle next");
    var data = this.props.details;
    var current = this.state.currentSlide;
    // console.log(current)
    var next = current + 1;
    if (next > data.length - 1) {
      next = 0;
    }
    console.log(next);
    this.setState({currentSlide: next});
    this.props.reseter()
    // console.log(this.state.currentSlide)
  }

  togglePrev() {
    // console.log("this is toggle prev");
    var data = this.props.details;
    var current = this.state.currentSlide;
    var prev = current - 1;
    if (prev < 0) {
      prev = data.length - 1;
    }
    // console.log(prev);
    this.setState({currentSlide: prev});
    this.props.reseter()
    // console.log(this.state.currentSlide)
  }

  addItem() {
    this.setState({ frontState: 'add' });
  }

  addForm() {
    return (
      <div>
        <form ref="imageForm" className="input-field">
          <span className="center title"><i type="button" onClick={this.showItem} className="close material-icons right">close</i><h5>Add new image</h5></span>
          <div className="card-content">
            <span className="card-title">
              <input type="text" required ref='name'  placeholder="name" />
            </span>
            <p><input type="text" ref="address" placeholder="Paste URL" /></p>
            <p><input type="text" ref="infopic" placeholder="Comments"  /></p>
            <p><input type="text" ref="role" placeholder="Role"  /></p>
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
    // console.log('this is my handle sumbit');
    let name = this.refs.name.value;
    let image = this.refs.address.value;
    let infopic = this.refs.infopic.value;
    let role = this.refs.role.value;
    this.props.dispatch(addCarrusel(name, image, infopic, role));
    this.setState({frontState: 'show'});
    this.props.infoSponge(e, role);
  }

  editItem() {
    this.setState({ frontState: 'edit' });
  }

  editForm() {
    let image = this.props.details[this.state.currentSlide]
    // console.log(image);
    return (
      <div>
        <form ref="imageForm" className="input-field">
          <span className="center title"><i type="button" onClick={this.showItem} className="close material-icons right">close</i><h5>Edit {image.name}</h5></span>
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
    // console.log('handle submit edit')
    let id = this.props.details[this.state.currentSlide].id
    let name = this.refs.name.value;
    let image = this.refs.address.value;
    let infopic = this.refs.infopic.value;
    let role = this.refs.role.value;
    this.props.dispatch(editCarrusel(id, name, image, infopic, role));
    this.setState({frontState: 'show'});
    this.props.infoSponge(e, role)
  }

  deleteItem(e) {
    e.preventDefault();
    let id = this.props.details[this.state.currentSlide].id
    let yes = confirm('are you sure');
    if (yes == true) {
      this.props.dispatch(deleteCarrusel(id));
      this.setState({currentSlide: 0});
    }
  }

  frontOptions() {
    const actualPic = this.state.currentSlide;
    if(this.state.frontState === 'show') {
      return(
        <div className="card">
          <div>
            <div id="detalles" className="carousel carruholder center">
              <div className="prev detalles valign-wrapper" onClick={this.togglePrev}></div>
              {this.showMeThePic(this.props.selectedCarrusel)}
              <div className="letter truncate"></div>
              <div className="next detalles valign-wrapper" onClick={this.toggleNext}></div>
            </div>
          </div>
          <div className="card-info">
            <h5 className="card-title left">{}</h5>
            <span className="rigth">
              {this.menuButtons()}
              <i type="button" onClick={this.toggleCard} className="hamburger right"></i>
            </span>
          </div>
        </div>
      );
    } else if (this.state.frontState === 'add') {
      return(this.addForm());
    } else {
      return(this.editForm())
    }
  }

  showItem() {
    this.setState({ frontState: 'show' });
  }

  front() {
    return(
      <div className="card">
        { this.frontOptions()}
      </div>
    )
  }

  behind() {
    return(
      <div>
        <div className="card-reveal">
          <span className="card-title"><i type="button" onClick={this.toggleCard} className="close material-icons right">close</i><h5>{this.props.description.name}</h5></span>
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


const mapStateToProps = (state) => {
  return {
    user: state.user,
    carrusels: state.carrusels,
    selectedCarrusel: state.selectedCarrusel,
    transitoryInfo: state.transitoryInfo
  }
}

export default connect(mapStateToProps)(Carrusels);

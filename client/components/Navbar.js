import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { logout } from '../actions/auth';
import { toggleFullScreen } from '../helpers';

class Navbar extends React.Component {

  constructor(props){
    super(props);

    this.menuItems = this.menuItems.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount(){
    // grab menu
    const slider = document.querySelector('.nav-bar-main');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;  // stop the fn from running
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3;
      slider.scrollLeft = scrollLeft - walk;
    });

    $('.main-nav .nav-bar-main a').on('click', function(){
      $('.main-nav .nav-bar-main a').removeClass('active');
      $(this).addClass('active');
    });
  }

  logout(e) {
    e.preventDefault();
    this.props.dispatch(logout(this.props.history));
  }

  menuItems(){
    let information = this.props.menuData;

    if(information.length){
      return information.map( info => {
        if ( info.name === 'signin' && this.props.user.role === 'admin' ) {
          return(<Link onClick={this.logout} key={info.id}><span>logout</span></Link>)
        } else {
          return(<Link to={`/${info.name}`} key={info.id}><span>{info.name}</span></Link>);
        }
      })
    } else {
      return(<div><span>menu | without | options!</span></div>);
    }
  }

  render(){
    return (
    <nav>
      <div className='main-nav'>
        <div className='prev-next' onClick={() => toggleFullScreen()}>&lt;</div>
        <div className='nav-bar-main'>
          {this.menuItems()}
        </div>
        <div className='prev-next'>&gt;</div>
      </div>
    </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(Navbar);

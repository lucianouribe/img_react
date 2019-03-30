import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { logout } from '../actions/auth';

class NavbarTwo extends React.Component {

  constructor(props){
    super(props);

    this.menuItems = this.menuItems.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount(){
    // jquery button clicked effect
    // $('.btn-nav-main').on('click', function(){
    //   $('.btn-nav-main').removeClass('btn-clicked');
    //   $(this).addClass('btn-clicked');
    // });

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


    // const scrollerer = document.querySelector('.nav-bar-controller');
    // let howMany = document.querySelector('.btn-nav-main');
    // // console.log(howMany)

    // function handleUpdate() {
    //   slider.scrollLeft = parseInt(this.value) * 2;
    // }

    // scrollerer.addEventListener('change', handleUpdate);
    // scrollerer.addEventListener('mousemove', handleUpdate);
  }

  componentDidUpdate(){
    // jquery button clicked effect
    // $('.btn-nav-main').on('click', function(){
    //   $('.btn-nav-main').removeClass('btn-clicked');
    //   $(this).addClass('btn-clicked');
    // });
  }

  logout(e) {
    e.preventDefault();
    console.log('logout dispatcher');
    console.log(this.props);
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
        <div className='prev-next'>&lt;</div>
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

export default connect(mapStateToProps)(NavbarTwo);


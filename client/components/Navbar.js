import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';


class Navbar extends Component {

  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
    this.navs = this.navs.bind(this);

  }

  logout(e) {
    e.preventDefault();
    console.log('logout dispatcher');
    this.props.dispatch(logout(this.props.history));
  }

  componentDidMount() {
    $('.button-collapse').sideNav();
  }
  // <Link to="/" className="brand-logo"></Link>
  // <h5 className="dash">Dashboard</h5>

  navs() {
    switch(this.props.user.role) {
      case'developer':
        return(
          <div>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/home'>Contact</Link></li>
            <li><a style={{ cursor: 'pointer' }} onClick={this.logout}>Logout</a></li>
          </div>
        );
      case'admin':
        return(
          <div>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/main'>Main</Link></li>
            <li><a style={{ cursor: 'pointer' }} onClick={this.logout}>Logout</a></li>
          </div>
        );
      default:
        return(
          <div>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/home'>Contact</Link></li>
            <li><Link to='/signup'>SignUp</Link></li>
            <li><Link to='/signin'>LogIn</Link></li>
          </div>
        );
    }
  }


  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href='#' data-activates='mobile' className='button-collapse'>
              <i className="hamburger"></i>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {this.navs()}
            </ul>
            <ul className='side-nav' id='mobile'>
              <div className="dash-buttons">
                <ul className="collapsible" data-collapsible="accordion">
                  <li><Link className="collapsible-header" to='/home'>Home</Link></li>
                  <li>
                    <div className="collapsible-header"><i className="world"></i>Panoramicos 360</div>
                    <div className="collapsible-body" onClick={(e) => this.props.infoSpongePanos(e, panodigital)} >Digital</div>
                    <div className="collapsible-body" onClick={(e) => this.props.infoSpongePanos(e, panofotografia)}>Fotografia</div>
                    <div className="collapsible-body" onClick={(e) => this.props.infoSpongePanos(e, panoradar)}>Radar</div>
                  </li>
                  <li>
                    <div className="collapsible-header"><i className="teapot"></i>Renders</div>
                    <div className="collapsible-body" onClick={(e) => this.props.infoSpongeAjax(e, productos)}><a>Productos</a></div>
                    <div className="collapsible-body" onClick={(e) => this.props.infoSpongeAjax(e, espacios)}><a>Espacios</a></div>
                    <div className="collapsible-body" onClick={(e) => this.props.infoSpongeAjax(e, otros)}><a>Otros</a></div>
                  </li>
                  <li>
                    <div className="collapsible-header"><i className="bulb"></i>Fotografia Productos</div>
                    <div className="collapsible-body" onClick={(e) => this.props.infoSpongeImages(e, fotosJoyas)}><a>Joyas</a></div>
                    <div className="collapsible-body" onClick={(e) => this.props.infoSpongeImages(e, fotosComp)}><a>Componentes</a></div>
                    <div className="collapsible-body" onClick={(e) => this.props.infoSpongeImages(e, fotosCuadros)}><a>Cuadros</a></div>
                  </li>
                  <li>
                    <div className="collapsible-header"><i className="material-icons">place</i>Fotografia Decorativa</div>
                    <div className="collapsible-body" onClick={(e) => this.props.infoSpongeImages(e, fotosDetalles)}><a>Detalles</a></div>
                    <div className="collapsible-body" onClick={(e) => this.props.infoSpongeImages(e, fotosPaisajes)}><a>Paisajes</a></div>
                    <div className="collapsible-body" onClick={(e) => this.props.infoSpongeImages(e, fotosUrbano)}><a>Urbano</a></div>
                    <div className="collapsible-body" onClick={(e) => this.props.infoSpongeImages(e, fotosTexturas)}><a>Texturas</a></div>
                    <div className="collapsible-body" onClick={(e) => this.props.infoSpongeImages(e, fotosMuelles)}><a>Muelles</a></div>
                    <div className="collapsible-body" onClick={(e) => this.props.infoSpongeImages(e, fotosCuadrados)}><a>Cuadrados</a></div>
                  </li>
                  <li>
                    <div className="collapsible-header"><i className="material-icons">filter_drama</i>Programming</div>
                    <div className="collapsible-body"><a>What time is it?</a></div>
                    <div className="collapsible-body"><a>Batterie</a></div>
                    <div className="collapsible-body"><a>Something else</a></div>
                  </li>
                  <li>
                    <div className="collapsible-header"><i className="material-icons">whatshot</i>Libros</div>
                    <div className="collapsible-body"><a>Bitacora del Motoneto</a></div>
                    <div className="collapsible-body"><a>Rutas de Oriente</a></div>
                  </li>
                  <li>
                    <div className="collapsible-header"><i className="material-icons">whatshot</i>Blogs</div>
                    <div className="collapsible-body"><a>Bitacora del Motoneto</a></div>
                    <div className="collapsible-body"><a>Tribunal de Justicia</a></div>
                  </li>
                </ul>
              </div>
              <li><Link to='/home'>Contact</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Navbar);

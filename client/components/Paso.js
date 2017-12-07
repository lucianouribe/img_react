import React from 'react';
import { connect } from 'react-redux';

// import { deletePaso } from '../actions/pasos';
import { fetchProyectos, deletePaso } from '../actions/proyectos';
import { createMarkup } from '../helpers';


class Paso extends React.Component {

  constructor(props){
    super(props);

    this.deletePaso = this.deletePaso.bind(this);
  }

  deletePaso(pasId, proyecto){
    console.log('delete me')
    this.props.dispatch(deletePaso(pasId, proyecto));
    // this.props.showContent();
    // let full = 'full';
    // this.props.dispatch(fetchProyectos(full));
  }

  render() {
    let paso = this.props.step;
    let proyecto = this.props.proyecto;
    return(
      <div className={`paso-container ${paso.estilo}`}>
        <div className="paso-content" dangerouslySetInnerHTML={createMarkup(paso.step)}/>
        <span className='botones'>
          <i className="material-icons btn-icon btn-add">add</i>
          <i className="material-icons btn-icon btn-report">report</i>
          <i className="material-icons btn-icon btn-comment">comment</i>
          <i className="material-icons btn-icon btn-edit">edit</i>
          <i className="material-icons btn-icon btn-delete" onClick={() => this.deletePaso(paso.id, proyecto)}>delete</i>
        </span>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {

  }
}
export default connect(mapStateToProps)(Paso);

import React from 'react';
import { connect } from 'react-redux';

class SubWorld extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    const subtheme = this.props.subtheme;
    const divStyle = {
      backgroundImage: `url(${subtheme.avatar_url})`
    };
    return (
      <div onClick={this.props.toggleView} className="world_subtheme">
        <div className='img_container' style={divStyle}>
          <h2><span>{subtheme.name}</span></h2>
        </div>
        <div className='data_container'>
          <span className='level_container'>
            <p>level</p>
            <h4></h4>
          </span>
          <span className={`status_container`}></span>
          <span className='points_container'>
            <p>punkt</p>
            <h4></h4>
          </span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}
export default connect(mapStateToProps)(SubWorld);
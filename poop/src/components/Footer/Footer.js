import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class Footer1 extends Component {
    render() {
      return (
        <div className='Footer'>
        <Link to='/home'><button><img src='./orangeLocation.png' /></button></Link>
        <Link to='/order'><button><img src='./icon2.png' /></button></Link>
        <Link to='/settings'><button><img src='./settings.png' /></button></Link>
    </div>
      )
    }
  }
  
  export default Footer1;
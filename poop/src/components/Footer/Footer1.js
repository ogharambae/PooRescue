import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class Footer4 extends Component {
    render() {
      return (
          <div className='Footer'>
              <Link to='/home'><button><img src='./location.png' /></button></Link>
              <Link to='/order'><button><img src='./icon2.png' /></button></Link>
              <Link to='/settings'><button><img src='./orangeSettings.png' /></button></Link>
          </div>
      )
    }
  }
  
  export default Footer4;
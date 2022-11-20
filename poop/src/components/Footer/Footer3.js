import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class Footer3 extends Component {
    render() {
      return (
        <div className='Footer'>
        <Link to='/home'><button><img src='./location.png' /></button></Link>
        <Link to='/add'><button><img src='./orangeOrder.png' /></button></Link>
        <Link to='/settings'><button><img src='./settings.png' /></button></Link>
        </div>
      )
    }
  }
  
  export default Footer3;
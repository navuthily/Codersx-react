import React, { Component } from 'react';

class Navbar extends Component {
  render() {
   
    return (
      <>
             <a className="p-2 text-dark work " href="#"><i  className={this.props.icon}></i>{this.props.name}</a>
             
      </>
    );
  }
}

export default Navbar;
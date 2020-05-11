import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <div
          className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
          <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>
          <nav className="my-2 my-md-0 mr-md-3 nav-item ">
            <Navbar title='home' icon='fa fa-home'></Navbar>
            <Navbar title='deal' icon='fa fa-gift'></Navbar>
            <Navbar title='upload' icon='fa fa-upload'></Navbar>
            <Navbar title='work' icon='fa fa-coffee'></Navbar>
            <Navbar title='settings' icon='fa fa-cog'></Navbar>
          </nav>
          <a className="btn btn-outline-primary" href="#">Sign up</a>
        </div>
      </header>
    </div>
  );
}

export default App;

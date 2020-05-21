import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import RecommendedFriends from "./components/RecommendedFriends";
import PropTypes from 'prop-types'; 
const navbar = [
  {
    id: 1,
    name: "Home",
    icon: "fa fa-home",
  },
  {
    id: 2,
    name: "deal",
    icon: "fa fa-gift",
  },
  {
    id: 3,
    name: "upload",
    icon: "fa fa-upload",
  },
  {
    id: 4,
    name: "work",
    icon: "fa fa-coffee",
  },
  {
    id: 5,
    name: "setting",
    icon: "fa fa-cog",
  },
];

const friends = [
  {
    username: "an",
    image:
      "https://image.shutterstock.com/image-photo/macro-leaves-background-texture-blue-600w-728448754.jpg",
  },
  {
    username: "na",
    image:
      "https://image.shutterstock.com/image-photo/macro-leaves-background-texture-blue-600w-728448754.jpg",
  },
  {
    username: "ly",
    image:
      "https://image.shutterstock.com/image-photo/macro-leaves-background-texture-blue-600w-728448754.jpg",
  },
];

class App extends Component {
  showMenuBar = () => {
    let result = null;

    result = navbar.map((item, index) => {
      return <Navbar key={item.id} name={item.name} icon={item.icon} />;
    });

    return result;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
            <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>
            <nav className="my-2 my-md-0 mr-md-3 nav-item ">
              {this.showMenuBar()}
            </nav>
          </div>

          <RecommendedFriends friends={friends} />
        </header>
      </div>
    );
  }
}

export default App;

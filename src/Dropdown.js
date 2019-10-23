import React from 'react';
import './Dropdown.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

class Dropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div onClick={this.hideDropdownMenu}  className="dropdown" >
         <div className="button" onMouseMove={this.showDropdownMenu} > Phim</div>

          { this.state.displayMenu ? (
          <ul>
         <li ><Link to="/Phim đang chiếu">Phim đang chiếu</Link></li>
         <li><Link to="/Phim sắp chiếu">Phim sắp chiếu</Link></li>
          </ul>
        ):
        (
          null
        )
        }
       </div>

    );
  }
}

export default Dropdown;
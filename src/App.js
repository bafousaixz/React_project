import React from 'react';
import './App.css';
import Home from './Home.js';
import About from './Contact/About.js';
import Phim from './Movie/Phim.js';
import Contact from './Contact/Contact.js'
import Phimdel from './Movie/Phimdel.js'
import Login from './Login/Login.js'
import Datve from './Datve/Datve.js'
import Khuyenmai from './Khuyenmai/Khuyenmai.js';
import EventDetail from './Khuyenmai/EventDetail.js';
import Thanhtoan from './Datve/thanhtoan.js';
import Giave from './Datve/giave.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


class App extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <Router>
        <div className="App">
          <div className="top-top">
            <div className="top-right">
            <Link id="as" className="menu-top" to="/About">About</Link>
            <Link id="as" className="menu-top" to="/Contact">Contact</Link>
            <Link className="menu-top" to="/dang-nhap">Đăng nhập</Link>
            <Link  to="/phim-detail"></Link>
            </div>
          </div>

          <div className="logo">
          <Link className="name" to="/"><i id="bcd" class="fab fa-creative-commons"></i> Susan </Link>
          </div>

          <div className= "menu">
            <Link className="content" to="/mua-ve">Mua vé</Link>
            <Link className="content" to="/phim">Phim</Link>
            <Link className="content" to="/rap">Rạp</Link>
            <Link className="content" to="/khuyenmai">Khuyến mãi</Link>
          </div>
            
      
          <Switch>
            <Route exact path="/"><Home/></Route>
            <Route path="/mua-ve"><Muave/></Route>
            <Route path="/phim"><Phim/></Route>
            <Route path="/thanh-toan"><Thanhtoan/></Route>
            <Route exact path="/khuyenmai"><Khuyenmai/></Route>
            <Route path="/khuyenmai/:id"><EventDetail/></Route>
            <Route path="/About"><About/></Route>
            <Route path="/Contact"><Contact/></Route>
            <Route path="/dang-nhap"><Login/></Route>
            <Route path="/phim-detail/:id"><Phimdel/></Route>
            <Route path="/dat-ve"><Datve/></Route>
            <Route path="/gia-ve"><Giave/></Route>
          </Switch>
        </div>
      </Router>
      
    );
  }
 
}

class Muave extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <h1>Day la trang Mua ve</h1>
    );
  };
}

class Rap extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <h1>Day la trang Rạp</h1>
    );
  };
}




export default App;

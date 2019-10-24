import React from 'react';
import './App.css';
import Home from './Home.js';
import About from './Contact/About.js';
import Footer from './Footer/Footer.js';
import Phim from './Movie/Phim.js';
import Contact from './Contact/Contact.js'
import Phimct from './Movie/Phimct.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
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
            <Link className="menu-top" to="/Đăng nhập">Đăng nhập</Link>
            </div>
          </div>
          <div className="logo">
          <Link className="name" to="/"><i class="fab fa-react"></i> Susan CINEMA</Link>
          </div>
            <div className= "menu">
              <Link className="content" to="/Mua vé">Mua vé</Link>
              <Link className="content" to="/Phim">Phim</Link>
              <Link className="content" to="/Rạp">Rạp</Link>
              <Link className="content" to="/Khuyến mãi">Khuyến mãi</Link>
            </div>
            
      
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/Mua vé"><Muave/></Route>
          <Route path="/Phim"><Phim/></Route>
          <Route path="/Rạp"><Phimct/></Route>
          <Route path="/Khuyến Mãi"><Khuyenmai/></Route>
          <Route path="/About"><About/></Route>
          <Route path="/Contact"><Contact/></Route>
          <Route path="/Đăng nhập"><Login/></Route>
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

class Khuyenmai extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <h1>Day la trang Khuyen mai</h1>
    );
  };
}

class Login extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <h1>Day la trang Đăng nhập</h1>
    );
  };
}

export default App;

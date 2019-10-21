import React from 'react';
import './App.css';
import Home from './Home.js';
import Phim from './Phim.js';
import About from './About.js';
import Footer from './Footer.js';
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
            <Link className="menu-top" to="/About">About</Link>
            <Link className="menu-top" to="/Contact">Contact</Link>
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
            
        <hr />
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/Mua vé"><Muave/></Route>
          <Route path="/Phim"><Phim/></Route>
          <Route path="/Rạp"><Rap/></Route>
          <Route path="/Khuyến Mãi"><Khuyenmai/></Route>
          <Route path="/About"><About/></Route>
          {/* <Route path="/Contact"><Contact/></Route> */}
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

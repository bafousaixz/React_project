import React from 'react';
import './Login.css';
import Footer from '../Footer/Footer.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

export default class Login extends React.Component{

    render(){
        return(
            <div className="rou" >
                <Router>
                <div className="roi">
                    <Link className="bef" to="/dang-nhap">Sign in</Link>
                    <Link className="bef" to="/dang-ky">Sign up</Link>
                </div>
                

                <Switch>
                    <Route exact path="/dang-nhap"><Log/></Route>
                    <Route path="/dang-ky"><Sig/></Route>
                </Switch>
                </Router>
                <div><Footer/></div>
            </div>
        );
    }
}

function Log() {
    return (
    <form className="Login">
        <div className="fom">
        <br/>
        <input placeholder="Tên đăng nhập" type="text"></input><br/>
        <br/>
        <input placeholder="Mật khẩu" type="password"></input><br/>
        <button type="submit">Đăng nhập</button>
        </div>
    </form>
    );
  }

  
function Sig() {
    return (
    <form className="Login">
        <div className="fom">
        <br/>
        <input placeholder="Email" type="email"></input><br/>
        <br/>
        <input placeholder="Mật khẩu" type="password"></input><br/>
        <br/>
        <input placeholder="Nhập lại mật khẩu" type="password"></input><br/>
        <button type="submit">Đăng ký</button>
        </div>
    </form>
    );
  }

  





import React from 'react';
import { get } from 'https';
import './Phimct.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";


export default class Phimct extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(
            <div className="Phimct">
                <Link to="/"><img src="./images/phim1.jpg"></img></Link>
                <h1>Joker</h1>
                <div className="ct">
                    <p className="time">120 Phút</p>
                    <p>04/10/2019</p>
                </div>
            </div>
        );
    }
}
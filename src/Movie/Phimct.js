import React from 'react';
import './Phimct.css';
import {
    Link,
  } from "react-router-dom";


export default class Phimct extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(
            <div className="Phimct">
                <Link to="/"><img src={this.props.img}></img></Link>
                <h1>{this.props.name}</h1>
                <div className="ct">
                    <p className="time">{this.props.time}</p>
                    <p className="date">{this.props.date}</p>
                </div>
            </div>
        );
    }
}
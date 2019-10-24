import React from 'react';
import Phimct from './Phimct.js';
import './Phimct.css';

export default class Phimdc extends React.Component{
    render(){
        return(
            <div className="Phimdc">
                <div className="contact">
                    <div className="ds-1"> <Phimct/></div>
                    <div className="ds-1"> <Phimct/> </div>
                    <div className="ds-2"> <Phimct/> </div>
                    <div className="ds-2"> <Phimct/> </div>
                </div>
                <div className="contac">
                    <div className="ds"> <Phimct/></div>
                    <div className="ds"> <Phimct/> </div>
                    <div className="ds"> <Phimct/> </div>
                    <div className="ds"> <Phimct/> </div>
                </div>
               
            </div>
        );
    }
}
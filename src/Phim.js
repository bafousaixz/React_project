import React from 'react';
import './Phim.css';
import SlideShow from './SlideShow.js';
import Phimdc from './Movie/Phimdc.js'
import Footer from './Footer.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";


const collection = [
  { src: './images/01.jpg'},
  { src: './images/02.jpg'},
  { src: './images/03.jpg'},
  { src: './images/04.jpg'},
  { src: './images/05.jpg'},
  { src: './images/06.jpg'},
];

export default class Phim extends React.Component{
    render(){
        return(
            <div className="Phim">
                <div className="slide" >
                    <p className="td">phim hot tại rạp</p>
                
                    <SlideShow
                        input={collection}
                        ratio={`9:3`}
                        mode={`automatic`}
                        timeout={`3000`}
                    />
                </div>
                <div className="tl">
                    <Link className="l" to="/Phim/Phimdangchieu">Phim đang chiếu</Link>
                    <Link className="l"  to="Phim sap chieu">Phim sắp chiếu</Link>
                </div>

                <Router>
                    <Route path="/Phim/Phimdangchieu"><Phimdc/></Route>
                    <Route path="Phim sap chieu"><Phimdc/></Route>
                </Router>
                <div className="list">
                    <Phimdc/>
                </div>
                
                <Footer/>
            </div>
        );
    }
}
import React from 'react';
import './Phim.css';
import SlideShow from '../SlideShow/SlideShow.js';
import PhimcsContainer from './Phimdc.js'
import Phimsc from './Phimsc.js'
import Footer from '../Footer/Footer.js'

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
                    <h1 className="l">Phim đang chiếu</h1>
                </div>

                <div className="list">
                    <PhimcsContainer/>
                </div>

                <div className="tl">
                    <h1 className="l">Phim sắp chiếu</h1>
                </div>
                <div className="list">
                    <Phimsc/>
                </div>
                <Footer/>
            </div>
        );
    }
}
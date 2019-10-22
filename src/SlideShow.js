import React from 'react';
import { Fade } from 'react-slideshow-image';
import './SlideShow.css';

export default class SlideShow extends React.Component{
    render(){
        const fadeImages = [
            'images/slide1.jpg',
            'images/slide2.jpg',
            'images/slide3.jpg'
          ];
          
        const fadeProperties = {
            duration: 3000,
            transitionDuration: 500,
            infinite: false,
            indicators: true
        }
              
        return (
            <Fade {...fadeProperties}>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={fadeImages[0]} />
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={fadeImages[1]} />
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={fadeImages[2]} />
                    </div>
                </div>
            </Fade>
        );   
    }
}
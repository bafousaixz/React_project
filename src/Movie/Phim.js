import React from 'react';
import './Phim.css';
import SlideShow from '../SlideShow/SlideShow.js';
import PhimcsContainer from './Phimdc.js'
import Phimsc from './Phimsc.js'
import Footer from '../Footer/Footer.js'

const collection = [
  { src: 'https://galaxycine.vn/media/2019/11/8/psm-kc-2048x682_1573179322986.jpg'},
  { src: 'http://www.lottecinemavn.com/Media/WebAdmin/5d4a262d480043088fee183a10285816.jpg'},
  { src: 'http://www.lottecinemavn.com/Media/WebAdmin/3252a04e40c54d7aa888c4a00312183f.jpg'},
  { src: 'https://galaxycine.vn/media/2019/11/8/dr-kc-2048x682_1573179309543.jpg'},
  { src: 'https://galaxycine.vn/media/2019/11/1/banner-2048x682_1572600297999.jpg'},
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
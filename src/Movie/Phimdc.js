import React from 'react';
import Phimct from './Phimct.js';
import './Phimct.css';



export default class Phimdc extends React.Component{
    render(){
        return(
            <div className="Phimdc">
                <div className="contact">
                
                    <div className="ds-1"> <Phimct
                    img="./images/phim3.jpg"
                    name="MALEFICENT 2"
                    date="18/10/2019"
                    time="120Phút"
                    /></div>
                    <div className="ds-1"> <Phimct
                    img="./images/phim2.jpg"
                    name="BIỆT ĐỘI BẤT HẢO"
                    date="11/10/2019"
                    time="115Phút"
                    /> </div>
                    <div className="ds-2"> <Phimct
                    img="./images/phim1.jpg"
                    name="JOKER"
                    date="04/10/2019"
                    time="120Phút"
                    /> </div>
                    <div className="ds-1"> <Phimct
                    img="./images/phim5.jpg"
                    name="ĐÀN ÔNG SONG TỬ"
                    date="11/10/2019"
                    time="120Phút"
                    /> </div>
                    <div className="ds-2"> <Phimct
                    img="./images/phim4.jpg"
                    name="THẤT SƠN TÂM LINH"
                    date="09/10/2019"
                    time="105Phút"
                    /> </div>
                </div>
                
               
            </div>
        );
    }
}
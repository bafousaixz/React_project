import React from 'react';
import './Phim.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

class Phim extends React.Component{
    render(){
        return(
            <div className="phim">
                <div className="top_phim">
                    <h1>PHIM HOT TẠI RẠP</h1>
                </div>

                <div className="footer">
                    
                </div>

                <div className="select">
                    <Link id="se" className="selec" to="/">Phim đang chiếu</Link>
                    <Link className="selec" to="/">Phim sắp chiếu</Link>
                </div>

            </div>
        );
    }
}



export default Phim;
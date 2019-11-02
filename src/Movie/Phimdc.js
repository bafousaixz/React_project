import React from 'react';
import {connect} from 'react-redux';
import './Phimct.css';
import {
    Link,
  } from "react-router-dom";

class PhimdcList extends React.Component{
    
    createPhimListItems(){
        let listItems = this.props.pdc.map(
            (phimdc)=>{
                return(
                    <div key={phimdc.img} className="Phimct">
                        <Link to={`/phim-detail/${phimdc.id}`} target="_blank"><img src={phimdc.img}></img></Link>
                        <h1>{phimdc.name}</h1>
                        <div className="ct">
                            <p className="time">{phimdc.time}</p>
                            <p className="date">{phimdc.date}</p>
                        </div>
                    </div>
                );
            }
        );
        return listItems;
    }
    render(){
        return(
            <div className="Phimdc">
                <div className="contact">{this.createPhimListItems()}</div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        pdc: state.pdc
    };
}

let PhimcsContainer = connect(mapStateToProps)(PhimdcList);

export default PhimcsContainer;
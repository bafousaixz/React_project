import React from 'react';
import {connect} from 'react-redux';
import './Phimct.css';
import {Link} from "react-router-dom";



class PhimcsList extends React.Component{

    createFoodListItems(){
        let listItems = this.props.psc.map(
            (phimsc)=>{
                return(
                    <div key={phimsc.img} className="Phimct">
                        <Link to="/phim-detail"><img src={phimsc.img}></img></Link>
                        <h1>{phimsc.name}</h1>
                        <div className="ct">
                            <p className="time">{phimsc.time}</p>
                            <p className="date">{phimsc.date}</p>
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
                <div className="contact">
                    {this.createFoodListItems()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        psc: state.psc
    };
}

let PhimcsContainer = connect(mapStateToProps)(PhimcsList);

export default PhimcsContainer;
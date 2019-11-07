import React from 'react';
import './Food.css';
import {connect} from 'react-redux';

class Food extends React.Component{

    createFood(){
        let listFood = this.props.food.map(
            (food)=>{
                return(
                    <div key={food.img} className="Food">
                        <img src={food.img}></img>
                        <h1>{food.name}</h1>
                        <div className="Food-ct">
                            <p className="Food-time">Giá bán online: </p>
                            <p className="Food-date">{food.gia}</p>
                        </div>
                    </div>
                );
            }
        );
        return listFood;
    }
    render(){
        return(
            <div className="list-food">
                {this.createFood()};
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        food: state.food
    };
}

let FoodContainer = connect(mapStateToProps)(Food);

export default FoodContainer ;
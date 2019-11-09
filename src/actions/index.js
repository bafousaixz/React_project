
export const SUB = (val)=>{
    return{
        type: 'SUB',
        value: val
    };
}

export const ADD = (val)=>{
    return{
        type: 'ADD',
        value: val
    };
}

export const selectfood = (food) =>{
    return{
        type: "SELECT_FOOD",
        payload : food
    };
}
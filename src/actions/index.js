import * as types from './constants';

export const SUB = (val)=>{
    return{
        type: types.SUB,
        value: val
    };
}

export const ADD = (val)=>{
    return{
        type: types.ADD,
        value: val
    };
}

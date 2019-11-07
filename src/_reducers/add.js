import val from './value-reducer';

var add = (state = val, action)=>{
    if(action.type == 'ADD'){
        state.val = state.val +1;
        return state.val;
    }
}
export default add;
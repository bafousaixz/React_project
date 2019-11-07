import val from './value-reducer';

var sub = (state = val, action)=>{
    
    if(action.type == 'SUB'){
        var val = (state.val <=0) ? 0 : (state.value -1);
        return val;
    }
}
export default sub;
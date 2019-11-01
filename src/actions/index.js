
export const add = (value)=>{
     value + 1
    return{
        type: "add",
        payload: value
    };
}
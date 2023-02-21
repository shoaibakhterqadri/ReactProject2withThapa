import React, { useReducer, useState } from 'react'

const reducer=(state,action)=>{
if(action.a==="INCR"){
      state=state+1;
}
if(state>0 && action.a==="DECR"){
      state=state-1;
}
return state;
}


const UseReducer = () => {

// const [myNum,setMyNum]=useState(10);

let initialData=10;
const [state,dispatch]= useReducer(reducer,initialData);

  return (
   <>
   <div>
      <p>{state}</p>
      <button onClick={()=>dispatch({a:"INCR"})}>Increment</button>
      <button onClick={()=>dispatch({a:"DECR"})}>Decrement</button>
   </div>
   </>
  )
}

export default UseReducer

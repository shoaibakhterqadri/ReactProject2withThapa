import React, { useState } from 'react'

const UseState = () => {

const [myNum,setMyNum]=useState(10);

  return (
   <>
   <div>
      <p>{myNum}</p>
      <button onClick={()=>setMyNum(myNum+1)}>Increment</button>
      <button onClick={()=> (myNum>0? setMyNum(myNum-1):setMyNum(0)) }>Decrement</button>
   </div>
   </>
  )
}

export default UseState

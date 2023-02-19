import React, { useEffect, useState } from 'react'

const UseEffect = () => {

const [myNum,setMyNum]=useState(10);

useEffect(()=>{
      document.title=`Chats(${myNum})`
})

  return (
   <>
   <div>
      <p>{myNum}</p>
      <button onClick={()=>setMyNum(myNum+1)}>Increment</button>
      
   </div>
   </>
  )
}

export default UseEffect

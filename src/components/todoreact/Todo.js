import {UseState,React, useState} from 'react'

export default function Todo() {

const [inputData,setInputData]=useState("");
const [items,setItems]=useState([]);

const addItem=()=>{
  if(!inputData){
    alert("Please enter the value")
  }
  else{
    const myNewInputData={
       id: new Date().getTime().toString(),
       name:inputData,
    }
    setItems([...items,myNewInputData])
    setInputData("")
  }
}

const deleteItem=(index)=>{
  const updatedItems=items.filter((curElem)=>{
return curElem.id !==index;
  })
  setItems(updatedItems)
}


  return (
    <>
      <div className="container">

        <p>Add Your List Here</p>
        <input type="text" value={inputData} onChange={(event)=>{setInputData(event.target.value)}}/>
        <button onClick={addItem}>Add</button> <br /><br />
        <div>


  {items.map((curElem)=>{
    return (<>
<div key={curElem.id}>
    <p>{curElem.name}</p>
<button onClick={()=>{
  deleteItem(curElem.id)
}}>Delete</button>
        <button>Trash</button>
        </div>

        </>);
  })}



        </div>
        <br /><br />

        <button>CheckList (Remove all )</button>
      </div>

    </>
  )
}

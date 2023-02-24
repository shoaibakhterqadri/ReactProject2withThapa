import {UseState,React, useState,useEffect} from 'react'

const getLocalData=()=>{
  const lists= localStorage.getItem("mytodolist");

  if(lists){
    return JSON.parse(lists);
  }
  else{
    return [];
  }
}

export default function Todo() {

const [inputData,setInputData]=useState("");
const [items,setItems]=useState(getLocalData());
const [isEditItem,setIsEditItem]=useState("");
const [toggleButton,setToggleButton]=useState(false);


const addItem=()=>{
  if(!inputData){
    alert("Please enter the value")
  }
  else if(inputData && toggleButton){
    setItems(
      items.map((curElem)=>{
        if(curElem.id === isEditItem){
          return {...curElem,name:inputData};
        }
        return curElem;
      })
    )
    setInputData("")
setIsEditItem(null)
setToggleButton(false);
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


const editItem=(index)=>{
const item_todo_edited=items.find((curElem)=>{
  return curElem.id ===index;
});

setInputData(item_todo_edited.name)
setIsEditItem(index)
setToggleButton(true);
}


const deleteItem=(index)=>{
  const updatedItems=items.filter((curElem)=>{
return curElem.id !==index;
  })
  setItems(updatedItems)
}

 const removeAll=()=>{
  setItems([]);
 }


 useEffect(()=>{
  localStorage.setItem('mytodolist',JSON.stringify(items))
 },[items])


  return (
    <>
      <div className="container">

        <p>Add Your List Here</p>
        <input type="text" value={inputData} onChange={(event)=>{setInputData(event.target.value)}}/>
        {toggleButton?<button onClick={addItem}>Update</button>:<button onClick={addItem}>Add</button>}
         <br /><br />
        <div>


  {items.map((curElem)=>{
    return (<>
<div key={curElem.id}>
    <p>{curElem.name}</p>
<button onClick={()=>{
  deleteItem(curElem.id)
}}>Delete</button>


        <button onClick={()=>editItem(curElem.id)}>Edit</button>
        </div>

        </>);
  })}



        </div>
        <br /><br />

        <button onClick={removeAll}>CheckList (Remove all )</button>
      </div>

    </>
  )
}

import React, { useState } from 'react'
import Menu from '../MenuApi'
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList=[...new Set(
  Menu.map((curEle)=>{
return curEle.categery;
})
),
"All",
]

console.log(uniqueList);


function Restaurants() {
const [menuData,setMenuData]=useState(Menu);
const [menuList,setMenuList]=useState(uniqueList)

 const filterItem=(category)=>{

  if(category==="All"){
    setMenuData(Menu);
    return;
  }

  const updatedList=Menu.filter((curEle)=>{
return curEle.categery===category;
  });
  setMenuData(updatedList);
 };


  return (
   <>

<Navbar filterItem={filterItem} menuList={menuList}/>
   <MenuCard menuData={menuData}/>
   </>
  )
}

export default Restaurants

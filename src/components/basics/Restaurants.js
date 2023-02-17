import React, { useState } from 'react'
import Menu from '../MenuApi'
import MenuCard from './MenuCard';

function Restaurants() {
const [menuData,setMenuData]=useState(Menu);



  return (
   <>
   <MenuCard menuData={menuData}/>
   </>
  )
}

export default Restaurants

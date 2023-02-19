import React from 'react'

const Navbar = ({filterItem,menuList}) => {
  return (
    <>
       <ul className="nav justify-content-center my-3">

        {menuList.map((curElem)=>{
          return (
            <li className="nav-item">
            <a className="nav-link"  onClick={()=> filterItem(curElem)}>{curElem}</a>
          </li>
          )
        })}
    
      
    </ul>
    </>
  )
}

export default Navbar

import React from 'react'


function MenuCard(menuData) {
      console.log(menuData)
  return (
      <>
      <div class="card-group container">
     <div class="card">
       <img src="..." class="card-img-top" alt="..." />
       <div class="card-body">
         <h5 class="card-title">Card title</h5>
         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
       </div>
       <div class="card-footer">
         <small class="text-muted">Last updated 3 mins ago</small>
       </div>
     </div>
     <div class="card">
       <img src="" class="card-img-top" alt="..." />
       <div class="card-body">
         <h5 class="card-title">Card title</h5>
         <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
       </div>
       <div class="card-footer">
         <small class="text-muted">Last updated 3 mins ago</small>
       </div>
     </div>
   
   </div>
      </>
  )
}


export default MenuCard


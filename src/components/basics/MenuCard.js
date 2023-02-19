import React from 'react'


function MenuCard({menuData}) {
      // console.log(menuData)



  return (
      <>
{menuData.map((curElem)=>{

const {id,name,category,image,description,price}=curElem;

  return(
    <>
   <div className="card mb-3 container" style={{maxWidth: '540px'}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-muted">Price: {price} {id}</small></p>
            </div>
          </div>
        </div>
      </div>
   </>
  )
})}

  
      </>
  )
}


export default MenuCard


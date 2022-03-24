import React from 'react'

function Header({categories,activeCategory,setShowAddCategory,setActiveCategory,}) {
  return (
   
      <ul className='navbar navbar-expand flex-row w-100 list-unstyled'>
        <li className={`font-weight-bold p-3 nav-item ${!activeCategory ? "bg-warning" : ""}`}
         onClick={()=>setActiveCategory("")}>All</li>
           {categories.map((category,index)=>{
               return(
                 <li className={`p-3 nav-item ${
                  !activeCategory ? "bg-warning" : ""
                  }`}
                  key={index}
                  onClick={()=>setActiveCategory(category.name)}
                  >
                   {category.name}
                 </li>
               )
             })
           }
            <li className='font-weight-bold p-3 nav-item bg-info' onClick={()=>setShowAddCategory(true)}>
                +
            </li>
      </ul>
      // {/* <button onClick={()=>setShowAddCategory(true)}>Add Category</button> */}
    
  )
}

export default Header
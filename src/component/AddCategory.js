import React, { useState } from 'react'
import imageGas from './../img/gazAddcategory.jpg'
function AddCategory({setCategories,setShowAddCategory}) {
  const types=['income','expense'];
  const [name,setName]=useState('');
  const [selectedType,setSelectedType]=useState('income');

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!name){
      alert("Enter a category")
    return
    }
    const category={
      name,
      type:selectedType
    }
    setCategories((currentState)=>[...currentState,category]);
    setShowAddCategory(false);

  }

  return (
    <div className='container'>
          <div className='card'>
            <div className='card-body '>
              <h1>Enter a category for Transactions</h1>
              <p>
                E.g. 'Electricity' or 'Gas' or 'Salary' with type of 'income' or
                'expense'
              </p>
              <form
              className='form d-flex flex-row'
              onSubmit={handleSubmit}
              >
                <div className='form-group mb-2 w-50'>
                      <input 
                      className='form-control w-100'
                      value={name}
                      placeholder='Add Category'
                      onChange={(e)=>setName(e.target.value)}
                      />
                </div>
                <div
                className='form-group mx-sm-5 mb-2 w-25'
                >
                  <select
                  className='form-control mw-50'
                  value={selectedType}
                  onChange={(e)=>setSelectedType(e.target.value)}
                  >
                      {
                        types.map((type,index)=>{
                          return(
                            <option key={index} value={type}>
                                {type}
                            </option>
                          )
                        })
                      }
                  </select>
                  </div>

                      <button 
                      type='submit'
                      className='btn btn-primary mb-2 w-25'
                      > 
                      Submit
                      </button>
              </form>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
            <div className='img__category'></div>
            <img src={imageGas}/>
            </div>
          </div>
      AddCategory
    {/* <button onClick={()=>setShowAddCategory(false)}>return to main screen Window</button> */}
    </div>
  )
}

export default AddCategory
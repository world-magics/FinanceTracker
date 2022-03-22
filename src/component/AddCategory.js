import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
function AddCategory({setShowAddCategory,setCategories}) {
  const types=['income','expense'];
  const [name,setName]=useState("");
  const [selectedType,setSelectedType]=useState('income');

 const handleSubmit=(e)=>{
    e.preventDefault();
    if(!name){
      alert("Enter category");
      return;
    }
   
    const category={
      name,
      type:selectedType
    };  
    setCategories((currentState)=>[...currentState,category]);
    setShowAddCategory(false)
  }

  return (
    <div className='container'>
      <div className="row">
    <div className="col-md-12">
      <div className="card mt-5">
        <div className="card-body">
          <h1>Enter a category for transactions</h1>
          <p>E.g. 'Electricity' or 'Gas' or 'Salary' with type of 'income' or
            'expense'
          </p>
        <form 
          className='d-flex my-5'
          onSubmit={handleSubmit}
          >
            <div className="form-group mb-2 text-color-blue w-50">
                <input 
                type="text" 
                className='form-control'
                value={name}
                placeholder='Add category'
                onChange={(e)=>setName(e.target.value)}
                />
            </div>
            <div className="form-group mx-3 mb-2 w-25">
              <select             
              className='form-control'
              value={selectedType}
              onChange={(e)=>setSelectedType(e.target.value)}
              >
                {types.map((type,index)=>{
                  return(
                    <option  key={index} value={type}>
                      {type}
                    </option>
                  )
                })}           
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
    </div>
      </div>

    <h1>Add Category Component </h1>

    <button className='btn btn-outline-info' onClick={()=>setShowAddCategory(false)}>
        Return to main screen
    </button>
    </div>
  )
}

export default AddCategory
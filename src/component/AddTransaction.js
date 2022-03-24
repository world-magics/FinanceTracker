import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function AddTransaction({categories,setTransactions,setShowAddTransaction}) {
  const [amount,setAmount]=useState(0)
  const [selectedDate,setSelectDate]=useState(new Date());
  const [selectCategory,setSelectCategory]=useState(0);

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!amount){
      alert("Enter amount");
      return;
    }
    const finance={
      date:selectedDate,
      category:categories[selectCategory],
      amount:amount
    }
    setTransactions((currentState)=>[...currentState,finance]);
    setShowAddTransaction(false);
  }
  return (
    <div className='container'>
      <div className='card'>
          <div className='card-body'>
            <h1 className='text-center text-align-center '>Enter a new transactions</h1>
            <p className='text-align-center'>Enter the date, amount and category of the transaction</p>
            <form className='form d-flex flex-row' onSubmit={handleSubmit}>
                <div className='form-group mb-2'>
                  <DatePicker
                  className='form-control'
                  selected={selectedDate}
                  onChange={(date)=>setSelectDate(date)}
                  />
                </div>
          <div className='form-group mx-sm-3 mb-2'>
            <select 
            className='form-control'
            value={selectCategory}
            onChange={(e)=>setSelectCategory(e.target.value)}
            >
              {
                categories.map((category,index)=>{
                  return(
                    <option key={index} value={index}>
                          {category.name}
                    </option>
                  )
                })
              }
            </select>
          </div>
          <div className='form-group mr-3 mb-2'>
                <input 
                className='form-control'
                value={amount}
                placeholder="Set Amount"
                onChange={(e)=>setAmount(e.target.value)}
                />
          </div>
          <button className='btn btn-primary mb-2' type='submit'>
            Add
          </button>
            </form>
          </div>
      </div>
        <button className='btn btn-primary' onClick={()=>setShowAddTransaction(false)}>Add Transaction</button>
   </div>
  )
}

export default AddTransaction
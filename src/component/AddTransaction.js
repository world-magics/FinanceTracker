import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
function AddTransaction({categories,setTransactions,setShowAddTransaction}) {
    
    const [amount,setAmount]=useState(0);
    const [selectedDate,setSelectedDate]=useState(new Date());
    const [selectedCategory,setSelectedCategory]=useState(0);

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!amount){
            alert("Enter amount");
            return;
        }
        const finance={
            date:selectedDate,
            category:categories[selectedCategory],
            amount:amount
        }
        setTransactions((currentState)=>[...currentState,finance]);
        setShowAddTransaction(false)
    }

    return (
    <div className='container'>
        <div className="card">
            <div className="card-body">
                <h1>Enter a new transaction</h1>
                <p>Enter the date, amount and category of the transaction</p>
                <form 
                className='form d-flex'
                onSubmit={handleSubmit}
                >
                    <div className="form-group mb-2">
                       <DatePicker
                       className='form-control'
                       selected={selectedDate}
                       onChange={(date)=>setSelectedDate(date)}
                   />

                    </div>
                    <div className="form-group mb-2 mx-sm-3">
                        <select 
                        className='form-control'
                        value={selectedCategory}
                        onChange={(e)=>setSelectedCategory(e.target.value)}
                        >
                        {categories.map((category,index)=>{
                            return(
                                <option 
                                key={index}
                                value={index}
                                >
                                    {category.name}
                                </option>
                            )
                        })}

                        </select>
                    </div>
                    <div className="form-group mr-3 mb-2">
                        <input 
                        type="text"
                        className='form-control'
                        value={amount}
                        placeholder="Set amount"
                        onChange={(e)=>setAmount(e.target.value)}
                        />
                    </div>
                    <button className='btn btn-primary mb-2 mx-2'>
                        Add
                    </button>
                </form>
            </div>
        </div>
        <h1>AddTransactionComponent</h1>
        <button className='btn btn-outline-danger' onClick={()=>setShowAddTransaction(false)}>
            Return to main screen
        </button> 
    </div>
  )
}

export default AddTransaction
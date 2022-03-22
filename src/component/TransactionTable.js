import React from 'react'
import Chart from './Chart';
import Header from './Header';
import {format} from 'date-fns'
import 'react-datepicker/dist/react-datepicker.css'

function TransactionTable({setShowAddTransaction,transactions,removeTransaction}) {
    
        return (
            <table className='table table-striped border'>
                <thead className='bg-primary'>
                    <tr>
                        <th scope='col'>Date</th>
                        <th scope='col'>Amount</th>
                        <th scope='col'>Category</th>
                        <th scope='col'></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='p-4 bg-blue-200 text-center'>
                        <td colSpan={4}>
                            <button 
                            className='btn btn-success'
                            onClick={()=>setShowAddTransaction(true)}
                            >
                                Add new transaction
                            </button>
                        </td>
                    </tr>
                    {transactions.map((transaction,index)=>{
                            return (
                                <tr key={index} className='p-4' >
                                        <td>{format(transaction.date, "MMM d yyyy")}</td>
                                        <td>${transaction.amount}</td>
                                        <td>{transaction.category.name}</td>
                                        <td>
                                            <button 
                                            className='btn btn-danger'
                                            onClick={()=>removeTransaction(index)}
                                            >X</button>
                                        </td>
                                </tr>
                            )
                    })}
                </tbody>            
           <h1>TransactionTable Component </h1>
           <button  className='btn btn-outline-danger' onClick={()=>setShowAddTransaction(true)}>
               Add new Transaction  T
            </button>
            </table>
    );
}

export default TransactionTable
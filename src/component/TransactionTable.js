import React from 'react'
import {format} from 'date-fns'
function TransactionTable({transactions,setShowAddTransaction,removeTransaction}) {
  return (
    <table className='table table-striped border'>
        <thead className='bg-primary'>
          <tr>
          <th scope="col">Date</th>
          <th scope="col">Amount</th>
          <th scope="col">Category</th>
          <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr className='p-4 bg-blue-200  text-center'>
              <td colSpan="4">
                    <button 
                    className='btn btn-success'
                    onClick={()=>setShowAddTransaction(true)}
                    >
                      Add new Transaction
                    </button>
              </td>
          </tr>
          {
            transactions.map((transactions,index)=>{
              return(
                <tr className='p-4' key={index}>
                  <td>{format(transactions.date, "MMM d yyyy")}</td>
                  <td>${transactions.amount}</td>
                  <td>{transactions.category.name}</td>
                  <td>
                    <button
                    className='btn btn-danger'
                    onClick={()=>removeTransaction(index)}
                    >X</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
        {/* <button onClick={()=>setShowAddTransaction(true)}>Add Transaction</button> */}
    </table>
  )
}

export default TransactionTable
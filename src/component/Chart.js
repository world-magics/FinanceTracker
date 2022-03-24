import { isThisYear,format } from 'date-fns';
import React from 'react'
import {Bar} from 'react-chartjs-2'

function Chart({transactions}) {
  const processTransactions=(transactions,type)=>{
    const monthWidthTxs=new Array(12).fill(0);

    for(const transaction of transactions){
        if(!isThisYear(transaction.date)){
          continue;
        }
        if(transaction.category.type !==type){
          continue;
        }
        const monthName=format(transaction.date,"MMMM");
        const indexOfMonth=labels.indexOf(monthName);
        monthWidthTxs[indexOfMonth]+=Number(transaction.amount);

    }
    return monthWidthTxs;
  }
const labels=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"      
  ]
  const ChartData={
    labels,
    datasets:[
      {
        label:"Income",
        backgroundColor:'lightblue',
        data:processTransactions(transactions,"income")
      },
      {
        label:"Expense",
        backgroundColor:"lightcoral",
        data:processTransactions(transactions,"expense")
      }

    ]
  }

  return (
    <Bar
    data={ChartData}
    options={{
      title:{
        display:true,
        text:"Your financial data",
        fontSize:20
      },
      legend:{
        display:true,
        position:'right'
      }
    }}
    />
  )
}

export default Chart
import React from "react";
import { Bar } from "react-chartjs-2"
import { isThisYear, format } from "date-fns";
export default function Chart({ transactions }) {
  const labels = [
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
  ];

  const processTransactions = (transactions, type) => {
    const monthsWithTxs = new Array(12).fill(0);

    for (const transaction of transactions) {
      if (!isThisYear(transaction.date)) {
        continue;
      }
      if (transaction.category.type !== type) {
        continue;
      }
      const monthName = format(transaction.date, "MMMM");
      const indexOfMonth = labels.indexOf(monthName);
      monthsWithTxs[indexOfMonth] += Number(transaction.amount);
    }

    return monthsWithTxs;
  };

  const chartData = {
    labels,
    datasets: [
      {
        label: "Income",
        backgroundColor: "lightblue",
        data: processTransactions(transactions, "income"),
        // data:[45,21,26,59,36]
      },
      {
        label: "Expense",
        backgroundColor: "lightcoral",
        data: processTransactions(transactions, "expense")
      
        // data:[15,78,59,122,41]
      }
    ]
  };

  return (
    <Bar
      data={chartData}
      options={{
        title: {
          display: true,
          text: "Your financial data",
          fontSize: 20
        },
        legend: {
          display: true,
          position: "right"
        }
      }}
    />
  );
}

import React,{useState} from 'react';
import './App.css';
import AddCategory from './component/AddCategory';
import AddTransaction from './component/AddTransaction';
import Chart from './component/Chart';
import Header from './component/Header';
import TransactionTable from './component/TransactionTable';
import './component/bootstrap.min.css';

function App() {
  const [showAddCategory,setShowAddCategory]=useState(true);
  const [showAddTransaction,setShowAddTransaction]=useState(false);
  const [categories,setCategories]=useState([])
  const [transactions,setTransactions]=useState([])

  // const [name,setName]=useState('Sherdwdzod')
  

  if (showAddCategory) {
    return <AddCategory 
    setCategories={setCategories}
    setShowAddCategory={setShowAddCategory}
     />;
  }
  if (showAddTransaction) {
    return <AddTransaction 
    categories={categories}
    setTransactions={setTransactions}
    setShowAddTransaction={setShowAddTransaction}

    
    />;
  } 

  const removeTransaction=(index)=>{
      const newTransactions=transactions.filter((transactions,idx)=>{
        return idx !==index;
      });
      setTransactions(newTransactions)
  }

  return (
    <div className="container">
      <div className='row'>
            <div className='col-md-12'>
        <Header 
        categories={categories}
        setShowAddCategory={setShowAddCategory}
        />

            </div>
          {/* {name} */}
     
      </div>
      <div className='row'>
        <div className='col-md-6'>
          <TransactionTable 
          setShowAddTransaction={setShowAddTransaction}
          removeTransaction={removeTransaction}
          transactions={transactions}          
          />
        </div>
        <div className='col-md-6'>
          <Chart
          transactions={transactions}
          />
        </div>
      </div>
         
         
     
    </div>
  );

}

export default App;

import React,{useState} from 'react'
import AddCategory from './component/AddCategory'
import Header from './component/Header'
import Chart from './component/Chart'
import TransactionTable from './component/TransactionTable'
import AddTransaction from './component/AddTransaction'
import './App.css'
function App() {
    const [showAddCategory,setShowAddCategory]=useState(true);
    const [showAddTransaction,setShowAddTransaction]=useState(false);
    const [categories,setCategories]=useState([]);
    const [transactions,setTransactions]=useState([]);
    const [activeCategory,setActiveCategory]=useState("");
    if(showAddCategory){
      return(
        <AddCategory 
        setCategories={setCategories}
        setShowAddCategory={setShowAddCategory}
        />
      ) 
    }
    if(showAddTransaction){
      return(
        <AddTransaction 
        categories={categories}        
        setTransactions={setTransactions}
        setShowAddTransaction={setShowAddTransaction}

        />
        ) 
    }
    const removeTransaction=(index)=>{
          const newTransaction=transactions.filter((transactions,idx)=>{
            return idx!==index;
          });
          setTransactions(newTransaction)
    }
    const filterTransaction =()=>{
        return transactions.filter((transactions)=>
        activeCategory ? transactions.category.name===activeCategory : true
        ).sort((a,b)=>(new Date(a.date)<new Date(b.date) ? 1:-1))
    };
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
      <Header 
      activeCategory={activeCategory}
      setActiveCategory={setActiveCategory}
      categories={categories}
      setShowAddCategory={setShowAddCategory}
      />
       </div>
      </div>
      <div className='row'>
        <div className='col-md-6'>
        <TransactionTable 
        transactions={filterTransaction(transactions)}
        setShowAddTransaction={setShowAddTransaction}
        removeTransaction={removeTransaction}
        />
    
       </div>
       <div className='col-md-6'>
       <Chart 
       transactions={filterTransaction(transactions)}
       />
       </div>
      </div>
      
     
    </div>
  )
}

export default App
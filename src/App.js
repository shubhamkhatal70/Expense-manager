import {useState} from 'react';
import NewExpense from './components/NewExpenses/NewExpense';
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: "2000",
    date: new Date(2020, 2, 16),
  },
  {
    id: "e2",
    title: "life Insurance",
    amount: "4000",
    date: new Date(2020, 3, 15),
  },
  {
    id: "e3",
    title: "food",
    amount: "3000",
    date: new Date(2021, 4, 14),
  },
  { id: "e4", 
  title: "cloths", 
  amount: "1000",
   date: new Date(2021, 5, 13) 
  },
];

const App =()=> {
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense)=> {
   setExpenses((prevExpenses) => {return [expense, ...prevExpenses]});
  };

  return (
    <div>
    <NewExpense onAddExpense={addExpenseHandler}/>
    <Expenses items = {expenses}/>
    </div>
  );
}

export default App;

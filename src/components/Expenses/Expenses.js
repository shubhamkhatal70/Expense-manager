import {useState} from 'react';
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from '../UI/Card';
import ExpensesChart from './ExpensesChart';
import "./Expenses.css" ;

const Expenses =(props)=> {
  const [filteredYear,setFilteredYearr] = useState('2021');
  const filterChangeHandler = (selectedYear) =>{
    setFilteredYearr(selectedYear);
  };
  
  const filteredExpenses = props.items.filter( expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
    </div>
  );
}
export default Expenses;

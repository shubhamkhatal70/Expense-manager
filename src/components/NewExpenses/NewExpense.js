
import {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) =>{
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler =(enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const isEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };
    
    return(
        <div className='new-expense'>
            {!isEditing && <button onClick={isEditingHandler}>Add new expense</button>}
            {isEditing && <ExpenseForm stopEdit={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler}/>}
        </div>
    );
};

export default NewExpense;
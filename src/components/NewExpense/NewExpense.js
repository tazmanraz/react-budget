import React from 'react'
import ExpenseForm from './ExpenseForm'

import './NewExpense.css'
const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    //console.log(expenseData);
    props.onAddExpense(expenseData) // Sends to parent App.js
  }
  
  return (
    <div className='new-expense'>
      <ExpenseForm 
        onSaveExpenseData={onSaveExpenseDataHandler}
      />
    </div>
  )
}

export default NewExpense;
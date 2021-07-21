import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css'


function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2021')

  const filterChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(el => el.date.getFullYear().toString() === filteredYear)

  // Alternatively, you can use this instead of ternary
  // let expensesContent = <p>No expenses found</p>

  // if (filteredExpenses.length > 0 ) {
  //   filteredExpenses.map(expense => <ExpenseItem 
  //     key={expense.id}
  //     title={expense.title} 
  //     amount={expense.amount}
  //     date={expense.date}
  //   />)}

  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {/* {filteredExpenses.length === 0 ? <p>No expenses found</p>:
      filteredExpenses.map(expense => <ExpenseItem 
        key={expense.id}
        title={expense.title} 
        amount={expense.amount}
        date={expense.date}
      />)} */}
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses}/>


    </Card>
    </div>
  )
}

export default Expenses
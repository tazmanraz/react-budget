import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
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
      {filteredExpenses.length === 0 ? <p>No expenses found</p>:
      filteredExpenses.map(expense => <ExpenseItem 
        key={expense.id}
        title={expense.title} 
        amount={expense.amount}
        date={expense.date}
      />)}
{/* This is coded out to favour the above method which renders whole list dynamically */}
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}
    </Card>
    </div>
  )
}

export default Expenses
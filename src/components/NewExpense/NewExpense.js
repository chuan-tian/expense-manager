import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };

    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  const newExpenseHandler = () => {
    setShowForm(true);
  };

  const cancelHandler = () => {
    setShowForm(false);
  }

  return (
    <div className="new-expense">
      {!showForm && <button onClick={newExpenseHandler}>Add New Expense</button>}
      {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelHandler} />}
    </div>
  );
}

export default NewExpense;

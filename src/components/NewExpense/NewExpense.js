import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
    const [formVisibility, setFormVisibility] = useState(false)

    const expenseAddHandler = () => {
        setFormVisibility(true)
    }

    const cancelHandler = () => {
        setFormVisibility(false)
    }

    const saveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setFormVisibility(false)
    }
    return (
        <div className="new-expense">
            {!formVisibility && <button onClick={expenseAddHandler}>Add Expense</button>}
            {formVisibility && <ExpenseForm onSaveExpenseData={saveExpenseData} onCancel={cancelHandler} />}
        </div>
    );
}

export default NewExpense;
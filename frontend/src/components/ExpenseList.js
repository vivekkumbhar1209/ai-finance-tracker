import React from 'react';

function ExpenseList({ expenses, deleteExpense }) {
  return (
    <div>
      <h2>Expenses</h2>
      {expenses.map((exp) => (
        <div key={exp.id}>
          <span>{exp.description} - ${exp.amount} - {exp.category} - {exp.date}</span>
          <button onClick={() => deleteExpense(exp.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;

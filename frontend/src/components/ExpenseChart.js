import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function ExpenseChart({ expenses }) {
  const chartRef = useRef();

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const categories = [...new Set(expenses.map(e => e.category))];
    const data = categories.map(cat => expenses.filter(e => e.category === cat).reduce((sum, exp) => sum + parseFloat(exp.amount), 0));

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: categories,
        datasets: [{
          label: 'Expenses by Category',
          data: data,
          backgroundColor: 'rgba(75,192,192,0.6)',
        }]
      }
    });
  }, [expenses]);

  return <canvas ref={chartRef}></canvas>;
}

export default ExpenseChart;

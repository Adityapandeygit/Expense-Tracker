import React from 'react'
import CustomPieChart from '../Charts/CustomPieChart';
const COLORS = ["#875CF5","#FA2C37","#FF6900"];

const FinanceOverview = ({ totalBalance, totalIncome, totalExpense }) => {
  // Safely extract values from nested array
  const incomeTotal = Array.isArray(totalIncome) ? totalIncome[0]?.total || 0 : totalIncome;
  const expenseTotal = Array.isArray(totalExpense) ? totalExpense[0]?.total || 0 : totalExpense;

  const balanceData = [
    { name: "Total Balance", amount: totalBalance || 0 },
    { name: "Total Expense", amount: expenseTotal },
    { name: "Total Income", amount: incomeTotal },
  ];

  // console.log("balanceData for chart:", balanceData);

  return (
    <div className='card'>
      <div className='flex items-center justify-between'>
        <h5 className='text-lg'>Financial Overview</h5>
      </div>

      <CustomPieChart 
        data={balanceData}
        label="Total Balance"
        totalAmount={`$${totalBalance}`}
        colors={COLORS}
        showTextAnchor
      />
    </div>
  );
};

export default FinanceOverview;

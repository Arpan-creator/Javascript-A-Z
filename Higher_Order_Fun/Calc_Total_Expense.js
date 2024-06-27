
// Input
const expenses = [
    { name: "Food", amount: 50 },
    { name: "Transportation", amount: 30 },
    { name: "Internet", amount: 45 },
    { name: "Groceries", amount: 80 }
  ];
  
  function calculateTotalExpenses(expenses){
    return expenses.reduce((accu,expenses)=>accu+expenses.amount,0);
  }
  // Output
  const totalExpenses = calculateTotalExpenses(expenses);
  console.log(totalExpenses); // Output should be: 205
  
  
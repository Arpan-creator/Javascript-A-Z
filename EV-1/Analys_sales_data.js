const salesData = [
    { saleId: 1, productId: 101, productName: 'Laptop', category: 'Electronics', price: 899.99, quantity: 1, date: '2023-01-15', customer: 'Alice' },
    { saleId: 2, productId: 102, productName: 'Smartphone', category: 'Electronics', price: 699.50, quantity: 0, date: '2023-01-20', customer: 'Bob' },
    { saleId: 3, productId: 103, productName: 'Tablet', category: 'Electronics', price: 299.75, quantity: 2, date: '2023-02-05', customer: 'Charlie' },
    { saleId: 4, productId: 104, productName: 'Book', category: 'Books', price: 19.99, quantity: 5, date: '2023-02-12', customer: 'David' },
    { saleId: 5, productId: 105, productName: 'Headphones', category: 'Electronics', price: 99.99, quantity: 3, date: '2023-03-01', customer: 'Alice' },
    { saleId: 6, productId: 106, productName: 'Novel', category: 'Books', price: 14.95, quantity: 10, date: '2023-03-15', customer: 'Eve' }
  ];
  
  //  Filter out sales where quantity is zero
  const filteredSales = salesData.filter(sale => sale.quantity > 0);
  
  //Transform the data by calculating total revenue and converting date to Date object
  const transformedSales = filteredSales.map(sale => ({
    ...sale,
    totalRevenue: sale.price * sale.quantity,
    date: new Date(sale.date) // Convert date string to JavaScript Date object
  }));
  
  //  Analyze performance by grouping sales data by category
  const categoryPerformance = transformedSales.reduce((acc, sale) => {
    if (!acc[sale.category]) {
      acc[sale.category] = {
        totalRevenue: 0,
        totalQuantity: 0
      };
    }
    acc[sale.category].totalRevenue += sale.totalRevenue;
    acc[sale.category].totalQuantity += sale.quantity;
    return acc;
  }, {});
  
  //  Analyze monthly sales trend
  const monthlySalesTrend = transformedSales.reduce((acc, sale) => {
    const month = sale.date.getMonth() + 1; // Month index (0-11) + 1 for 1-12
    const year = sale.date.getFullYear();
    const monthYearKey = `${year}-${month.toString().padStart(2, '0')}`; // Format: 'YYYY-MM'
    
    if (!acc[monthYearKey]) {
      acc[monthYearKey] = 0;
    }
    acc[monthYearKey] += sale.totalRevenue;
    return acc;
  }, {});
  
  //Identify top 3 customers based on total revenue and calculate average purchase value
  const customerTotalRevenue = transformedSales.reduce((acc, sale) => {
    if (!acc[sale.customer]) {
      acc[sale.customer] = {
        totalRevenue: 0,
        numberOfPurchases: 0
      };
    }
    acc[sale.customer].totalRevenue += sale.totalRevenue;
    acc[sale.customer].numberOfPurchases++;
    return acc;
  }, {});
  
  // Sorting customers by total revenue in descending order
  const topCustomers = Object.keys(customerTotalRevenue)
    .sort((a, b) => customerTotalRevenue[b].totalRevenue - customerTotalRevenue[a].totalRevenue)
    .slice(0, 3); // Get top 3 customers
  
  // Calculate average purchase value for top customers
  const topCustomersAvgPurchase = topCustomers.map(customer => ({
    customer,
    totalRevenue: customerTotalRevenue[customer].totalRevenue,
    averagePurchaseValue: customerTotalRevenue[customer].totalRevenue / customerTotalRevenue[customer].numberOfPurchases
  }));
  
  
  console.log("Filtered and transformed sales data:");
  console.log(transformedSales);
  console.log("\nPerformance analysis by category:");
  console.log(categoryPerformance);
  console.log("\nMonthly sales trend:");
  console.log(monthlySalesTrend);
  console.log("\nTop 3 customers with average purchase value:");
  console.log(topCustomersAvgPurchase);
  
const products = [
    { name: "Laptop", category: "Electronics", price: 1200, quantity: 10, available: true },
    { name: "Chair", category: "Furniture", price: 100, quantity: 20, available: true },
    { name: "Shirt", category: "Clothing", price: 30, quantity: 50, available: false },
    { name: "Book", category: "Books", price: 20, quantity: 100, available: true }
];

// Function to filter products based on criteria
function filterProducts(products, criteria) {
    return products.filter(criteria);
}

// Function to sort products based on a key
function sortProducts(products, key, ascending = true) {
    return products.sort((a, b) => ascending ? a[key] - b[key] : b[key] - a[key]);
}

// Function to calculate total value for each product
function calculateTotalValue(products) {
    return products.map(product => ({
        ...product,
        totalValue: product.price * product.quantity
    }));
}

// Function to generate inventory report
function generateReport(products) {
    const totalProducts = products.length;
    const totalValue = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
    const avgPrice = totalValue / totalProducts;
    const categoryDistribution = products.reduce((acc, product) => {
        acc[product.category] = (acc[product.category] || 0) + 1;
        return acc;
    }, {});

    return {
        totalProducts,
        totalValue,
        avgPrice,
        categoryDistribution
    };
}

// Example criteria function to filter by category and availability
function criteriaExample(product) {
    return product.category === "Electronics" && product.available === true;
}

// Filtering products
const filteredProducts = filterProducts(products, criteriaExample);
console.log("Filtered Products:");
console.log(filteredProducts);

// Sorting products by price
const sortedProductsByPrice = sortProducts([...products], "price");
console.log("Sorted Products by Price:");
console.log(sortedProductsByPrice);

// Calculating total value per product
const productsWithTotalValue = calculateTotalValue(products);
console.log("Products with Total Value:");
console.log(productsWithTotalValue);

// Generating inventory report
const inventoryReport = generateReport(products);
console.log("Inventory Report:");
console.log(inventoryReport);

const reviews = [
    { productId: 1, category: 'Electronics', rating: 4.5, comment: 'Excellent!' },
    { productId: 2, category: 'Books', rating: 3.8, comment: 'Good read' },
    { productId: 3, category: 'Electronics', rating: 4.0, comment: 'Very good' },
    { productId: 4, category: 'Books', rating: 4.2, comment: 'Interesting' },
    { productId: 5, category: 'Electronics', rating: 3.5, comment: 'Decent' }
  ];
  
  
  const groupedReviews = reviews.reduce((acc, review) => {
    const { category, rating } = review;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(rating);
    return acc;
  }, {});
  
  const averageRatingByCategory = Object.keys(groupedReviews).reduce((acc, category) => {
    const ratings = groupedReviews[category];
    const averageRating = ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length;
    acc[category] = averageRating;
    return acc;
  }, {});
  
  console.log(averageRatingByCategory);
  
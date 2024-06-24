
const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, genre: "Fiction", rating: 4.2 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, genre: "Fiction", rating: 4.8 },
    { title: "1984", author: "George Orwell", year: 1949, genre: "Dystopian", rating: 4.4 },
    { title: "A Brief History of Time", author: "Stephen Hawking", year: 1988, genre: "Science", rating: 4.1 }
  ];
  
  const newBook = { title: "The Road", author: "Cormac McCarthy", year: 2006, genre: "Post-Apocalyptic", rating: 4.3 };
  const bookUpdates = { year: 2007, rating: 4.5 };
  const searchQuery = "mockingbird";
  const genreFilter = "Fiction";
  const ratingThreshold = 4.3;

//Add a new Book
const addBook =(books,newBooks)=>{
  return [...books, newBook]
}

const updateBooks=addBook(books,newBook);
console.log("After adding new book:",updateBooks);

//Remove a Book by Title
const removeBookByTitle = (books,title)=>{
  return books.filter(book=>book.title.toLowerCase()!==title.toLowerCase());
}

const booksAfterRemoval=removeBookByTitle(updateBooks,"1984");
console.log("After removing '1984':" ,booksAfterRemoval);

//Update a Book Details
const updateBook =(books,title,bookUpdates) =>{
  return books.map(book=>
    book.title.toLowerCase()===title.toLowerCase()?{...book,...bookUpdates}:book);  
}

const booksAfterUpdate=updateBook(booksAfterRemoval, "The Great Gastby",bookUpdates);
console.log("After updating 'The Great Gatsby':",booksAfterUpdate)

//Search book by title or Author(Case-Insensitive)
const searchBooks =(books,query)=>{
  query =query.toLowerCase();
  return books.filter(book=>book.title.toLowerCase().includes(query)|| book.author.toLowerCase().includes(query));
}



//Filter Books by Genre
const filterBooksByGenre=(books,genre)=>{
  return books.filter(book=>book.genre.toLowerCase()===genre.toLowerCase());
}

const filteredBooksByGenre = filterBooksByGenre(booksAfterUpdate,genreFilter);
console.log("Filtered books by genre 'Fiction':", filteredBooksByGenre)

//Sort Books by year, title or rating
const sortBooks=(books,sortBy)=>{
  return[...books].sort((a,b)=>{
    if(sortBy==='year'){
      return a.year-b.year;
    }
    else if(sortBy==='title'){
      return a.title.localCompare(b.title)
    }
    else if(sortBy ==='rating'){
      return b.rating -a.rating;
    }
    return 0;
  });
}
//By year
const booksSortedByYear = sortBooks(booksAfterUpdate,'year');
console.log("Books sortted by year:",booksSortedByYear);

//sort by rating
const booksSortedByRating = sortBooks(booksAfterUpdate,'rating');
console.log("Books sorted by rating:",booksSortedByRating);

//List Books with Ratings Above a certain Threshold
const listBooksAboveRating=(books,threshold)=>{
  return books.filter(book=>book.rating>threshold);
};

const booksAboveThreshold=listBooksAboveRating(booksAfterUpdate,ratingThreshold);
console.log("Books above rating threshold (4.3",booksAboveThreshold);


  
  
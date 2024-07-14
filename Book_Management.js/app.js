import {Books} from './books_arr.js'

const BookSummaries= Books.map(book=>book.getSummary());
console.log(BookSummaries)
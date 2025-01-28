import { useEffect, useState } from "react"
import Book from "../Book/Book";


const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        fetch('./booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
  return (
    <div>
        <h2 className="font-extrabold text-4xl text-center">Books</h2>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
    {
        books.map(book => <Book key={book.bookId} book={book}></Book>)
    }
    </div>
    </div>
  )
}

export default Books
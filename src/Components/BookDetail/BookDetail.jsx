import { useParams } from "react-router-dom"


const BookDetail = () => {
const {bookId} = useParams()
console.log(bookId);
  return (
    <div>BookDetail </div>
  )
}

export default BookDetail
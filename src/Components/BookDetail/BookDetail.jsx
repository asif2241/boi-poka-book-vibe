import { useLoaderData, useParams } from "react-router-dom"
import { addToReadList } from "../../utilities/addToDd";


const BookDetail = () => {
  const { bookId } = useParams()

  const id = parseInt(bookId);


  const data = useLoaderData();

console.log(Array.isArray(data));

  const book = data.find(book => book.bookId === id);



  const { image, tags, yearOfPublishing, publisher, author, bookName, rating, category, review,totalPages } = book;

  // add to read list function
  const handleAddToReadList =(id)=>{
      addToReadList(id)
  }
  return (
    <div className="hero bg-base-200 my-4">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">{bookName}</h1>
          <p>By:  {author}</p>
          <div className="divider"></div>
          <p className="font-bold text-2xl text-green-700">{category}</p>
          <div className="divider"></div>
          <p className="my-4">
            <span className="font-bold">Riview:</span> {review}
          </p>

          <p>
            <span>Tags:</span> {tags.map((tag, idx) => <button key={idx} className="btn btn-soft btn-accent">{tag}</button>
            )}
          </p>
          <div className="divider"></div>

          <div>
            <p><span className="text-gray-400">Number of Pages:</span> <span className="ml-5 font-bold">{totalPages}</span></p>
            <p><span className="text-gray-400">Publisher:</span> <span className="ml-5 font-bold">{publisher}</span></p>
            <p><span className="text-gray-400">Year of Publishing:</span> <span className="ml-5 font-bold">{yearOfPublishing}</span></p>
            <p><span className="text-gray-400">Rating:</span> <span className="ml-5 font-bold">{rating}</span></p>
          </div>
          {/* btn */}
          <div className="flex gap-5 my-3">
          <button onClick={()=>handleAddToReadList(id)} className="btn btn-outline btn-accent">Add To Read</button>
          <button className="btn btn-outline btn-accent">Wishlist</button>
          </div>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookDetail
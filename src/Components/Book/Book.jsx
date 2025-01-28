import { Link } from "react-router-dom"


const Book = ({ book }) => {
    const { bookId, bookName, tags, author, image, review, totalPages, rating, category, publisher, yearOfPublishing } = book
    return (
<Link to={`books/${bookId}`}>
<div className="card shadow-sm p-8">
            <figure className="bg-gray-200 py-8 rounded-2xl">
                <img className="h-40"
                    src={image}
                    alt={image} />
            </figure>
            <div className="card-body">
                <div className="flex items-center gap-3">
                    {
                        tags.map((tag, idx) => <button key={idx} className="btn btn-soft btn-accent">{tag}</button>
                        )
                    }
                </div>
                <h2 className="card-title">
                    {bookName}

                </h2>
                <p>By: {author}</p>
                <p>Total Pages: {totalPages}</p>
                <div className="border-t-2 border-dashed"></div>



                <div className="card-actions flex justify-between mt-2">
                    <div>{category}</div>
                    <div>    
                          <div className="badge badge-outline mr-1.5">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                        </div>
                </div>
            </div>
        </div>
</Link>
    )
}

export default Book
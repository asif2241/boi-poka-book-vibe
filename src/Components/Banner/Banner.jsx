import bannerImg from "../../assets/books.jpg"

const Banner = () => {
  return (
    <div className="hero bg-base-200 my-10 p-15 rounded-2xl  ">
  <div className="hero-content flex-col lg:flex-row-reverse w-full justify-around">
    <img
      src={bannerImg}
      className=" max-w-[318px] h-72 rounded-lg shadow-2xl" />
    <div className="space-y-10">
      <h1 className="text-5xl font-bold">Books to freshen <br /> up your bookshelf</h1>
      
      <button className="btn btn-primary">view the latest</button>
    </div>
  </div>
</div>
  )
}

export default Banner
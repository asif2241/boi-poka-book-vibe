import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredList } from '../../utilities/addToDd';
import Book from '../Book/Book';

const ListedBook = () => {
  const [readlist, setReadList] = useState([]);
  const [sort, setSort] = useState(' ');
  const allbooks = useLoaderData();

  useEffect(() => {
    const storedReadList = getStoredList();
    // const storedReadListInt = storedReadList.map(id => parseInt(id))
    // console.log(typeof storedReadList[0], typeof storedReadListInt[0]);

    const readBookList = allbooks.filter(book => storedReadList.includes(book.bookId));
    setReadList(readBookList)

  }, [allbooks])

  const handleSort = sortType =>{
    setSort(sortType);
    if(sortType == 'pages'){
      const sortedList = [...readlist].sort((a,b)=> a.totalPages - b.totalPages)
      setReadList(sortedList)
    }
  }
  return (
    <div>
      <div>
        <h2 className="font-bold text-3xl text-center bg-amber-100 py-5 rounded-4xl my-10">Books</h2>
        <br />
        <Tabs>
          <TabList>
            <Tab>Title 1</Tab>
            <Tab>Title 2</Tab>
          </TabList>

          <TabPanel>
            <h2>Readlist: {readlist.length}</h2>
            <div className='my-5'>
              <details className="dropdown">
                <summary className="btn m-1">{sort? `Sort By:${sort}`: 'Sort By'}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                  <li onClick={()=> handleSort('ratings')}><a>Ratings</a></li>
                  <li onClick={()=> handleSort('pages')}><a>Number of Pages</a></li>
                </ul>
              </details>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
              {
                readlist.map(book => <Book key={book.bookId} book={book}></Book>)
              }
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Wishlist</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}

export default ListedBook
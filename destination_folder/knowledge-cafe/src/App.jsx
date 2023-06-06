import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Header from './Components/Header/Header'
import Product from './Components/Product/Product'
import ReadTime from './Components/ReadTime/ReadTime'
import BookmarkedLists from './Components/BookmarkedLists/BookmarkedLists'
import Question from './Components/Question/Question';

function App() {

  // react toastify
  const notify = () => toast('You have already added this!!!');

  // user data initial fetch
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setUserData(data))
  }, []);


  // set to local storage blog descriptions
  const [zz, setzz] = useState([])
  const addBookmarkHandler = (description) => {
    const previousDescriptionLists = JSON.parse(localStorage.getItem('description')) || [];
    if (previousDescriptionLists.includes(description)) {
      notify();
    }
    previousDescriptionLists.push(description);
    setzz(previousDescriptionLists);
    localStorage.setItem('description', JSON.stringify(previousDescriptionLists));
  };



  // loading blog list data from local storage
  const [bookmarkedLists, setBookmarkedLists] = useState([]);
  useEffect(() => {
    const bookmarked = localStorage.getItem('description');
    if (!bookmarked) {
      setBookmarkedLists(['No bookmarked']);
    }
    else {
      setBookmarkedLists(JSON.parse(bookmarked));
    }
  }, [zz]);


  const [timer, setTimer] = useState(0);
  const addReadTimeHandler = (time) => setTimer(timer + time);


  return (
    <div className="App container">
      <Header></Header>
      <div className="shop-container">
        <div className="product-container">
          {
            userData.map(userData => <Product userData={userData}
              addBookmarkHandler={addBookmarkHandler}
              addReadTimeHandler={addReadTimeHandler}
              key={userData._id}
            ></Product>)
          }
        </div>
        <div className="cart-container">
          <ReadTime timer={timer}></ReadTime>
          <h3 className='bookmarked-blogs'>Bookmarked Blogs:{bookmarkedLists.length}</h3>
          {
            bookmarkedLists.map(bookmarked => <BookmarkedLists bookmarked={bookmarked}></BookmarkedLists>)
          }
        </div>
        <ToastContainer></ToastContainer>
      </div>
      <div className="question-section">
        <Question></Question>
      </div>
    </div>
  )
}

export default App

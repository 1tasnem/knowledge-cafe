
import './index.css'; 
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import Bookmarks from './components/Bookmarks/Bookmarks';
import { useState } from 'react';

function App() {
const [bookmarks,setBookmarks] = useState([]);
const [readingTime ,setReadingTime] = useState(0);

const handleAddToBookmark = (blog) => {
  //console.log(blog);
   const newBookmark = [...bookmarks,blog];
   setBookmarks(newBookmark);
}
const handleMarkAsRead = (id,time) =>{
  //console.log('marking as read',time);
  const newReadingTime = readingTime + time;
  setReadingTime(newReadingTime);
  const remainingBookmarks = bookmarks.filter(bookmarks => bookmarks.id !== id)
  setBookmarks(remainingBookmarks);
}
  return (
    <>
  <Header></Header>
  <div className="md:flex max-w-7xl mx-auto">
  <Blogs handleAddToBookmark={handleAddToBookmark}
  handleMarkAsRead = {handleMarkAsRead}
  ></Blogs>
  <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
  </div>
    </>
  )
}

export default App

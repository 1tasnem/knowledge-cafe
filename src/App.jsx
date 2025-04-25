
import './index.css'; 
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import Bookmarks from './components/Bookmarks/Bookmarks';

function App() {


  return (
    <>
  <Header></Header>
  <div className="md:flex">
  <Blogs></Blogs>
  <Bookmarks></Bookmarks>
  </div>
    </>
  )
}

export default App

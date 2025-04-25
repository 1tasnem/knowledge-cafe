import PropTypes from 'prop-types'
import { FaBookmark  } from "react-icons/fa";
const Blog = ({blog,handleAddToBookmark,handleMarkAsRead }) => {
   // console.log(blog)
   const{id,title ,cover, author,author_img,posted_date,reading_time,hashtags} = blog;
     return (
        <div className='mb-20 space-y-4'>
          <h2 className="text-4xl">{title}</h2> 
          <img className='w-full mb-8' src={cover} alt={`Cover picture of the title ${title}`}/>
          <div className='flex jutify-between mb-4 space-y-4'>
            <div className='flex'>
            <img className='w-14' src = {author_img} alt=""/>
            <div className='ml-6'>
              <h2 className='text-2xl'>{author}</h2>
              <p>{posted_date}</p>
            </div>
            
            <div className='ml-20 '>
            <span>{reading_time} min read</span>
            <button onClick ={() => handleAddToBookmark(blog)} className='text-2xl ml-2 ' ><FaBookmark></FaBookmark></button>
            </div>
            
            </div> 
 
           </div>
           <h2>{title}</h2>
           <p>
            {
              hashtags.map((hash,idx) => <span key={idx}><a href ="">#{hash}</a></span>)
            }
           </p>
           <button onClick={() => handleMarkAsRead(id,reading_time)} className='text-purple-600 font-bold underline'>Make As Red</button>
        </div>
    );
};

Blog.PropTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;
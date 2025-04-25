import PropTypes from 'prop-types'
const Blog = ({blog}) => {
   // console.log(blog)
   const{title ,cover, author,author_img,posted_date,reading_time,hashtags} = blog;
     return (
        <div>
          <h2 className="text-4xl">{title}</h2> 
          <img src={cover} alt={`Cover picture of the title ${title}`}/>
          <div className='flex jutify-between'>
            <div className='flex'>
            <img className='w-14' src = {author_img} alt=""/>
            <div className='ml-6'>
              <h2 className='text-2xl'>{author}</h2>
              <p>{posted_date}</p>
            </div>
            </div> 
            </div>
            <div>
                <span>{reading_time} min read</span>
 
           </div>
           <h2>{title}</h2>
           <p>
            {
              hashtags.map((hash,idx) => <span key={idx}><a href ="">#{hash}</a></span>)
            }
           </p>
        </div>
    );
};

Blog.PropTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;
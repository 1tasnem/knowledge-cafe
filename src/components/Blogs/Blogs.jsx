import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import propTypes from "prop-types";


const Blogs = ({handleAddToBookmark,handleMarkAsRead}) => {
    const [blogs,setBlogs] = useState([]);
    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data =>setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h2 className="text-4xl">Blogs:{blogs.length}</h2>
            {
                blogs.map(blog => <Blog key={blog.id}  blog={blog}
                    handleAddToBookmark ={handleAddToBookmark}
                    handleMarkAsRead = {handleMarkAsRead}
                ></Blog>)
            }
            
        </div>
    );
};
Blogs.propTypes = {
    handleAddToBookmark : propTypes.func,
    handleMarkAsRead:propTypes.func,
}
export default Blogs;
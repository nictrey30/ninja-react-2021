import { useState, useEffect } from 'react';
import BlogList from '../BlogList/BlogList';
import axios from 'axios';

const Home = () => {
  const [blogs, setBlogs] = useState('');

  // we can't use async in useEffect hook
  useEffect(() => {
    fetchData()
      .then((result) => setBlogs(result))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    // setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
    axios
      .delete(`http://localhost:8000/blogs/${id}`)
      .then((data) => {
        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='home'>
      {blogs && (
        <BlogList blogs={blogs} title='All Blogs' handleDelete={handleDelete} />
      )}
    </div>
  );
};

const fetchData = async () => {
  const result = await axios.get('http://localhost:8000/blogs');
  return result.data;
};

export default Home;

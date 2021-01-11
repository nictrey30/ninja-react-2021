import { useState, useEffect } from 'react';
import BlogList from '../BlogList/BlogList';
import axios from 'axios';

const Home = () => {
  const [blogs, setBlogs] = useState('');
  const [isPending, setIsPending] = useState(true);

  // we can't use async in useEffect hook
  useEffect(() => {
    setTimeout(() => {
      fetchData()
        .then((result) => {
          setBlogs(result);
          // once we have the data back set the isPending to false to hide the loading message
          setIsPending(false);
        })
        .catch((err) => console.log(err));
    }, 1000);
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/blogs/${id}`)
      .then(() => {
        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className='home'>
      {isPending && <div>Loading...</div>}
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

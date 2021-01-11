import { useState, useEffect } from 'react';
import BlogList from '../BlogList/BlogList';
import axios from 'axios';

const Home = () => {
  const [blogs, setBlogs] = useState('');
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // we can't use async in useEffect hook
  useEffect(() => {
    setTimeout(() => {
      fetchData()
        .then((result) => {
          setBlogs(result);
          // once we have the data back set the isPending to false to hide the loading message
          setIsPending(false);
          // if the req is succesfult get rid of the error message
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 500);
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/blogs/${id}`)
      .then(() => {
        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && (
        <BlogList blogs={blogs} title='All Blogs' handleDelete={handleDelete} />
      )}
    </div>
  );
};

const fetchData = async () => {
  const res = await fetch('http://localhost:8000/blogs');
  if (!res.ok) {
    // this error should be catched in the catch
    throw Error('could not fetch data');
  }
  const data = await res.json();
  return data;
};

export default Home;

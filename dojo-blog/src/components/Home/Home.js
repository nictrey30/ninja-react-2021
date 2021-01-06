import { useState, useEffect } from 'react';
import BlogList from '../BlogList/BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Webdev tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]);
  useEffect(() => {
    console.log('useEffect ran');
  });
  const handleDelete = (id) => {
    setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
  };
  return (
    <div className='home'>
      <BlogList blogs={blogs} title='All Blogs' handleDelete={handleDelete} />
    </div>
  );
};

export default Home;

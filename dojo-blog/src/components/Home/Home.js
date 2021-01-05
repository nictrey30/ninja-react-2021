import { useState } from 'react';

const Home = () => {
  const [name, toggleName] = useState('mario');
  const [age, setAge] = useState(25);
  const handleClick = () => {
    toggleName((prevName) => (prevName === 'mario' ? 'luigi' : 'mario'));
    setAge((prevAge) => (prevAge === 25 ? 30 : 25));
  };
  return (
    <div className='home'>
      <h2>Home Page</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;

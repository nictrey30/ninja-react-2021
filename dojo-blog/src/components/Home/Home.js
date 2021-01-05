const home = () => {
  const handleClick = () => {
    console.log('hello ninjas');
  };
  return (
    <div className='home'>
      <h2>Home Page</h2>
      <button>click me</button>
    </div>
  );
};

export default home;

import React from 'react';
// import { Redirect, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Home() {
  return (
    // Redirecting to product page for the propose of this task
    // <Redirect push to='/product' />
    <Link to='/routes'>
      <p>See routes</p>
    </Link>
  );
}

export default Home;

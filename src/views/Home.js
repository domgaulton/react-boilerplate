import React from 'react';
// import { Redirect, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Container from '../components/UX/Container'

function Home() {
  return (
    // Redirecting to product page for the propose of this task
    // <Redirect push to='/product' />
    <Container containerName="home-container">
      <Link to='/routes'>
        <p>See routes</p>
      </Link>
    </Container>
    
  );
}

export default Home;

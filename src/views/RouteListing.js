import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../context/Context';
import { Link } from 'react-router-dom';
import Loading from '../components/General/Loading';
import Container from '../components/UX/Container';

const ProductListing = () => {
  const [ contextState ] = useContext(Context);
  const { updateStateItem } = contextState;
  const [ routes, setRoutes ] = useState([]);

  useEffect(() => {
    setRoutes([1, 2, 3, 4, 5])
  }, []);


  return !routes ? (
    <Loading />
  ) : (
    <main>
      <Container containerName="listing-container">
        <ul>
          {routes.map(route => {
            return (
              <div key={route}>
                <Link to={`route/${route}`}>
                  <p>{`Route ${route}`}</p>
                </Link>
                <button className={contextState.favouriteRoute === route ? 'favourite' : ''} onClick={() => updateStateItem('favouriteRoute', route)}>Like</button>
              </div>
            )
          })}
        </ul>
      </Container>
    </main>
  );
}

export default ProductListing;

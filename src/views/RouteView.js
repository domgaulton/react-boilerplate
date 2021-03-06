import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../context/Context';
import Loading from '../components/General/Loading';
import Container from '../components/UX/Container';

const RouteView = props => {
  const [ contextState ] = useContext(Context);
  const routePropsId = props.match.params.id;
  const [ routeId, setRouteId ] = useState('');

  useEffect(() => {
    setRouteId(routePropsId)
  }, [routePropsId]);

  return !routeId ? (
    <Loading />
  ) : (
    <Container>
      <h1>{`Route ID: ${routePropsId}`}</h1>
      {parseInt(contextState.favouriteRoute) === parseInt(routePropsId) ? (
        <p>Favourite route</p>
      ) : (
        <p>{`The favourite route is ${contextState.favouriteRoute}`}</p>
      )}
    </Container>
  );
}

export default RouteView;

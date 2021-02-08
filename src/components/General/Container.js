import React from 'react';

const Container = (props) => {
  return (
    <div className={`dg-container ${props.containerName}`}>
      {props.children}
    </div>
  );
}

export default Container;
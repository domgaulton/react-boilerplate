import React, { useState } from 'react';

const Context = React.createContext([{}, () => {}]);

const Provider = props => {
  
  const handleUpdateStateItem = (key, value) => {
    setContextState(prevState => ({
      ...prevState,
      [key]: value,
    }))
  }

  const handleUpdateStateObject = (key, value) => {
    setContextState(prevState => ({
      ...prevState,
      contextObject: {
        ...prevState.contextObject,
        key: value,
      }
    }))
  }

  const [ contextState, setContextState ] = useState({
    contextObject: {},
    favouriteRoute: '',
    updateStateItem: (key, value) => handleUpdateStateItem(key, value),
    updateStateObject: (key, value) => handleUpdateStateObject(key, value),
  });

  return (
    <Context.Provider value={[contextState]}>
      {props.children}
    </Context.Provider>
  );
}

export { Context, Provider };

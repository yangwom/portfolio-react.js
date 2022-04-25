import React from 'react';
import PropTypes from 'prop-types';
import portContext from './portContext';
import dark from '../styles/theme/dark';
import light from '../styles/theme/light';
import usePersistStore from '../hook/persistStore';

function PortProvider({ children }) {
  const [color, setColor] = usePersistStore('theme', light);
  const darkMode = () => {
    if (color.title === 'light') {
      setColor(dark);
    } else {
      setColor(light);
    }
  };
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    darkMode,
    color,
  };

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <portContext.Provider value={value}>
      {children}
    </portContext.Provider>
  );
}

PortProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default PortProvider;

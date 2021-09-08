import './App.css';
import React from 'react';
import TodoPage from './pages/TodoPage';

const themes = {
  light: {
    background: '#1E90FF',
  },
  dark: {
    background: '#222222',
  },
};

export const ThemeContext = React.createContext(themes.light);

function App () {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <TodoPage />
    </ThemeContext.Provider>
  );
}

export default App;

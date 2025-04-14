import React from 'react';
import { Outlet} from 'react-router';
import {Header } from './components';
import { useState } from 'react';
import { FilterProvider } from './context/FilterContext';

function App() {
  const [query, setQuery] = useState('')
  return (
    <FilterProvider>
      <Header search={ [query, setQuery] } />
      <Outlet search={ [query, setQuery] } />
  </FilterProvider>
  );
}

export default App;

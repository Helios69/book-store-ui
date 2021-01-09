import React from 'react';
import CategoriesBar from './components/CategoriesBar/CategoriesBar';
import Header from './components/Header/Header';
import Topmenu from './components/Topmenu/Topmenu';

function App() {
  return (
    <>
      <Topmenu />
      <Header />
      <CategoriesBar />
    </>
  );
}

export default App;

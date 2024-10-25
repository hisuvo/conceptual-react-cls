import React from 'react';
import Banner from './components/Header/Banner';
import Navbar from './components/Header/Navbar';

const App = () => {
  return (
    <div className='container mx-auto'>
      <header className='px-2'>
        <Navbar />
        <Banner />
      </header>
      <main className='px-2'>
        <h2>main container </h2>
      </main>
    </div>
  );
};

export default App;
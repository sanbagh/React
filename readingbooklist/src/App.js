import React from 'react';
import BookList from './components/BookList';
import BookContextProvider from './contexts/BookContext';
import Navbar from './components/Navbar';
import NewBookForm from './components/NewBookForm';
function App() {
  return (
    <div className='App'>
      <BookContextProvider>
        <Navbar />
        <BookList />
        <NewBookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MoviesApp from './components/MoviesApp';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <MoviesApp />
      </div>
    </BrowserRouter>
  );
}
export default App;

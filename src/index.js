import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Workout from './component/Workout';
import Header from './component/Header';
import Footer from './component/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/workout' element={<Workout />} />
        <Route
          path='*'
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>{' '}
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);

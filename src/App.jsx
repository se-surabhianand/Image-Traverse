import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import PhotoDetails from './page/PhotoDetails';
import Header from './components/Header';
import Footer from './components/Footer';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import "./App.css";
import ScrollToTop from './utils/ScrollToTop';

const App = () => {
  // Getting error from store 
  const { error } = useSelector(state => state.photos);

  // Message  whenever error found 
  useEffect(() => {
    if (error) {
      console.log(error);
      dispatch({ type: "clearError" });
    }
  });


  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/photo/:id' element={<PhotoDetails />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </Router>
  );
};

export default App;
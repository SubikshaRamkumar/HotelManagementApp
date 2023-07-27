
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Header from './Components/Header';
import Content from './Components/Content';
import Signup from './Components/SignUp';
import Login from './Components/Login';
import Gallery from './Components/Gallery';
import Reservation from './Components/Reservation';
import Dining from './Components/Dining';
import Contact from './Components/Contact';
import Profile from './Components/Profile';
import Proside from './Components/Proside';
import History from './Components/History';
import Payment from './Components/Payment';
import About from './Components/About';
import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import Features from './Components/Features';
import { Provider } from 'react-redux';
import store from './Components/Reduxx/reduxStore.js'
import FeedbackForm from './Components/FeedbackForm';

function App() {
  useEffect(() => {
    const clearCookiesOnUnload = () => {
      // Clear all cookies here
      // Cookies.remove('email');
      // Cookies.remove('name');
      // Add more cookie names to remove as needed

      // Optionally, you can also clear all cookies
      // Cookies.remove();
    };

    window.addEventListener('beforeunload', clearCookiesOnUnload);

    return () => {
      window.removeEventListener('beforeunload', clearCookiesOnUnload);
    };
    // const handleBeforeUnload = (event) => {
    //   event.preventDefault(); // This is required for older browsers to display a custom message
    //   event.returnValue = ''; // This is required for older browsers to display a custom message
    // };
    
    // window.addEventListener('beforeunload', handleBeforeUnload);
    
    // const handleUnload = () => {
    //   window.removeEventListener('beforeunload', handleBeforeUnload);
    //   clearCookiesOnUnload();
    // };
    
    // window.addEventListener('unload', handleUnload);
    
    // // Return a cleanup function
    // return () => {
    //   window.removeEventListener('unload', handleUnload);
    // };
  }, []);
  return (
    <div className="App">
      <Provider store={store}>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/header" element={<Header/>}></Route>
        <Route path="/content" element={<Content/>}></Route>
        {/* <Route path="/footer" element={<Footer/>}></Route> */}
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/reserve" element={<Reservation/>}></Route>
        <Route path="/gallery" element={<Gallery/>}></Route>
        <Route path="/dining" element={<Dining/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/proside" element={<Proside/>}></Route>
        <Route path="/history" element={<History/>}></Route>
        <Route path="/pay" element={<Payment/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/features" element={<Features/>}></Route>
        <Route path="/feedback" element={<FeedbackForm/>}></Route>
      </Routes>
      </Provider>
    </div>
  );
}

export default App;


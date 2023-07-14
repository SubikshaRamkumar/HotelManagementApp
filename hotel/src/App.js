
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Signup from './Components/SignUp';
import Login from './Components/Login';
import Gallery from './Components/Gallery';
import Reservation from './Components/Reservation';
import Dining from './Components/Dining';


function App() {
  return (
    <div className="App">
      {/* <Gallery/> */}
      {/* <Reservation/> */}
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
      </Routes>
    </div>
  );
}

export default App;

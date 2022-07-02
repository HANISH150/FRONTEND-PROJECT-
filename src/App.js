import './App.css';
import Image from './components/Image'
import Navbar from './components/Navbar';
import Options from './components/Options';
import Hotels from './components/Hotels'
import Movies from './components/Movies';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
   <>
   
   <Navbar/>
   <Image/>
   {/* <Options/> */}
   {/* <Hotels/> */}
   {/* <Movies/> */}
   <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path="/options" element={<Options/>}/>
     <Route path="/hotels" element={<Hotels/>}/>
     <Route path="/movies" element={<Movies/>}/>
     
   </Routes>
   </>
  );
}

export default App;

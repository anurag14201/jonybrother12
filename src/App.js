import './App.css';
import './JonySection/NavBar/Navbar'
import './JonySection/Home/Home'
import './JonySection/Shop/Shop'
import './JonySection/Vendor/Vendor'
import './JonySection/Blog/Blog'

import Footer from './JonySection/Footer/Footer';
import Navbar from './JonySection/NavBar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './JonySection/Home/Home';
import Shop from './JonySection/Shop/Shop';
import Blog from './JonySection/Blog/Blog';
import Vendor from './JonySection/Vendor/Vendor';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='/skill' element={<Shop></Shop>}></Route>
        <Route path='/work' element={<Blog></Blog>}></Route>
        <Route path='/contract' element={<Vendor></Vendor>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

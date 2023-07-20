import './App.css';
import './JonySection/NavBar/Navbar'
import Footer from './JonySection/Footer/Footer';
import Navbar from './JonySection/NavBar/Navbar';
// import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      {/* <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='/skill' element={<Skill></Skill>}></Route>
        <Route path='/work' element={<MyWork></MyWork>}></Route>
        <Route path='/contract' element={<Contract></Contract>}></Route>
      </Routes> */}
      <Footer></Footer>
    </div>
  );
}

export default App;

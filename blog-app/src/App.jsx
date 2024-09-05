import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import Lol from './pages/Lol';

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<Signup/>}/>
      </Routes> */}
      <Home/>
      {/* <Lol/> */}
      {/* <MyFooter/> */}
    </div>
  );
}

export default App;

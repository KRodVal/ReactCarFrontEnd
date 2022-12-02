import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
// import Userfront from '@userfront/react';
import Brands from './pages/Brands';
import Models from './pages/Models';
import Login from './pages/Login';
import Signup from './pages/Signup';

// Userfront.init("demo1234");

// const SignupForm = Userfront.build({
//   toolId: "nkmbbm",
// });

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/brands' element={<Brands/>} />
        <Route path='/models' element={<Models/>}/>
      </Routes>
    </BrowserRouter>
  );
}
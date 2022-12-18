import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
// import Userfront from '@userfront/react';
import Brands from './pages/Brands/Brands';
import NewBrand from './pages/Brands/NewBrand';
import Models from './pages/Models/Models';
import NewModel from './pages/Models/NewModel';
import Login from './pages/Users/Login';
import Signup from './pages/Users/Signup';
import Brand from './pages/Brands/Brand';
import User from './pages/Users/User';

export default function App() {

  // localStorage.clear("token")
  // localStorage.clear("role")
  // localStorage.clear("username")
  // localStorage.clear("age")

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Brands/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/brands' element={<Brands/>} />
        <Route path='/brands/:id' element={<Brand/>} />
        <Route path='/brands/new' element={<NewBrand/>}/>
        <Route path='/brands/create' element={<NewBrand/>}/>
        <Route path='/models' element={<Models/>}/>
        <Route path='/models/new' element={<NewModel/>}/>
        <Route path='/models/create' element={<NewModel/>}/>
        <Route path='/user' element={<User/>}/>
      </Routes>
    </BrowserRouter>
  );
}
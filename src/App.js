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
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

import OneBrand from './pages/Brands/OneBrand';

export default function App() {

  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Brands/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/brands' element={<Brands/>} />
        <Route path='/brands/:id' element={<OneBrand/>} />
        <Route path='/brands/new' element={<NewBrand/>}/>
        <Route path='/models' element={<Models/>}/>
        <Route path='/models/new' element={<NewModel/>}/>
      </Routes>
      {/* {(BrandDataService.getAll).map( brand => (<Link to={'brands/'+brand.id}/>))} */}
    </BrowserRouter>
  );
}
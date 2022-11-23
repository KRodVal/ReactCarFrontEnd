import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Brands from './pages/Brands';
import Models from './pages/Models';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Brands/>} />
        <Route path='/brands' element={<Brands/>} />
        <Route path='/models' element={<Models/>}/>
      </Routes>
    </BrowserRouter>
  );
}
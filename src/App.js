import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import '@coreui/coreui/dist/css/coreui.min.css'
import Brands from './pages/Brands';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='*' element={<Home/>} /> */}
        <Route path='/*' element={<Brands/>} />
      </Routes>
    </BrowserRouter>
  );
}
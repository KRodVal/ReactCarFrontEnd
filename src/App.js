import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import BrandsList from './pages/BrandsList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Home/>} />
        <Route path='/brands' element={<BrandsList/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

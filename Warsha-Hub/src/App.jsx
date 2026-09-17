import { Routes, Route } from 'react-router';
import { Home } from './pages/home/Home';
import { LogIn } from './pages/LogIn';
import { Register } from './pages/Register';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;

import { Routes, Route, Navigate } from 'react-router';
import { LogIn } from './pages/LogIn';
import { Register } from './pages/Register';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Home from './views/home';
import Login from './views/login';
import './App.css';

function App() {
  return (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
  </Routes>
  );
}

export default App;

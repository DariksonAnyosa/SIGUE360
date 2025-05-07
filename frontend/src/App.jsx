import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Inicio from './components/Inicio';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/inicio" element={<Inicio />} />
    </Routes>
  );
}

export default App;
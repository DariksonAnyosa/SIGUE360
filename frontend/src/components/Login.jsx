import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [dni, setDni] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dni, contraseña }),
      });

      const data = await res.json();

      if (res.ok) {
        navigate('/inicio'); // ← Redirección si es exitoso
      } else {
        setMensaje(data.mensaje || 'DNI o contraseña incorrectos');
      }
    } catch (error) {
      setMensaje('Error al conectar con el servidor');
    }
  };

  return (
    <div style={{ padding: '2rem', color: 'white' }}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="DNI"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
      {mensaje && <p style={{ color: 'red' }}>{mensaje}</p>}
    </div>
  );
};

export default Login;
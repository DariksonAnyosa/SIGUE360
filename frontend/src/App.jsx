import React, { useEffect, useState } from 'react';

function App() {
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/mensajes')
      .then((res) => res.json())
      .then((data) => {
        console.log('Datos recibidos:', data);
        setMensajes(data);
      })
      .catch((error) => console.error('Error al obtener datos:', error));
  }, []);

  return (
    <div>
      <h1>Mensajes desde la base de datos:</h1>
      <ul>
        {mensajes.map((item, index) => (
          <li key={index}>
            {item.id} - {item.nombre} - {item.rol}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
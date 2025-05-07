# SIGE360 - Sistema de Gestión de Asistencia Escolar

SIGE360 es una **web app** desarrollada como proyecto de tesis con el objetivo de automatizar el control de asistencia de los estudiantes de secundaria. El sistema permite registrar ingresos y salidas mediante escaneo de tarjetas, enviar notificaciones a padres o tutores y facilitar la comunicación con docentes.

## 📌 Características principales

- Registro de asistencias con hora y tipo (entrada/salida)
- Asociación entre alumnos y tutores/docentes
- Notificaciones configurables (por email, SMS o en la app)
- Escaneo de tarjetas (código QR o similar)
- Comunicación entre padres y tutores vía chat

## ⚙️ Tecnologías utilizadas

- **Frontend:** React.js
- **Backend:** Node.js + Express
- **Base de datos:** PostgreSQL
- **Gestor visual:** TablePlus
- **ORM/Driver:** node-postgres (`pg`)
- **Control de versiones:** Git

## 🗂️ Estructura del proyecto

```
SIGE360/
├── backend/
│   ├── index.js
│   └── package.json
├── frontend/
│   └── [Archivos del frontend en React]
└── README.md
```

## 🚀 Cómo ejecutar localmente

### 1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/SIGE360.git
cd SIGE360
```

### 2. Configura la base de datos

Crea una base de datos PostgreSQL llamada `sige360` y asegúrate de que las tablas estén creadas. Usa TablePlus o comandos SQL.

### 3. Backend

```bash
cd backend
npm install
npx nodemon index.js
```

El servidor backend correrá en `http://localhost:3001`.

### 4. Frontend

```bash
cd ../frontend
npm install
npm start
```

La app web abrirá en `http://localhost:3000`.

## ✍️ Autor

Desarrollado por **Darikson Anyosa Solar**  
Estudiante de Ingeniería de Software - Tesis 2025

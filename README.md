# Farmacia Carabelli - Website - Grupo 09

Sistema web para la **gestión y visualización de productos de la Farmacia Carabelli**, desarrollado como parte del proyecto de la materia **Metodología de Sistemas II (UTN)**.

---

## Tecnologías utilizadas

### Frontend
- **Vite + React 18**
- **Axios**
- **CSS**
- **JavaScript ES6+**

### Backend
- **Sequalize + Express**
- **MySQL**

---

## Estructura del proyecto

```
Proyecto-Metodología-De-Sistemas-2/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── config/
│   │   │      └── db.js
│   │   └── index.js
│   ├── .env
│   ├── package.json
│   └── README.md
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── Map.jsx
    │   │   ├── Navbar.jsx
    │   │   ├── Footer.jsx
    │   │   └── ProductCard.jsx
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── Catalogo.jsx
    │   │   ├── FarmaciasGuardia.jsx
    │   │   ├── Horarios.jsx
    │   │   └── Contacto.jsx
    │   ├── services/
    │   │   └── productosService.js
    │   ├── App.jsx
    │   ├── App.css
    │   ├── main.jsx
    │   └── index.css
    ├── .env
    ├── .gitignore
    ├── package.json
    └── vite.config.js
```

---

## Instalación y ejecución

### 1. Clonar el repositorio
```bash
git clone https://github.com/ifregeiro/Proyecto-Metodologia-de-Sistemas-2.git
```

### 2. Entrar al proyecto
```bash
cd Proyecto-Metodologia-de-Sistemas-2
```

### 3. Instalar dependencias
#### Backend
```bash
cd backend
npm install
```

#### Frontend
```bash
cd ../frontend
npm install
```

---

## Variables de entorno

### En `backend/.env`
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/farmacia
```

### En `frontend/.env`
```env
VITE_API_URL=http://localhost:5000/api
```

---

## Ejecución del proyecto

### Iniciar el backend
```bash
cd backend
npm run dev
```

### Iniciar el frontend
```bash
cd frontend
npm run dev
```

El frontend se ejecutará en  
`http://localhost:5173`

El backend estará en  
`http://localhost:5000`

---

## Ramas del repositorio

- **main** → rama principal del proyecto.  
- **ignacio** → rama personal de desarrollo de Ignacio Fregeiro.
- **gabriel** → rama personal de desarrollo de Gabriel Kessler.
- **lucia** → rama personal de desarrollo de Lucia Sola.

---

## Autores

- **Ignacio Fregeiro** — Desarrollo Backend y Frontend
- **Lucia Sola** — Desarrollo Frontend
- **Gabriel Kessler** — Desarrollo Backend

---

## Licencia

Proyecto de uso académico.  
No destinado a uso comercial sin autorización de los autores.

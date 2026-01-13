# Farmacia Carabelli - Website - Grupo 09

Sistema Web para la **Gestión y visualización de productos de la Farmacia**, desarrollado como parte del proyecto de la materia **Metodología de Sistemas II (UTN)**.

---

## Realización del Proyecto

### Frontend:
Realizado en primera instancia por **Lucía Sola** en **HTML**, en la que verán dentro de `./frontend/public/frontend-html`.
Posteriormente lo transcribimos a **React** por **Lucía Sola** en colaboración con **Ignacio Fregeiro** llegando a la finalización de esta entrega.

### Backend:
Realizado con la técnología MySQL por **Gabriel Kessler** en su totalidad.

---

## Tecnologías utilizadas

### Frontend
- **Vite + React 18**
- **Axios**
- **HTML**
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
│   ├── css/
│   │   └── style.css
│   ├── src/
│   │   ├── config/
│   │   │    └──config.js
│   │   ├── controllers/
│   │   │    └── farmacia.controller.js
│   │   ├── middlewares/
│   │   │    └── cors.js
│   │   ├── models/
│   │   │    └── farmaciaDB.js
│   │   ├── routes/
│   │   │    └── productos.routes.js
│   │   ├── schemas/
│   │   │    └── farmaciaSchema.js
│   │   ├── views/
│   │   │    └── index.ejs
│   │   ├── index.js
│   │   ├── .env
│   │   ├── server.js
│   │   └── utils.js
│   ├── api.http
│   ├── .gitignore
│   ├── package.json
│   └── README.md
│
├── frontend/
│    ├── public/
│    ├── src/
│    │   ├── components/
│    │   │   ├── InfoFarmacia.jsx
│    │   │   ├── Navbar.jsx
│    │   │   ├── Footer.jsx
│    │   │   ├── style_footer.css
│    │   │   ├── style_info_farmacia.css
│    │   │   └── style_navbar.css
│    │   ├── img/
│    │   │   ├── img_categorias
│    │   │   │    ├── 1.png
│    │   │   │    ├── 2.png
│    │   │   │    ├── 3.png
│    │   │   │    ├── 4.png
│    │   │   │    ├── 5.png
│    │   │   │    ├── 6.png
│    │   │   │    ├── 7.png
│    │   │   │    ├── 8.png
│    │   │   │    ├── 9.png
│    │   │   │    ├── 10.png
│    │   │   │    ├── 11.png
│    │   │   │    ├── 12.png
│    │   │   │    ├── 13.png
│    │   │   │    ├── 14.png
│    │   │   │    ├── 15.png
│    │   │   │    ├── 16.png
│    │   │   │    ├── 17.png
│    │   │   │    ├── 18.png
│    │   │   │    ├── 19.png
│    │   │   │    └── 20.png
│    │   │   ├── duck.png
│    │   │   ├── Logo.png
│    │   │   └── LogoFull500x500
│    │   ├── pages/
│    │   │   ├── abc_busqueda_medicamentos.jsx
│    │   │   ├── Carrusel_productos_destacados.jsx
│    │   │   ├── Cat_afeitado_y_depilacion.jsx
│    │   │   ├── Cat_bebes.jsx
│    │   │   ├── Cat_cosmetica.jsx
│    │   │   ├── Cat_cuidado_bucal.jsx
│    │   │   ├── Cat_cuidado_capilar.jsx
│    │   │   ├── Cat_cuidado_corporal.jsx
│    │   │   ├── Cat_cuidado_facial.jsx
│    │   │   ├── Cat_dispositivos.jsx
│    │   │   ├── Cat_higiene_personal.jsx
│    │   │   ├── Cat_intimo.jsx
│    │   │   ├── Cat_medicamentos_nasales.jsx
│    │   │   ├── Cat_medicamentos rectales.jsx
│    │   │   ├── Cat_medicamentos_topicos.jsx
│    │   │   ├── Cat_medicamentos_via_oral.jsx
│    │   │   ├── Cat_ortopedias.jsx
│    │   │   ├── Cat_perfumes.jsx
│    │   │   ├── Cat_primeros_auxilios.jsx
│    │   │   ├── Cat_productos.jsx
│    │   │   ├── Cat_proteccion.jsx
│    │   │   ├── Cat_suplementos.jsx
│    │   │   ├── Cat_venta_libre.jsx
│    │   │   ├── Contacto.jsx
│    │   │   ├── style_Cat.css
│    │   │   ├── style_contacto.css
│    │   │   └── style_productos.css
│    │   ├── services/
│    │   │   └── productosService.js
│    │   ├── App.css
│    │   ├── App.jsx
│    │   ├── main.css
│    │   └── index.jsx
│    ├── .env
│    ├── .gitignore
│    ├── index.html
│    ├── package.json
│    └── vite.config.js
└── README.md
    
```

---

## Funcionalidades Principales

### Acceso de Usuarios

- Los visitantes podrán navegar libremente por el catálogo sin registrarse

### Catálogo

- Amplio catálogo con título, precio e información tanto generica como detallada del producto.

### Visualización

- Visualmente realizado para que sea familiar, amigable y práctico a la hora de navegar por el catálogo

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

El `frontend` se ejecutará en  
`http://localhost:5173`

El `backend` estará en  
`http://localhost:5000`

---

## Variables de entorno

### En `backend/.env`
```env
PORT=5000
MYSQL_URI=mysql://localhost:27017/farmacia
```

### En `frontend/.env`
```env
VITE_APP_API_URL=http://localhost:5000/api
```

---

| Command | Método |Endpoint | Descripción |
| --- | --- | --- | --- |
| Users | GET | http://127.0.0.1:5000/productos/ | Obtiene todos los Productos |
| | GET | http://127.0.0.1:5000/productos/2 | Obtiene el Producto con la id: 2 |
| | PUT | http://127.0.0.1:5000/productos/10 | Desc |
| | POST | http://127.0.0.1:5000/productos/ | Agrega Productos |
| | DELETE | http://127.0.0.1:5000/productos/10  | Elimina el Producto con la id: 10 |

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

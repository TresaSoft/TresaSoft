# TresaSoft

Landing inicial construida con React, Vite, Tailwind CSS, pnpm y Docker.

## Desarrollo

Requiere Node.js 18 o superior y pnpm.

```bash
pnpm install
pnpm dev
```

Después abre la URL local que muestre Vite en la terminal.

## Docker

Construye y levanta la landing con:

```bash
docker compose up --build
```

Después abre `http://localhost:8080`.

## Estructura del frontend

```text
src/
├── components/   # Secciones y piezas reutilizables
├── footer/       # Pie de página
├── header/       # Navegación principal
├── App.jsx       # Composición de la página
├── index.css     # Tailwind y estilos globales
└── main.jsx      # Punto de entrada de React
```
"# TresaSoft" 

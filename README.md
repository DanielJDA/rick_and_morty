# Rick & Morty Explorer 🛸

Aplicación desarrollada con **Next.js + TailwindCSS** para explorar personajes de la API pública de Rick and Morty.  
Incluye buscador, filtros, paginación, favoritos persistentes y una interfaz moderna optimizada para portafolio.

[![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://rick-and-morty-iota-sandy.vercel.app/)

---

## ✨ Características

- 🔍 **Buscador** por nombre y filtro por estado (Alive / Dead / Unknown)  
- 📄 **Paginación completa** con botones Prev / Next  
- ❤️ **Sistema de favoritos** persistente en `localStorage`  
- 🧩 Página dedicada `/favorites` con opción de eliminar todos  
- 📱 **Diseño responsive**, limpio y moderno con Tailwind  
- 💾 Datos obtenidos desde [The Rick and Morty API](https://rickandmortyapi.com)

---

## 🚀 Demo

🔗 **Producción:** [rick-and-morty-iota-sandy.vercel.app](https://rick-and-morty-iota-sandy.vercel.app/)

---

## 🛠️ Stack Técnico

- [Next.js](https://nextjs.org/) — Framework React con renderizado híbrido SSR/CSR  
- [TailwindCSS](https://tailwindcss.com/) — Estilos rápidos y responsivos  
- [TypeScript](https://www.typescriptlang.org/) — Tipado seguro  
- [Vercel](https://vercel.com/) — Deploy continuo con previews automáticos  

---

## 📂 Estructura del proyecto

rick_and_morty/
├─ components/
│ ├─ CharacterCard.tsx
│ ├─ Filters.tsx
│ ├─ FavoritesContext.tsx
│ ├─ HeaderBar.tsx
│ └─ Pagination.tsx
├─ lib/
│ └─ api.ts
├─ pages/
│ ├─ _app.tsx
│ ├─ index.tsx
│ ├─ favorites.tsx
│ └─ character/
│ └─ [id].tsx
├─ public/
├─ styles/
│ └─ globals.css
├─ package.json
├─ tsconfig.json
├─ tailwind.config.js
├─ postcss.config.js
└─ yarn.lock


---

## 🧠 Consideraciones Técnicas

- Los favoritos se almacenan en `localStorage`, cargados mediante `useEffect` para evitar errores de SSR.  
- El contador de “Me gusta” en el header se renderiza oculto hasta que el componente se monta (previene **hydration errors**).  
- Alias configurado con `@` para imports limpios desde `tsconfig.json`.  

---

## 💻 Scripts

```bash
yarn dev       # Ejecutar en desarrollo
yarn build     # Compilar para producción
yarn start     # Levantar build local
yarn lint      # (si configuraste ESLint)

🧩 Roadmap Futuro

 Modo oscuro con toggle 🌙

 Skeleton de carga animado ⚡

 Tests con Vitest / React Testing Library

 Vista de episodios y locaciones

🧑‍💻 Autor

Desarrollado por Daniel JDA — @DanielJDA

📦 Proyecto creado con fines educativos y de portafolio.
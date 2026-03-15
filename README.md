# Rick and Morty Explorer

A modern frontend application built with **Next.js**, **TypeScript**, and **TailwindCSS** that allows users to explore characters from the Rick and Morty API.

The application focuses on building a clean UI architecture, reusable components, and a smooth user experience while interacting with a public API.

## Live Demo

[https://rick-and-morty-iota-sandy.vercel.app](https://rick-and-morty-iota-inky.vercel.app/)

---

# Features

• Character search by name
• Status filtering (Alive / Dead / Unknown)
• Pagination for browsing characters
• Add or remove characters from favorites
• Persist favorites using localStorage
• Dedicated `/favorites` page
• Fully responsive design

---

# Tech Stack

Frontend
Next.js
TypeScript
TailwindCSS

Deployment
Vercel

Data Source
Rick and Morty API

---

# Project Structure

```
components/
lib/
pages/
public/
styles/
```

components → reusable UI components
lib → helper functions and utilities
pages → application routes
styles → global styles and Tailwind configuration

---

# Engineering Decisions

Favorites persistence
Favorites are stored in **localStorage** so the user selections remain after refreshing the page.

SSR & hydration handling
Since localStorage is only available in the browser, favorites are initialized using `useEffect` to avoid SSR hydration issues.

Clean import paths
Path aliases were configured to simplify imports and keep the project maintainable.

---

# Why This Project

The goal of this project was to practice building a **clean and scalable frontend application** using modern tools such as Next.js, TypeScript and TailwindCSS.

The focus was placed on:

• reusable component architecture
• responsive UI
• clean state management
• user experience

---

# Future Improvements

Add loading skeletons
Add unit tests for core components
Persist filters in URL parameters
Add episode and location pages
Add dark mode support

---

# Author

Daniel JDA

Frontend Developer

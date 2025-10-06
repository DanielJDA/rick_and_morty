import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { Character } from '@/lib/api'

type Ctx = {
  favorites: Character[]
  isFavorite: (id: number) => boolean
  toggleFavorite: (c: Character) => void
  removeFavorite: (id: number) => void
  clearFavorites: () => void
}

const FavoritesContext = createContext<Ctx | null>(null)
const STORAGE_KEY = 'rm:favorites:v1'

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Character[]>([])

  // Cargar desde localStorage solo en cliente
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setFavorites(JSON.parse(raw))
    } catch {}
  }, [])

  // Guardar cada vez que cambie
  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites)) } catch {}
  }, [favorites])

  const isFavorite = (id: number) => favorites.some((f) => f.id === id)
  const toggleFavorite = (c: Character) =>
    setFavorites((prev) => (prev.some((f) => f.id === c.id) ? prev.filter((f) => f.id !== c.id) : [c, ...prev]))
  const removeFavorite = (id: number) => setFavorites((prev) => prev.filter((f) => f.id !== id))
  const clearFavorites = () => setFavorites([])

  const value = useMemo<Ctx>(() => ({ favorites, isFavorite, toggleFavorite, removeFavorite, clearFavorites }), [favorites])
  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext)
  if (!ctx) throw new Error('useFavorites must be used within FavoritesProvider')
  return ctx
}

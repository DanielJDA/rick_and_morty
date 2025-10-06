// lib/api.ts
const API_BASE = 'https://rickandmortyapi.com/api'

export type Character = {
  id: number
  name: string
  status: 'Alive' | 'Dead' | 'unknown'
  species: string
  image: string
  gender: string
  origin: { name: string }
  location: { name: string }
  episode: string[]
}

export type CharactersResponse = {
  info: { count: number; pages: number; next: string | null; prev: string | null }
  results: Character[]
}

export async function fetchCharacters(params: { page?: number; name?: string; status?: string } = {}) {
  const qs = new URLSearchParams()
  if (params.page) qs.set('page', String(params.page))
  if (params.name) qs.set('name', params.name)
  if (params.status) qs.set('status', params.status)

  const res = await fetch(`${API_BASE}/character?${qs.toString()}`, { cache: 'no-store' })
  if (!res.ok) {
    if (res.status === 404) {
      return { info: { count: 0, pages: 0, next: null, prev: null }, results: [] } as CharactersResponse
    }
    throw new Error(`Error ${res.status}`)
  }
  return (await res.json()) as CharactersResponse
}

export async function fetchCharacter(id: string | number) {
  const res = await fetch(`${API_BASE}/character/${id}`, { cache: 'no-store' })
  if (!res.ok) throw new Error(`Error ${res.status}`)
  return (await res.json()) as Character
}

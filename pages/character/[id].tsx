import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { fetchCharacter, type Character } from '@/lib/api'
import { useFavorites } from '@/components/FavoritesContext'

export default function CharacterDetail() {
  const { query } = useRouter()
  const id = query.id as string
  const [c, setC] = useState<Character | null>(null)
  const [loading, setLoading] = useState(true)
  const { isFavorite, toggleFavorite } = useFavorites()

  useEffect(() => {
    if (!id) return
    setLoading(true)
    fetchCharacter(id).then(setC).finally(() => setLoading(false))
  }, [id])

  if (loading) return <p className="p-6 text-slate-500">Cargando…</p>
  if (!c) return <p className="p-6 text-slate-500">No encontrado.</p>

  const fav = isFavorite(c.id)

  return (
    <>
      <Head><title>{c.name} · Rick & Morty</title></Head>
      <main className="max-w-4xl mx-auto px-4 py-10">
        <Link href="/" legacyBehavior><a className="text-sky-600 underline">← Volver</a></Link>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <img src={c.image} alt={c.name} className="rounded-2xl w-full object-cover border" />
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold">{c.name}</h1>
              <button
                onClick={() => toggleFavorite(c)}
                className={`rounded-full px-3 py-1 text-xs font-medium border ${
                  fav ? 'text-pink-600 border-pink-300' : 'text-slate-600'
                }`}
                title={fav ? 'Quitar de Me gusta' : 'Agregar a Me gusta'}
              >
                {fav ? '♥' : '♡'}
              </button>
            </div>
            <p className="text-slate-600">{c.species} · {c.gender}</p>
            <p className="mt-1">Origen: <span className="text-slate-700">{c.origin?.name}</span></p>
            <p className="mt-1">Ubicación: <span className="text-slate-700">{c.location?.name}</span></p>
            <p className="mt-2 inline-flex items-center gap-2 text-sm">
              <span className={`inline-block h-2 w-2 rounded-full ${
                c.status === 'Alive' ? 'bg-green-500' : c.status === 'Dead' ? 'bg-red-500' : 'bg-slate-400'
              }`} />
              {c.status}
            </p>

            <div className="mt-6">
              <h2 className="font-semibold">Episodios ({c.episode.length})</h2>
              <ul className="mt-2 grid sm:grid-cols-2 gap-2 text-sm">
                {c.episode.slice(0, 8).map((e) => (
                  <li key={e} className="rounded-xl border px-3 py-2">{e.split('/').pop()}</li>
                ))}
              </ul>
              {c.episode.length > 8 && <p className="text-xs text-slate-500 mt-2">Mostrando 8 de {c.episode.length}</p>}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

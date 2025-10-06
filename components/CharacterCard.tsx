import Link from 'next/link'
import type { Character } from '@/lib/api'
import { useFavorites } from '@/components/FavoritesContext'

export default function CharacterCard({ c }: { c: Character }) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const fav = isFavorite(c.id)

  return (
    <div className="relative">
      <Link href={`/character/${c.id}`} legacyBehavior>
        <a className="group block rounded-2xl border hover:shadow-lg transition overflow-hidden bg-white">
          <img src={c.image} alt={c.name} className="w-full aspect-square object-cover" />
          <div className="p-4">
            <h3 className="font-semibold text-lg group-hover:text-sky-600">{c.name}</h3>
            <p className="text-sm text-slate-600">{c.species} · {c.gender}</p>
            <p className="mt-1 inline-flex items-center gap-2 text-xs">
              <span className={`inline-block h-2 w-2 rounded-full ${
                c.status === 'Alive' ? 'bg-green-500' : c.status === 'Dead' ? 'bg-red-500' : 'bg-slate-400'
              }`} />
              {c.status}
            </p>
          </div>
        </a>
      </Link>

      <button
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleFavorite(c) }}
        aria-label={fav ? 'Quitar de Me gusta' : 'Agregar a Me gusta'}
        className={`absolute top-2 right-2 rounded-full px-3 py-1 text-xs font-medium border bg-white/90 hover:bg-white ${
          fav ? 'text-pink-600 border-pink-300' : 'text-slate-600'
        }`}
        title={fav ? 'Quitar de Me gusta' : 'Agregar a Me gusta'}
      >
        {fav ? '♥' : '♡'}
      </button>
    </div>
  )
}

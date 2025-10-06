import Head from 'next/head'
import CharacterCard from '@/components/CharacterCard'
import { useFavorites } from '@/components/FavoritesContext'

export default function FavoritesPage() {
  const { favorites, clearFavorites } = useFavorites()

  return (
    <>
      <Head><title>Mis Me gusta · Rick & Morty</title></Head>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Mis Me gusta ♥</h1>
          {favorites.length > 0 && (
            <button onClick={clearFavorites} className="rounded-xl border px-4 py-2 hover:bg-slate-50">
              Limpiar todos
            </button>
          )}
        </div>

        {favorites.length === 0 ? (
          <p className="text-slate-500">Aún no tienes favoritos. En la lista principal, pulsa ♥ para agregar.</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favorites.map((c) => <CharacterCard key={c.id} c={c} />)}
          </div>
        )}
      </main>
    </>
  )
}

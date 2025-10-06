import Head from 'next/head'
import CharacterCard from '@/components/CharacterCard'
import { useFavorites } from '@/components/FavoritesContext'

export default function FavoritesPage() {
  const { favorites, clearFavorites } = useFavorites()

  return (
    <>
      <Head><title>Mis Me gusta · Rick & Morty</title></Head>

      <header className="py-10 bg-gradient-to-b from-pink-50 to-transparent">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Mis Me gusta ♥</h1>
          <p className="text-slate-600">Tus personajes favoritos guardados en este navegador.</p>
          {favorites.length > 0 && (
            <button onClick={clearFavorites} className="mt-4 rounded-xl border px-4 py-2 hover:bg-slate-50">
              Limpiar todos
            </button>
          )}
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
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

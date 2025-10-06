import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useFavorites } from '@/components/FavoritesContext'

export default function HeaderBar() {
  const { favorites } = useFavorites()
  const count = favorites.length

  // Evita parpadeo/hydration mismatch: sabemos cuándo estamos en cliente
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" legacyBehavior>
          <a className="font-semibold">Rick & Morty Explorer</a>
        </Link>

        <nav className="flex items-center gap-3 text-sm">
          <Link href="/" legacyBehavior>
            <a className="px-3 py-1.5 rounded-lg border hover:bg-slate-50">Inicio</a>
          </Link>

          <Link href="/favorites" legacyBehavior>
            <a className="px-3 py-1.5 rounded-lg border hover:bg-slate-50 inline-flex items-center">
              ♥ Mis Me gusta
              <span
                aria-hidden="true"
                className={
                  // Renderizamos siempre el span, pero lo ocultamos hasta que monte o si count=0
                  'ml-1 rounded-md px-2 py-0.5 text-xs bg-pink-100 text-pink-700 ' +
                  (!mounted || count === 0 ? 'invisible' : '')
                }
              >
                {mounted ? count : 0}
              </span>
            </a>
          </Link>
        </nav>
      </div>
    </header>
  )
}

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Filters() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [status, setStatus] = useState('')

  // Cargar valores iniciales desde la URL cuando cambien
  useEffect(() => {
    const q = router.query
    setName(typeof q.name === 'string' ? q.name : '')
    setStatus(typeof q.status === 'string' ? q.status : '')
  }, [router.query])

  function apply(e: React.FormEvent) {
    e.preventDefault()
    router.push(
      {
        pathname: '/',
        query: {
          ...router.query,
          page: 1,                            // resetea paginación al filtrar
          name: name || undefined,            // si vacío, quita de la URL
          status: status || undefined,
        },
      },
      undefined,
      { shallow: true }
    )
  }

  function clear() {
    setName('')
    setStatus('')
    router.push({ pathname: '/', query: { page: 1 } }, undefined, { shallow: true })
  }

  return (
    <form onSubmit={apply} className="flex flex-col sm:flex-row gap-3">
      <input
        className="w-full rounded-xl border px-3 py-2"
        placeholder="Buscar por nombre…"
        value={name}
        onChange={(e) => setName(e.target.value)}
        aria-label="Buscar por nombre"
      />
      <select
        className="rounded-xl border px-3 py-2"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        aria-label="Filtrar por estado"
      >
        <option value="">Estado (todos)</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>

      <div className="flex gap-2">
        <button className="rounded-xl px-4 py-2 bg-sky-600 text-white hover:bg-sky-700">Aplicar</button>
        <button type="button" onClick={clear} className="rounded-xl px-4 py-2 border hover:bg-slate-50">
          Limpiar
        </button>
      </div>
    </form>
  )
}

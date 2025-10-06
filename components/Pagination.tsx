import { useRouter } from 'next/router'

export default function Pagination({ page, totalPages }: { page: number; totalPages: number }) {
  const router = useRouter()
  const go = (p: number) => router.push({ pathname: '/', query: { ...router.query, page: p } }, undefined, { shallow: true })

  return (
    <div className="flex items-center justify-center gap-2">
      <button className="rounded-xl border px-3 py-1 disabled:opacity-50" onClick={() => go(page - 1)} disabled={page <= 1}>← Prev</button>
      <span className="text-sm text-slate-600">Página {page} / {Math.max(totalPages || 1, 1)}</span>
      <button className="rounded-xl border px-3 py-1 disabled:opacity-50" onClick={() => go(page + 1)} disabled={!!totalPages && page >= totalPages}>Next →</button>
    </div>
  )
}

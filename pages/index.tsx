import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import CharacterCard from "@/components/CharacterCard";
import Pagination from "@/components/Pagination";
import { fetchCharacters, type CharactersResponse } from "@/lib/api";
import Filters from "@/components/Filters";

export default function Home() {
  const router = useRouter();
  const page = useMemo(
    () => Number(router.query.page || 1),
    [router.query.page]
  );
  const name = useMemo(
    () => (router.query.name as string) || "",
    [router.query.name]
  );
  const status = useMemo(
    () => (router.query.status as string) || "",
    [router.query.status]
  );

  const [data, setData] = useState<CharactersResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchCharacters({ page, name, status })
      .then((d) => mounted && setData(d))
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, [page, name, status]);

  const totalPages = data?.info.pages ?? 0;

  return (
    <>
      <Head>
        <title>Rick & Morty Explorer</title>
        <meta
          name="description"
          content="Explora personajes con paginación y favoritos."
        />
      </Head>
      <div className="mt-4">
        <Filters />
      </div>
      <main className="max-w-6xl mx-auto px-4 py-8">
        {loading && <p className="text-slate-500">Cargando…</p>}

        {!loading && data && data.results.length > 0 && (
          <>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {data.results.map((c) => (
                <CharacterCard key={c.id} c={c} />
              ))}
            </div>
            <div className="mt-8">
              {totalPages > 0 && (
                <Pagination page={page} totalPages={totalPages} />
              )}
            </div>
          </>
        )}

        {!loading && data && data.results.length === 0 && (
          <>
            <p className="text-slate-500">No se encontraron resultados.</p>
            <div className="mt-8">
              {totalPages > 0 && (
                <Pagination page={page} totalPages={totalPages} />
              )}
            </div>
          </>
        )}
      </main>
    </>
  );
}

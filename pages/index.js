import { useState, useEffect } from "react"
import { Filtrar } from "../components/Filtrar"
import { Card } from "../components/Card"
import Pagination from "../components/Pagination"

function Home() {
  const [personajes, setPersonajes] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState("")
  const [info, setInfo] = useState({})
  const [currentPage, setCurrentPage] = useState(0)
  useEffect(() => {
    const getPersonajes = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character?page=" +
            currentPage +
            "&name=" +
            filter
        )
        const data = await response.json()
        setPersonajes(data.results)
        setInfo(data.info)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    getPersonajes()
  }, [filter, currentPage])

  const onPrevious = () => {
    setCurrentPage(currentPage - 1)
  }
  const onNext = () => {
    setCurrentPage(currentPage + 1)
  }

  return (
    <div className="w-full flex justify-center items-center flex-col">
      <Filtrar filter={filter} setFilter={setFilter} />
      <Pagination
        prev={info?.prev}
        next={info?.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
      <div className=" flex-wrap flex w-full justify-center items-center space-x-4 space-y-4 h-screen px-8 pb-8">
        {loading ? (
          <p>Cargando...</p>
        ) : personajes?.length > 0 ? (
          personajes?.map((personaje) => (
            <Card key={personaje.id} personaje={personaje} />
          ))
        ) : (
          <p>
            No se encontro personajes con la busqueda <strong>{filter}</strong>.
          </p>
        )}
      </div>
    </div>
  )
}

export default Home

import React from "react"

export const Filtrar = ({ filter, setFilter }) => {
  const handleInput = ({ target }) => {
    setFilter(target.value)
  }

  return (
    <div className="w-full py-2 flex justify-center">
      <input
        type="text"
        placeholder="Nombre del personaje"
        name="buscar"
        onChange={handleInput}
        value={filter}
		className="px-4 mx-4 py-2 border w-1/5"
      />
    </div>
  )
}

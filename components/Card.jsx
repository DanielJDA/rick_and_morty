/* eslint-disable @next/next/no-img-element */
import React from "react"
import { useAtom } from "atomic-state"
import { favorito } from "./atoms"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
export const Card = ({ personaje }) => {
  const [count, setCount, actions] = useAtom(favorito)
  const colors =
    personaje.status === "Dead"
      ? "#FF0101 "
      : personaje.status === "Alive"
      ? "#0CC234"
      : "#FACE5A"
  return (
    <div className=" w-72">
      <div className="w-full">
        <div className="personaje-body">
          <div>
            <img src={personaje.image} alt={personaje.name} />
          </div>
          <h2>{personaje.name}</h2>
          <div className="personaje-header">
            <div className="estado">
              <div style={{ backgroundColor: colors }}>{personaje.status}</div>
            </div>
          </div>
          <p>
            {personaje.species} <span>-</span> {personaje.gender}
          </p>
        </div>
        <button>favorito</button>
        <div>
          <button
            onClick={() => {
              setCount((fav) => {
                if (fav.indexOf(personaje.id) >= 0) {
                  return fav.filter((id) => id !== personaje.id)
                }
                return [...fav, personaje.id]
              })
            }}
          >
            {count.indexOf(personaje.id) >= 0 ? (
              <AiFillHeart />
            ) : (
              <AiOutlineHeart />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

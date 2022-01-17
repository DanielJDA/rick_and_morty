/* eslint-disable @next/next/no-img-element */
import React from "react"

export const Card = ({ personaje }) => {
  const colors = (personaje.status === "Dead" ? "#FF0101 " : personaje.status === "Alive" ? "#0CC234" : "#FACE5A")
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
              <div style={{backgroundColor: colors}}>{personaje.status}</div>
            </div>
          </div>
          <p>
            {personaje.species} <span>-</span> {personaje.gender}
          </p>
        </div>
      </div>
    </div>
  )
}

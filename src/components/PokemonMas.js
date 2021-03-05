import React from 'react'
import {Link, useParams} from "react-router-dom"

const PokemonMas = () => {

  const pokemon = useParams().name

  return (
    <div>
      jajajjajaa loco
      <div>
        <Link to={`/trabajos/${pokemon}`} >
        <strong>Chao me voy</strong>
        </Link>
      </div>
    </div>
  )
}

export default PokemonMas

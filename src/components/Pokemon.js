import React, {useState, useEffect} from 'react'
import axios from "axios"
import {Link} from "react-router-dom"
import { useParams } from 'react-router-dom'

const Pokemon = () => {
  const id = useParams().id
  const [poke, setPoke] = useState()
  useEffect(() => {
    const res = axios(`https://pokeapi.co/api/v2/pokemon/${id}`)
      res.then((response) => setPoke(response.data))
  }, [])

  return (
    <div>
      {poke && 
      <>
        <div>
          <img src={poke.sprites.other.dream_world.front_default} alt={poke.id}/>
        </div>
        <h2>{poke.name}</h2>
        <span>  #{poke.id} -- </span>
        <span>
          <strong>
            <Link to={`trabajos/${poke.id}/${poke.name}`}>
              Ver mas...
            </Link>
          </strong>
        </span>
        
      </>
      }
      <div>
        <span><strong>
          <Link to="/trabajos">
            Gordo, me voy mor.
          </Link>
        </strong></span>
      </div>
    </div>

  )
}

export default Pokemon

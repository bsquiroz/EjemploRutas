import React, {useState, useEffect} from 'react'
import axios from "axios"
import Nosotrosv1 from './Nosotrosv1'
const Nosotros = () => {
  const [poke, setPoke] = useState()
  
  useEffect(() => {
    const res = axios("https://pokeapi.co/api/v2/pokemon")
    res.then((response) => setPoke(response.data.results))
  }, [])


  return (
    <div>      
      <h2>Nosotros</h2>
      {poke && 
        poke.map((e) => (
          <Nosotrosv1 key={e.name} poke={e.url}/>
        ))
     }
    </div>
  )
}

export default Nosotros

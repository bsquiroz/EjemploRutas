import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from "axios"

const Nosotrosv1 = ({ poke }) => {

  const [aux, setAux] = useState()

  useEffect(() => {
    const res = axios(poke)
      res.then((response) => setAux(response.data))
  }, [])
  
  return (
    <div> 
      {aux &&
        <ul>
              <li>
                <Link to={`trabajos/${aux.id}`}>
                  {aux.name} - #{aux.id}
                </Link>
              </li>
        </ul>
      }
    </div>
  )
}

export default Nosotrosv1

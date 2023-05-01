import { useEffect, useState } from "react"
import axios from "axios"
import Cripto from "./cripto/Cripto"
import "./Cuadricula.css"


function Cuadricula() {

  const [criptos, setCriptos] = useState()
  const API_URL = import.meta.env.VITE_API_URL

  useEffect(() => {
    axios.get(`${API_URL}assets`)
      .then((data) => {
        setCriptos(data.data.data)
        
      })
      .catch(() => {
        console.error("la peticion fallo")
      })
  },[] )

  if (!criptos) return <span>Cargando...</span>

  return (
    <div className="app-container">
      <h1>Lista de Criptomonedas</h1>
      <div className="cripto-container">
        {
          criptos.map(({id, name, priceUsd, symbol, changePercent24Hr}) => (
            <Cripto 
              key={id} 
              name={name} 
              priceUSD={priceUsd} 
              symbol={symbol} 
              changePercent24Hr={changePercent24Hr} 
              id={id}
            />
          ))
        }
      </div>
    </div>
    
  )
}

export default Cuadricula

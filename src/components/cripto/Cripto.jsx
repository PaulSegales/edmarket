import { Link } from "react-router-dom"
import "./Cripto.css"

const Cripto = ({id, name, priceUSD, symbol, changePercent24Hr}) => {
  return (
    <div className="cripto">
      <h2>{name}</h2>
      <div className="info">
        <p><span className="label">Precio: {parseFloat(priceUSD).toFixed(4)}</span></p>
        <p><span className="label">Código: {symbol}</span></p>
        <p>
          <span className="label">
            Variación 24 hrs: 
            <span className={changePercent24Hr > 0? "positivo": "negativo"}> {parseFloat(changePercent24Hr).toFixed(3)}</span>
          </span>
        </p>
        <Link to={`/criptomonedas/${id}`}>Ver Detalles</Link>
      </div>
    </div>
  )
}

export default Cripto
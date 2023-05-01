import { useParams } from 'react-router-dom'
import "./CriptoPage.css"
import usePetition from '../../hooks/usePetition'
import CriptoInfo from './info/CriptoInfo'
import CriptoHistorial from './info/CriptoHistorial'

const CriptoPage = () => {

  const params = useParams()

  const [cripto, cargandoCripto] = usePetition(`assets/${params.id}`)
  const [historial, cargandoHistorial] = usePetition(`assets/${params.id}/history?interval=d1`)


   if (cargandoCripto || cargandoHistorial) return <span>Cargando...</span>

  return (
    <div className="cripto-page-container">
      { cripto && <CriptoInfo cripto={cripto}/> }
      { historial && <CriptoHistorial historial={historial} /> }
    </div>
  )
}

export default CriptoPage
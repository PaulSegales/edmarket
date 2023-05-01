import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

const Perfil = () => {

  const usuario = useContext(UserContext)

  return (
    <div>
      <h1>Perfil de { usuario.name }</h1>
      <div>
        Usuario: 65544
      </div>
    </div>
  )
}

export default Perfil
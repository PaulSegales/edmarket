import { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import "./Menu.css"
import { UserContext } from "../../context/UserContext"

const Menu = () => {

  const navigation = useNavigate()
  const usuario = useContext(UserContext)

  const cerrarSesion = () => {
    localStorage.removeItem("tokenEDmarket")
    navigation("/login")
  }

  return (
    <nav className="main-menu">
      <ul>
        <li><NavLink to="/">Inicio</NavLink></li>
        <li><NavLink to="/criptomonedas">Lista de Criptos</NavLink></li>
        <li><NavLink to="/perfil">Perfil de { usuario.name}</NavLink></li>
        <li><a onClick={cerrarSesion} >Cerrar Sesión</a></li>
      </ul>
    </nav>
  )
}

export default Menu
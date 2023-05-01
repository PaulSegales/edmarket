import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Pagina404 from './components/404'
import App from './components/App'
import "./main.css"
import Cuadricula from './components/Cuadricula'
import Home from './Home'
import CriptoPage from './components/cripto/CriptoPage'
import Perfil from './components/usuarios/Perfil'
import { UserContextProvider } from "./context/UserContext"
import Login from './components/usuarios/Login'
import { useContext } from 'react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='perfil' element={<Perfil />} />
        </Route>
        <Route path='/criptomonedas' element={<App />}>
          <Route index element={<Cuadricula />}/>
          <Route path=':id' element={<CriptoPage />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Pagina404 />} />
      </Routes>
    </BrowserRouter>
  </UserContextProvider>
)


// La etiqueta Link sive para una navegacion sin Carga
// La etiqueta App es el template para las demas paginas, dentro
// de el va recien el contenido

// Dentro de App esta el menu y outlet (el contenido de la pagina)
// Para la primera pagina se agrega "index"

// useParams devuelve un parametro de la url
// ESTA EN EL COMPONENTE CRIPTO
// <Link to={`/criptomonedas/${id}`}>Ver Detalles</Link>

// JSON.stringify(cripto) Se utiliza para ver el contenido 
// del json en texto plano

// Renderizado condicional si cripto(undefine) && (no se renderiza el html)
// Renderizado condicional si cripto(true) && (se renderiza html, colocar aca el html)

// Los HELPERS son pequeñas funciones que nos ayudan

// useContext Los contextos son variales por las cuales,
// podemos acceder desde cualquier componente
// se trata de un componente que va a envolver a la aplicación
// la funcion envuelve y la constante contiene la informacion
// <UserContextProvider></UserContextProvider>

// .env.production para subir en produccion
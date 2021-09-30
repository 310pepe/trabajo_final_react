//importaciones necesarias de react
import React,{ useEffect} from "react";
//importaciones necesarias de redux
import { useDispatch,useSelector} from "react-redux";

//importaciones necesarias para realizar un router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//importacion de la acción infoUsuario
import { infoUsuario} from "../../actions/gym";

//importacion de componentes a mostrar
import Login from "../Login-Register/login";
import Register from "../Login-Register/register";
import AddTutorial from "../Login-Register/prueba";
import Contactos from "../home/contactos";
import Home from "../home/home";
import Experiencia from "../home/experiencia";
import Gimnasio from "../home/gimnasio";
import Virtual from "../home/virtual";
import Entrenadores from "../logueado/entrenadores";
import Clases from "../logueado/clases";

//creación del componente
const Navbar =()=>{
  //obtener le navbar
  const token = localStorage.getItem('token');

  //establecer el valor de la variable al estado del store
  const tutorials = useSelector(state => state);

  //instanciasión de dispatch
  const dispatch = useDispatch();

  //ejecutar función cada vez que se renderice el componente
  useEffect(() => {
    //validar si el token existe
    if (token)
    {
    //ejecutar accion infoUsuario
    dispatch(infoUsuario({token}))
    
    }else{
    
    }
  }, []);

  //funcion para cerrar sesión
  const cerrar=()=>{
    //borrar el token del localstorage
    localStorage.removeItem('token');
    //redireccionar al home
    window.location='/'
  }
  
  
     //renderización del componente
        return(
            <Router>
              {/*inicio del router */}
              {/*inicio del navbar */}
              <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                  {/*inicio de links de navegación */}
                  <Link to={"/home"} class="navbar-brand">
                    GYM STYLE'S
                  </Link>            
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <Link to={"/contactos"} class="nav-link">
                          Contactos
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link to={"/gimnasio"} class="nav-link">
                          Gimnasio
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link to={"/experiencia"} class="nav-link">
                          Experiencia
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link to={"/virtual"} class="nav-link">
                          Virtual
                        </Link>
                      </li>
                      {/*validación del token para mostar el link */}
                      {token?(<li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Clases
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <Link to={"/clases/boxeo"} class="dropdown-item">
                  Boxeo
              </Link>
            </li>
            <li>
              <Link to={"/clases/yoga"} class="dropdown-item">
                  Yoga
              </Link>
            </li>
            <li>
              <Link to={"/clases/trx"} class="dropdown-item">
                  Trx
              </Link>
            </li>
            <li>
              <Link to={"/clases/entrenamiento"} class="dropdown-item">
                  Entrenamineto Funcional
              </Link>
            </li>
          </ul>
        </li>):(<span></span>)}
        {/*fin validacion */}
        {/*validación del rol */}
                      {tutorials.gymReducer.Rol=='administrador'?( <li class="nav-item">
                        <Link to={"/entrenadores"} class="nav-link">
                          Entrenadores
                        </Link>
                      </li>):(<span></span>)}
                    </ul>
                    {token? (
                      <div class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          {tutorials.gymReducer.name}
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
                          <li>
                            <p class="dropdown-item" onClick={cerrar} >Cerrar Sesion </p>
                          </li>
                        </ul>
                      </div>
                    ):(
                      <form class="d-flex">
                      <Link to={"/login"} class="btn btn-warning">
                        Ingresar
                      </Link>
                      <Link to={"/register"} class="btn btn-outline-warning ms-2">
                        Registrarse
                      </Link>
                    </form>
                    )}
                    {/*fin validacion */}
                    
                  </div>
                  {/*fin links de navegación */}
                </div>
              </nav>
              {/*fin del navbar */}
      {/*inicio de las clases a renderizar */}
      <div class=" mt-3 container">        
        <Switch>
          {/*rutas permitidas y componente a renderizar según la ruta */}
          <Route exact path="/contactos" component={Contactos} />
          <Route path="/experiencia" component={Experiencia} />
          <Route path="/gimnasio" component={Gimnasio} />
          <Route path="/virtual" component={Virtual} />
          <Route path="/login" component={Login} />
          <Route path="/prueba" component={AddTutorial} />
          <Route path="/register" component={Register} />
          <Route path="/entrenadores" component={Entrenadores} />
          <Route path="/clases/:clase" render={({match }) => <Clases clase={match.params.clase} />}/>
          <Route exact path={["/", "/home","**"]} component={Home} />
        </Switch>
      </div>
      {/*fin de las clases a renderizar */}
      {/*fin del router */}
    </Router>
        )
    
}

export default Navbar;
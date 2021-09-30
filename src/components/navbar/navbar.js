import React,{ useEffect} from "react";
import { useDispatch,useSelector} from "react-redux";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { infoUsuario,obtenerUsuaros } from "../../actions/gym";

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
import Editar from "../logueado/edit";

const Navbar =()=>{
  const token = localStorage.getItem('token');
  const tutorials = useSelector(state => state);
  console.log(tutorials);
  const dispatch = useDispatch();
  console.log(token);

  useEffect(() => {
    if (token)
    {
    dispatch(infoUsuario({token}))
    
    }else{
    
    }
  }, []);

  const cerrar=()=>{
    localStorage.removeItem('token');
    window.location='/'
  }
  
  
     
        return(
            <Router>
              <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
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
                      {tutorials.gymReducer.Rol=='usuario'?( <li class="nav-item">
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
                    
                  </div>
                </div>
              </nav>

      <div class=" mt-3 container">
        <Switch>
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
    </Router>
        )
    
}

export default Navbar;
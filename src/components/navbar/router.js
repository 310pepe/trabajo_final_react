import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

const Routers =()=>{
  
     
        return(
            <Router>
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

export default Routers;
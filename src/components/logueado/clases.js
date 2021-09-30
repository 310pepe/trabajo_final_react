//importaciones necesarias de react
import React from "react";

//importaciones necesarias para crear un router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//importacion de componente necesario
import ClaseD from "./list";
const Clases = (props)=>{
    //creación de variable con la información de las clases
    const allClases=[{
        title:"Clase de boxeo presencial lunes",
        day:"lunes",
        hora:"6:30 pm",
        inst:"Jesus Hernández",
        sede:"Mosquera Cundinamarca",
        dia:"12/04/2021",
        tipo:"boxeo",
        img:"../../img/img-box/box1.png",
    },
    {
        title:"Clase de boxeo virtual martes",
        day:"martes",
        hora:"6:00 pm",
        inst:"Jesus Hernández",
        sede:"Mosquera Cundinamarca",
        dia:"12/04/2021",
        tipo:"boxeo",
        img:"../../img/img-box/boxeo.jpg"
    },
    {
        title:"Clase de boxeo presencial martes",
        day:"martes",
        hora:"6:00 pm",
        inst:"Alejandro Abondano",
        sede:"Mosquera Cundinamarca",
        dia:"12/04/2021",
        tipo:"boxeo",
        img:"../../img/img-box/boxeo2.jpg"
    },
    {
        title:"Clase de boxeo presencial miércoles",
        day:"miercoles",
        hora:"6:30 pm",
        inst:"Jesus Hernández",
        sede:"Mosquera Cundinamarca",
        dia:"14/04/2021",
        tipo:"boxeo",
        img:"../../img/img-box/boxeo3.jpg"
    },
    {
        title:"Clase de boxeo presencial jueves",
        day:"jueves",
        hora:"5:00 pm",
        inst:"Jesus Hernández",
        sede:"Mosquera cundinamarca",
        dia:"15/04/2021",
        tipo:"boxeo",
        img:"../../img/img-box/boxeo4.jpg"
    },
    {
        title:"Clase de boxeo presencial jueves",
        day:"jueves",
        hora:"5:00 pm",
        inst:"Alejandro Abondano",
        sede:"Mosquera cundinamarca",
        dia:"15/04/2021",
        tipo:"boxeo",
        img:"../../img/img-box/boxeo5.jpg"
    },
    {
        title:"Clase de boxeo presencial viernes",
        day:"viernes",
        hora:"6: 30 pm",
        inst:"Jesus Hernández",
        sede:"Mosquera cundinamarca",
        dia:"16/04/2021",
        tipo:"boxeo",
        img:"../../img/img-box/boxeo6.jpeg"
    },
    {
        title:"Clase de boxeo presencial domingo",
        day:"domingo",
        hora:"6: 30 pm",
        inst:"Jesus Hernández",
        sede:"Mosquera cundinamarca",
        dia:"18/04/2021",
        tipo:"boxeo",
        img:"../../img/img-box/descarga.jfif"
    },
    {
        title:"Clase de boxeo presencial sábado",
        day:"sabado",
        hora:"6: 30 pm",
        inst:"Jesus Hernández",
        sede:"Mosquera cundinamarca",
        dia:"17/04/2021",
        tipo:"boxeo",
        img:"../../img/img-box/boxeo7.jpg"
    },
    {
        title:"Clase de Yoga presencial lunes",
        day:"lunes",
        hora:"3:30 pm",
        inst:"Daniel Acevedo",
        sede:"Mosquera cundinamarca",
        dia:"12/04/202",
        tipo:"yoga",
        img:"../../img/img-yoga/yoga-1.jpg"
    },
    {
        title:"Clase de yoga virtual martes",
        day:"martes",
        hora:"4:00 pm",
        inst:"Daniela Peña",
        sede:"Mosquera cundinamarca",
        dia:"12/04/2021",
        tipo:"yoga",
        img:"../../img/img-yoga/yoga-2.jpg"
    },
    {
        title:"Clase de yoga presencial martes",
        day:"martes",
        hora:"3:00pm",
        inst:"Daniel Acevedo",
        sede:"Mosquera cundinamarca",
        dia:"12/04/2021",
        tipo:"yoga",
        img:"../../img/img-yoga/yoga-8.jpg"
    },
    {
        title:"Clase de yoga presencial miércoles",
        day:"miercoles",
        hora:"6: 30 pm",
        inst:"Daniel Acevedo",
        sede:"Mosquera cundinamarca",
        dia:"14/04/2021",
        tipo:"yoga",
        img:"../../img/img-yoga/yoga-3.jpg"
    },
    {
        title:"Clase de yoga presencial jueves",
        day:"jueves",
        hora:"5:00 pm",
        inst:"Daniel Acevedo",
        sede:"Mosquera cundinamarca",
        dia:"15/04/2021",
        tipo:"yoga",
        img:"../../img/img-yoga/yoga-4.jpeg"
    },
    {
        title:"Clase de yoga presencial jueves",
        day:"jueves",
        hora:"5:00 pm",
        inst:"Daniela Peña",
        sede:"Mosquera cundinamarca",
        dia:"15/04/2021",
        tipo:"yoga",
        img:"../../img/img-yoga/yoga-9.jpg"
    },
    {
        title:"Clase de yoga presencial viernes",
        day:"viernes",
        hora:"6: 30 pm",
        inst:"Daniel Acevedo",
        sede:"Mosquera cundinamarca",
        dia:"16/04/2021",
        tipo:"yoga",
        img:"../../img/img-yoga/yoga-5.jpg"
    },
    {
        title:"Clase de yoga presencial domingo",
        day:"domingo",
        hora:"6: 30 pm",
        inst:"Daniel Acevedo",
        sede:"Mosquera cundinamarca",
        dia:"18/04/2021",
        tipo:"yoga",
        img:"../../img/img-yoga/yoga-7.jpg"
    },
    {
        title:"Clase de yoga presencial sábado",
        day:"sabado",
        hora:"6: 30 pm",
        inst:"Daniel Acevedo",
        sede:"Mosquera cundinamarca",
        dia:"17/04/2021",
        tipo:"yoga",
        img:"../../img/img-yoga/yoga-6.jpg"
    },
    {
        title:"Clase de trx presencial lunes",
        day:"lunes",
        hora:"3:30 pm",
        inst:"Sebastian Guevara",
        sede:"Mosquera cundinamarca",
        dia:"12/04/2021",
        tipo:"trx",
        img:"../../img/img-trx/trx-2.jpg"
    },
    {
        title:"Clase de trx virtual martes",
        day:"martes",
        hora:"4:00 pm",
        inst:"Pedro Garcia",
        sede:"Mosquera cundinamarca",
        dia:"12/04/2021",
        tipo:"trx",
        img:"../../img/img-trx/trx-3..jpeg"
    },
    {
        title:"Clase de trx presencial martes",
        day:"martes",
        hora:"3:00pm",
        inst:"Sebastian Guevara",
        sede:"Mosquera cundinamarca",
        dia:"12/04/2021",
        tipo:"trx",
        img:"../../img/img-trx/trx-4.jpg"
    },
    {
        title:"Clase de trx presencial miércoles",
        day:"miercoles",
        hora:"6: 30 pm",
        inst:"Sebastian Guevara",
        sede:"Mosquera cundinamarca",
        dia:"14/04/2021",
        tipo:"trx",
        img:"../../img/img-trx/trx-5.jpg"
    },
    {
        title:"Clase de trx presencial jueves",
        day:"jueves",
        hora:"5:00 pm",
        inst:"Sebastian Guevara",
        sede:"Mosquera cundinamarca",
        dia:"15/04/2021",
        tipo:"trx",
        img:"../../img/img-trx/trx-6.jpg "
    },
    {
        title:"Clase de trx virtual jueves",
        day:"jueves",
        hora:"5:00 pm",
        inst:"Pedro Garcia",
        sede:"Mosquera cundinamarca",
        dia:"15/04/2021",
        tipo:"trx",
        img:"../../img/img-trx/trx-7.jpg"
    },
    {
        title:"Clase de trx presencial viernes",
        day:"viernes",
        hora:"6: 30 pm",
        inst:"Sebastian Guevara",
        sede:"Mosquera cundinamarca",
        dia:"16/04/2021",
        tipo:"trx",
        img:"../../img/img-trx/trx-8.jpg"
    },
    {
        title:"Clase de trx presencial domingo",
        day:"domingo",
        hora:"6: 30 pm",
        inst:"Sebastian Guevara",
        sede:"Mosquera cundinamarca",
        dia:"18/04/2021",
        tipo:"trx",
        img:"../../img/img-trx/trx-1.jpg"
    },
    {
        title:"clase de trx presencial sábado",
        day:"sabado",
        hora:"6: 30 pm",
        inst:"Sebastian Guevara",
        sede:"Mosquera cundinamarca",
        dia:"17/04/2021",
        tipo:"trx",
        img:"../../img/img-trx/trx-9.jpg"
    },
    {
        title:"Clase de entrenamiento funcional presencial lunes",
        day:"lunes",
        hora:"3:30 pm",
        inst:"Daniel Acevedo",
        sede:"Mosquera cundinamarca",
        dia:"12/04/2021",
        tipo:"entrenamiento",
        img:"../../img/entre.jpg"
    },
    {
        title:"Clase de entrenamiento funcional virtual martes",
        day:"martes",
        hora:"4:00 pm",
        inst:"Daniela Peña",
        sede:"Mosquera cundinamarca",
        dia:"12/04/2021",
        tipo:"entrenamiento",
        img:"../../img/entre.jpg"
    },
    {
        title:"Clase de entrenamiento funcional presencial martes",
        day:"martes",
        hora:"3:00pm",
        inst:"Daniel Acevedo",
        sede:"Mosquera cundinamarca",
        dia:"12/04/2021",
        tipo:"entrenamiento",
        img:"../../img/entre.jpg"
    },
    {
        title:"Clase de entrenamiento funcional presencial miércoles",
        day:"miercoles",
        hora:"6: 30 pm",
        inst:"Daniel Acevedo",
        sede:"Mosquera cundinamarca",
        dia:"14/04/2021",
        tipo:"entrenamiento",
        img:"../../img/entre.jpg"
    },
    {
        title:"Clase de entrenamiento funcional presencial jueves",
        day:"jueves",
        hora:"5:00 pm",
        inst:"Daniel Acevedo",
        sede:"Mosquera cundinamarca",
        dia:"15/04/2021",
        tipo:"entrenamiento",
        img:"../../img/entre.jpg"
    },
    {
        title:"Clase de entrenamiento funcional presencial jueves",
        day:"jueves",
        hora:"5:00 pm",
        inst:"Daniela Peña",
        sede:"Mosquera cundinamarc",
        dia:"15/04/2021",
        tipo:"entrenamiento",
        img:"../../img/entre.jpg"
    },
    {
        title:"Clase de entrenamiento funcional presencial viernes",
        day:"viernes",
        hora:"6: 30 pm",
        inst:"Daniel Acevedo",
        sede:"Mosquera cundinamarca",
        dia:"16/04/2021",
        tipo:"entrenamiento",
        img:"../../img/entre.jpg"
    },
    {
        title:"Clase de entrenamiento funcional presencial domingo",
        day:"domingo",
        hora:"6: 30 pm",
        inst:"Daniel Acevedo",
        sede:"Mosquera cundinamarca",
        dia:"18/04/2021",
        tipo:"entrenamiento",
        img:"../../img/entre.jpg"
    },
    {
        title:"Clase de entrenamiento funcional presencial sábado",
        day:"sabado",
        hora:"6: 30 pm",
        inst:"Daniel Acevedo",
        sede:"Mosquera cundinamarca",
        dia:"17/04/2021",
        tipo:"entrenamiento",
        img:"../../img/entre.jpg"
    }
    ];
    //creacion de constante con la info enviada desde el router principal
    const clase= props.clase;

    //validación que la clase corresponda a la rama deseada yoga,box,etc
    const clases = allClases.map(cl=>{
        if(cl.tipo===clase){
            return cl;
        }
    })


    
    //renderización del componente
    return(
        
        <Router>
            {/*inicio del router */}
            {/*inicio del menu */}
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">           
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      {/*inicio de los links para navegar */}
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <Link to={"/clases/"+clase+"/lunes"} class="nav-link">
                          Lunes
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link to={"/clases/"+clase+"/martes"} class="nav-link">
                          Martes
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link to={"/clases/"+clase+"/miercoles"} class="nav-link">
                          Miercoles
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link to={"/clases/"+clase+"/jueves"} class="nav-link">
                          Jueves
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link to={"/clases/"+clase+"/viernes"} class="nav-link">
                          Viernes
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link to={"/clases/"+clase+"/sabado"} class="nav-link">
                          Sabado
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link to={"/clases/"+clase+"/domingo"} class="nav-link">
                          Domingo
                        </Link>
                      </li>
                      {/*fin de los links para navegar */}
                    </ul>
                  </div>
                </div>
              </nav>
              {/*fin del menú */}
              {/*inicio de las clases a renderizar */}
            <div class=" mt-3 container">
            <Switch>
                {/*rutas permitidas y componente a renderizar según la ruta */}
                <Route path={"/clases/"+clase+"/martes"} render={() => <ClaseD clases={clases} day='martes' />} />
                <Route path={"/clases/"+clase+"/miercoles"} render={() => <ClaseD clases={clases} day='miercoles' />} />
                <Route path={"/clases/"+clase+"/jueves"} render={() => <ClaseD clases={clases} day='jueves' />} />
                <Route path={"/clases/"+clase+"/viernes"} render={() => <ClaseD clases={clases} day='viernes' />} />
                <Route path={"/clases/"+clase+"/sabado"} render={() => <ClaseD clases={clases} day='sabado' />} />
                <Route path={"/clases/"+clase+"/domingo"} render={() => <ClaseD clases={clases} day='domingo' />} />
                <Route path={["/clases/"+clase+"/lunes","/","**"]} render={() => <ClaseD clases={clases} day='lunes' />} />
                
                
            </Switch>
            </div>
            {/*fin de las clases a renderizar */}
            {/*fin del router */}
        </Router>
    )
}

export default Clases;
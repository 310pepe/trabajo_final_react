//importaciones necesarias de react
import React,{useState,useEffect} from "react";

//importacion de las acciones necesarias
import {obtenerUsuaros,infoEntre,updateEntre,crearUsuario,deleteEntre} from "../../actions/gym";

//importaciones necesarias de redux
import { useDispatch} from "react-redux";
  
  
//creación del componente 
const Entrenadores =()=>{

  //interface para actualizar entrenador
  const datosPer = {
    'email':"",
    'NameUser':"",
    'name':"",
    'Telefono':"",
    'Eps':'',
  };
  //interface para crear entrenador
  const datosPerCr = {
    'email':"",
    'NameUser':"",
    'name':"",
    'Telefono':"",
    'Eps':'',
    'Rol':'entrenador',
    'password':'123456789'
  };

  //creacion de variable para obtener la información del formulario
  //de actualizar entrenador
  const [pers, setPerso] = useState(datosPer);

  //creacion de variable para obtener la información del formulario 
  //de crear entrenador
  const [persCr, setPersoCr] = useState(datosPerCr);

  //funcion para capturar los valores del formulario de
  //actualizar
  const handleInputChange = event => {
    const { name, value } = event.target;
    setPerso({ ...pers, [name]: value });
  };

  //funcion para capturar los valores del formulario de
  //crear
  const handleInputChange1 = event => {
    const { name, value } = event.target;
    setPersoCr({ ...persCr, [name]: value });
  };
  //definir interface para la variable clases
  let clase=[];
  //definir variable para guardar todos los entrenadores
  const [clases, setClases] = useState(clase);
  //instanciar dispatch
  const dispatch = useDispatch();
  //función para traer la información de un entrenador
  const traerInfo=(id)=>
  {
    //ejecutar acción infoEntre
    dispatch(infoEntre(id)).then(response=>{
      //extraer la información necesaria
      const {name,NameUser,email,Telefono,Eps,id}=response;
      if(NameUser){
        //establecer la información a la variable de actualización
        setPerso({name,NameUser,email,Telefono,Eps,'index':id});
      }else{
        //establecer la información a la variable de actualización
        setPerso({name,email,Telefono,Eps});
      }
      
      
    });
  }

  //función para actualizar un entrenador
  const guardar=(id)=>{
    //ejecutar acción updateEntre
    dispatch(updateEntre(id,pers)).then(response=>{
      //recargar la pantalla
      window.location.reload();
    });
  }
  
  //función para crear un nuevo entrenador
  const crear=()=>{
    //ejecutar acción crearUsuario
    dispatch(crearUsuario(persCr)).then(response=>{
      //recargar la pantalla
      window.location.reload();
    })
  }

  //función para borrar un entrenador
  const borrar=(id)=>{
    //ejecutar acción deleteEntre
    dispatch(deleteEntre(id)).then(response=>{
      //recargar la pantalla
      window.location.reload();
    }).catch(e => {
      //recargar la pantalla
      window.location.reload();
    });
  }

  //ejecutar funcion cada vez que se renderice el componente
  useEffect(() => {
    //ejecutar acción obtenerUsuarios y establecer los valores a la variable clases
    dispatch(obtenerUsuaros()).then(response=>setClases(response));
  }, []);
    
    //funcion para mostrar los entrenadores
    const MostrarEntr=(props)=>{ 
    //crear una variable con todos los usuarios
    let us = props.users;
    //validar si existe la variable
    if(us && us.length>0)
    {
      //Crear variable con los entrenadores renderizados
      let entrenadores= us.map(usuario=>{
        //validar el rol del usuario
      if(usuario.Rol=="entrenador")
      {
        //retorno de la renderizacion
        return( 
                  <tr>
                    <th scope="row"> {usuario.name} </th>
                    <td> {usuario.NameUser} </td>
                    <td> {usuario.email} </td>
                    <td> {usuario.Telefono} </td>
                    <td> {usuario.Eps} </td>
                    <td> {usuario.Rol} </td>
                    <td><button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#editar" onClick={()=>traerInfo(usuario.id)} >Editar</button></td>
                    <td><button type="button" class="btn btn-danger "onClick={()=>borrar(usuario.id)}>Borrar</button></td>
                  </tr>
                  
        )
      }
    });
    //retorno de la variable para ser renderizada
    return (<tbody>{entrenadores}</tbody>);
    }else{
      //retorno si no existe la variable
      return (<span></span>)
    }
  }
    //renderización del componente
    return(
      <div class="row">    
        
        
      <div class="col-12 mt-3"> 
      {/*inico boton para crear */}
        <div class="d-grid gap-2 mb-2">
            <button class="btn btn-primary " 
            type="button"
            data-bs-toggle="modal" 
            data-bs-target="#crear" >Crear</button>
        </div>
        {/*fin boton crear */}
        {/*inicio de la tabla */}
        <table class="table">
              {/*inicio del tablehead */}
               <thead class="table-dark ">    
                  <tr>
                    <th scope="col">nombre</th>
                    <th scope="col">nombre de usuario</th>
                    <th scope="col">email</th>
                    <th scope="col">telefono</th>
                    <th scope="col">eps</th>
                    <th scope="col">rol</th>
                    <th colspan="2"></th>
                </tr>
                </thead>
                {/*fin del table head */}
                {/*renderización de entrenadores */}
                <MostrarEntr users={clases}/>

              </table>
              {/*fin de la tabla */}

        </div>
        {/*inicio modal editar */}
        <div class="modal" tabindex="-1" id="editar" >
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Editando entrenador {pers.name} </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
        <label for="usuario" class="formulario__label">Nombre</label>
          <div class="formulario__grupo-input">
            <input
              type="text"
              class="formulario__input datoinput"
              name="name"
              id="usuario"
              value={pers.name}
              onChange={handleInputChange}
            />
          </div>
          <label for="usuario" class="formulario__label">Nombre de usuario</label>
          <div class="formulario__grupo-input">
            <input
              type="text"
              class="formulario__input datoinput"
              name="NameUser"
              id="usuario" 
              value={pers.NameUser}
              onChange={handleInputChange}
            />
          </div>
          <label for="usuario" class="formulario__label">Email</label>
          <div class="formulario__grupo-input">
            <input
              type="email"
              class="formulario__input datoinput"
              name="email"
              id="usuario" 
              value={pers.email}
              onChange={handleInputChange}
            />
          </div>
          <label for="usuario" class="formulario__label">Telefono</label>
          <div class="formulario__grupo-input">
            <input
              type="text"
              class="formulario__input datoinput"
              name="Telefono"
              id="usuario" 
              value={pers.Telefono}
              onChange={handleInputChange}
            />
          </div>
          <label for="usuario" class="formulario__label">Eps</label>
          <div class="formulario__grupo-input">
            <input
              type="text"
              class="formulario__input datoinput"
              name="Eps"
              id="usuario" 
              value={pers.Eps}
              onChange={handleInputChange}
            />
          </div>
          
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Canclear</button>
        <button type="button" class="btn btn-primary" onClick={()=>guardar(pers.index)} >Guardar</button>
      </div>
    </div>
  </div>
  </div>
  {/*fin modal editar */}
  {/*inicio modal crear */}
  <div class="modal" tabindex="-1" id="crear" >
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Editando entrenador {pers.name} </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
        <label for="usuario" class="formulario__label">Nombre</label>
          <div class="formulario__grupo-input">
            <input
              type="text"
              class="formulario__input datoinput"
              name="name"
              id="usuario"
              required
              onChange={handleInputChange1}
            />
          </div>
          <label for="usuario" class="formulario__label">Nombre de usuario</label>
          <div class="formulario__grupo-input">
            <input
              type="text"
              class="formulario__input datoinput"
              name="NameUser"
              id="usuario" 
              required
              onChange={handleInputChange1}
            />
          </div>
          <label for="usuario" class="formulario__label">Email</label>
          <div class="formulario__grupo-input">
            <input
              type="email"
              class="formulario__input datoinput"
              name="email"
              id="usuario" 
              required
              onChange={handleInputChange1}
            />
          </div>
          <label for="usuario" class="formulario__label">Telefono</label>
          <div class="formulario__grupo-input">
            <input
              type="text"
              class="formulario__input datoinput"
              name="Telefono"
              id="usuario" 
              required
              onChange={handleInputChange1}
            />
          </div>
          <label for="usuario" class="formulario__label">Eps</label>
          <div class="formulario__grupo-input">
            <input
              type="text"
              class="formulario__input datoinput"
              name="Eps"
              id="usuario" 
              required
              onChange={handleInputChange1}
            />
          </div>
          
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Canclear</button>
        <button type="button" class="btn btn-primary" onClick={crear} >crear</button>
      </div>
    </div>
  </div>

  </div>
      {/*fin modal crear */}
    </div>
    )
}

//exportación del componente
export default Entrenadores;
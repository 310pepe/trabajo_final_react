import React,{useState,useEffect} from "react";

import {obtenerUsuaros,infoEntre,updateEntre,crearUsuario,deleteEntre} from "../../actions/gym";
import { useDispatch} from "react-redux";

  
  
  
  

const Entrenadores =()=>{

  const datosPer = {
    'email':"",
    'NameUser':"",
    'name':"",
    'Telefono':"",
    'Eps':'',
  };
  const datosPerCr = {
    'email':"",
    'NameUser':"",
    'name':"",
    'Telefono':"",
    'Eps':'',
    'Rol':'entrenador',
    'password':'123456789'
  };
  const [pers, setPerso] = useState(datosPer);
  const [persCr, setPersoCr] = useState(datosPerCr);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setPerso({ ...pers, [name]: value });
  };
  const handleInputChange1 = event => {
    const { name, value } = event.target;
    setPersoCr({ ...persCr, [name]: value });
  };
  let clase=[];
  const [clases, setClases] = useState(clase);
  const dispatch = useDispatch();
  const traerInfo=(id)=>
  {
    dispatch(infoEntre(id)).then(response=>{
      const {name,NameUser,email,Telefono,Eps,id}=response;
      if(NameUser){
        setPerso({name,NameUser,email,Telefono,Eps,'index':id});
      }else{
        setPerso({name,email,Telefono,Eps});
      }
      
      
    });
  }
  console.log(pers);

  const guardar=(id)=>{
    dispatch(updateEntre(id,pers)).then(response=>{
      console.log(response);
      window.location.reload();
    });
  }
  
  const crear=()=>{
    console.log(persCr);
    dispatch(crearUsuario(persCr)).then(response=>{
      console.log(response);
      window.location.reload();
    })
  }

  const borrar=(id)=>{
    console.log(id);
    dispatch(deleteEntre(id)).then(response=>{
      console.log(response);
      window.location.reload();
    }).catch(e => {
      window.location.reload();
    });
  }

  useEffect(() => {
    dispatch(obtenerUsuaros()).then(response=>setClases(response));
  }, []);

    const MostrarEntr=(props)=>{ 
    let us = props.users;
    console.log(us);
    if(us && us.length>0)
    {
      let entrenadores= us.map(usuario=>{
        console.log(usuario);
      if(usuario.Rol=="entrenador")
      {
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
    
    return (<tbody>{entrenadores}</tbody>);
    }else{
      return (<span></span>)
    }
  }

    return( 
        <div class="row">
        
        
        
      <div class="col-12 mt-3"> 
        <div class="d-grid gap-2 mb-2">
            <button class="btn btn-primary " 
            type="button"
            data-bs-toggle="modal" 
            data-bs-target="#crear" >Crear</button>
        </div>
        <table class="table">
            
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
                <MostrarEntr users={clases}/>
              </table>

        </div>

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
        
    </div>
    )
}

export default Entrenadores;
//importaciones necesarias de react
import React,{useState} from "react";

//importacion necesaria de redux
import { useDispatch} from "react-redux";

//importacion de la accion verificarUsuario
import { verificarUsuario } from "../../actions/gym";

//importacion de css para este componente
import "./login.css";

//creacion del componente
const Login =()=>{

  //interface para el formulario
  const datosPer = {
    'email':"",
    'password':""
  };
  //creación de variable pra guardar los datos del formulario
  const [pers, setPerso] = useState(datosPer);
  //creacion de variable para saber si los datos son correctos
  const [verificacion, setSubmitted] = useState(false);

  //instaciasión de dispatch
  const dispatch = useDispatch();

  //función para obtener los datos del formulario
  const handleInputChange = event => {
    const { name, value } = event.target;
    setPerso({ ...pers, [name]: value });
  };

  //función que valida los datos
  const validatePerso = () => {
    
    //ejecutar la acción verificarUsuario
    dispatch(verificarUsuario(pers))
      .then(response => {
        //Si es correcto el token se guarda en el local storage y reenvia a home
        let token='';
        token=response.access_token;
        setSubmitted(false);
        localStorage.setItem('token', token);
        console.log(response);
        window.location="/home";
        
      })
      .catch(e => {
        //si algo sale mal se muestra el error en consola y visualmente al cambiar la variable verificacion
        console.log(e);
        setSubmitted(true);
      });
  };


    //renderización del componente
        return(
          
        <main>
          {/*inicio del formulario */}
      <form class="formulario" id="formulario">
        {/*Inicio input email */}
        <div class="formulario__grupo" id="grupo__correo">
          <label for="correo-in" class="formulario__label"
            >Correo Electrónico</label
          >
          <div class="formulario__grupo-input">
            <input
              type="email"
              class="formulario__input"
              name="email"
              id="correo-in"
              placeholder="correo@correo.com"
              onChange={handleInputChange}
            />
            <i class="formulario__validacion-estado fas fa-times-circle"></i>
          </div>
          <p class="formulario__input-error">
            El correo solo puede contener letras, numeros, puntos, guiones y
            guion bajo.
          </p>
        </div>

        {/* fin input email */}
        {/*inicio input password */}
        <div class="formulario__grupo" id="grupo__password">
          <label for="password-in" class="formulario__label">Contraseña</label>
          <div class="formulario__grupo-input">
            <input
              type="password"
              class="formulario__input"
              name="password"
              onChange={handleInputChange}
              id="password-in"
            />
          </div>
          <p class="formulario__input-error"></p>
        </div>
        {/*fin input password */}
        {/* validar si los datos son correctos */}
          { verificacion?(
        <div class="formulario__mensaje" id="formulario__mensaje">
          <p>
            <i class="fas fa-exclamation-triangle"></i> <b>Error:</b> el correo
            no esta registrado o la contraseña es erronea
          </p>
        </div>): <span></span> }
      </form>

            {/*fin del formulario */}
            {/*boton para enviar datos*/}
      <div class="formulario__grupo formulario__grupo-btn-enviar">
        <button
          type="submit"
          class="formulario__btn mb-2 mt-2"
          id="boton-enviar"
          onClick={validatePerso}
        >
          Enviar
        </button>
      </div>
     
    </main>   
        )
    
}

//exportación del componente;
export default Login;


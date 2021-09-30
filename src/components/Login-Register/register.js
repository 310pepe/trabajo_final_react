//importaciones necesarias de react
import React,{useState} from "react";

//importaciones necesarias de redux
import { useDispatch} from "react-redux";

//importación de las acciones crearUsuario y  verificarUsuario
import { crearUsuario,verificarUsuario } from "../../actions/gym";

//importacion de estilos
import "./login.css";

//creacion del componente
const Register =()=>{
    
  //interface para los datos del formulario
  const datosPer = {
    'email':"",
    'password':"",
    'password2':"",
    'NameUser':"",
    'name':"",
    'Telefono':"",
    'Eps':'',
    'TelefonoEmergencia':"",
    'Rol':'usuario'
  };

  //creacion de variable para guardar los datos del formulario
  const [pers, setPerso] = useState(datosPer);

  //creacion de variable para validar que los datos sean correctos
  const [verificacion, setSubmitted] = useState(false);

  //instasiación del dispatch
  const dispatch = useDispatch();

  //funcion para capturar los datos del formulario
  const handleInputChange = event => {
    const { name, value } = event.target;
    setPerso({ ...pers, [name]: value });
  };

  //funcion para crear un nuevo usuario
  const crearPerso = () => {
    //ejecutar accion crearUsuario
    dispatch(crearUsuario(pers))
      .then(response => {
        //crear variables con el email y paswword ingresados
        const {password,email} =pers;
        //establecer la información en un json
        let pers1={
          password,
          email
        }
        //ejecutar accion verificarUsuario para generar el token
        dispatch(verificarUsuario(pers1)).then(response => {
          let token='';
          token=response.access_token;
          localStorage.setItem('token', token);
          window.location="/home";
        })
      })
      .catch(e => {
        //mostrar el error y mostrar mensaje de error
        console.log(e);
        setSubmitted(true);
      });
  };

  //renderización del componente
        return(
          <main>
            {/*Inicio del formulario+ */}
          <form class="formulario" id="formulario">
            {/*inicio imput usuario */}
            <div class="formulario__grupo" id="grupo__usuario">
              <label for="usuario" class="formulario__label">Usuario</label>
              <div class="formulario__grupo-input">
                <input
                  type="text"
                  class="formulario__input datoinput"
                  name="NameUser"
                  id="usuario"
                  placeholder="john123"
                  onChange={handleInputChange}
                />
                <i class="formulario__validacion-estado fas fa-times-circle"></i>
              </div>
              <p class="formulario__input-error">
                El usuario tiene que ser de 4 a 16 dígitos y solo puede contener
                numeros, letras y guion bajo.
              </p>
            </div>
            {/*fin input usuario */}
            {/*inicio input nombre */}
            <div class="formulario__grupo" id="grupo__nombre">
              <label for="nombre" class="formulario__label">Nombre</label>
              <div class="formulario__grupo-input">
                <input
                  type="text"
                  class="formulario__input datoinput"
                  name="name"
                  id="nombre"
                  placeholder="John Doe"
                  onChange={handleInputChange}
                />
                <i class="formulario__validacion-estado fas fa-times-circle"></i>
              </div>
              <p class="formulario__input-error">
                El usuario tiene que ser de 4 a 16 dígitos y solo puede contener
                numeros, letras y guion bajo.
              </p>
            </div>
            {/*fin input nombre */}
           {/*inicio input contraseña */}
            <div class="formulario__grupo" id="grupo__password">
              <label for="password" class="formulario__label">Contraseña</label>
              <div class="formulario__grupo-input">
                <input
                  type="password"
                  class="formulario__input datoinput"
                  name="password"
                  id="password"
                  onChange={handleInputChange}
                />
                <i class="formulario__validacion-estado fas fa-times-circle"></i>
              </div>
              <p class="formulario__input-error">
                La contraseña tiene que ser de 4 a 12 dígitos.
              </p>
            </div>
            {/*fin input contraseña */}
            {/*inicio input repetir contraseña */}
            <div class="formulario__grupo" id="grupo__password2">
              <label for="password2" class="formulario__label"
                >Repetir Contraseña</label>
              <div class="formulario__grupo-input">
                <input
                  type="password"
                  class="formulario__input datoinput"
                  name="password2"
                  id="password2"
                  onChange={handleInputChange}
                />
                <i class="formulario__validacion-estado fas fa-times-circle"></i>
              </div>
              <p class="formulario__input-error">
                Ambas contraseñas deben ser iguales.
              </p>
            </div>
            {/* fin input repetir contraseña */}
            {/*inicio input correo electronico */}
            <div class="formulario__grupo" id="grupo__correo">
              <label for="correo" class="formulario__label">Correo Electrónico</label>
              <div class="formulario__grupo-input">
                <input
                  type="email"
                  class="formulario__input datoinput"
                  name="email"
                  id="correo"
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
            {/*fin input correo electronico */}
            {/*inicio input telefono */}
            <div class="formulario__grupo" id="grupo__telefono">
              <label for="telefono" class="formulario__label">Teléfono</label>
              <div class="formulario__grupo-input">
                <input
                  type="text"
                  class="formulario__input datoinput"
                  name="Telefono"
                  id="telefono"
                  placeholder="4491234567"
                  onChange={handleInputChange}
                />
                <i class="formulario__validacion-estado fas fa-times-circle"></i>
              </div>
              <p class="formulario__input-error">
                El telefono solo puede contener numeros y el maximo son 14 dígitos.
              </p>
            </div>
            {/*fin input telefono */}
            {/*inicio input eps */}
          <div class="formulario__grupo" id="grupo__eps">
            <label for="grupo__eps" class="formulario__label">EPS</label>
            <div class="formulario__grupo-input">
              <input type="text" 
              class="formulario__input datoinput" 
              name="Eps" 
              id="eps"
              onChange={handleInputChange}
               placeholder="cafam"/>
              <i class="formulario__validacion-estado fas fa-times-circle"></i>
                        
            </div>
            <p class="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
          </div>
          {/*fin input eps */}
          {/*inicio input telefo de familiar */}
          <div class="formulario__grupo" id="grupo__telefonoencasodeemergencia">
            <label for="telefonoencasodeemergencia" class="formulario__label">Teléfono de algún familiar</label>
            <div class="formulario__grupo-input">
              <input type="text" 
              class="formulario__input datoinput" 
              onChange={handleInputChange}
              name="TelefonoEmergencia" id="telefonoencasodeemergencia" placeholder="4491234567"/>
              <i class="formulario__validacion-estado fas fa-times-circle"></i>
                        
            </div>
            <p class="formulario__input-error">El telefono solo puede contener numeros y el maximo son 14 dígitos.</p>
          </div>
          {/*fin input telefono familiar */}
          {/*inicio input condiciones */}
            <div class="formulario__grupo" id="grupo__terminos">
              <label class="formulario__label">
                <input
                  class="formulario__checkbox"
                  type="checkbox"
                  name="terminos"
                  id="terminos"
                />
                Acepto los Terminos y Condiciones
              </label>
            </div>
            {/*fin input condiciones */}
            {/*validacion de informacion  */}
            { verificacion? (
            <div class="formulario__mensaje" id="formulario__mensaje">
              <p>
                <i class="fas fa-exclamation-triangle"></i> <b>Error:</b> Por favor
                rellena el formulario correctamente.
              </p>
            </div>):(<span></span>)}
              {/* fin validacion de informacion */}
              {/*boton para enviar el formulario */}
            <div class="formulario__grupo formulario__grupo-btn-enviar">
              <button type="button" class="formulario__btn" id="btn-en" onClick={crearPerso} >
                Enviar
              </button>
            </div>
          </form>
        </main>
        )
    
}

//exportacion del componente
export default Register;

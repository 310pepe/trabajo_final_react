//importación de la clase Component e importación de React
import React,{Component} from "react";

//creación del componente Virtual
class Virtual extends Component{
    render(){
      //renderización del componente
        return(
            <div class="container-fluid">
                  <div class="row">
                    <div class="col fondo-negro">
                      <p class="col-sm text-center  fw-bold fs-5">
                        ¡QUE NADA TE DETENGA!
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-3 ms-auto">
                      <br />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col fondo-negro">
                      <p class="col-sm ">
                       
                      </p>
                      <div class="row">
                        <div class="col-md-4">
                          <img
                            src="../img/mujeryoga.png"
                            alt="Imagen mujer haciendo yoga"
                            class="img-compl"
                            height="300px"
                            width="360px"
                          />
                        </div>
                        
                        <div class="col-md-8">
                          <p class="col-sm ">
                          Debido a la incontingencia mundial, por tu cuidado y el
                        de nosotros decidimos tener una nueva experiencia de
                        trabajo contigo. Seguiremos con el compromiso de
                        apoyarte al máximo sin necesidad de salir de casa, para
                        que sigas mejorando tu estado físico y mental. Por lo
                        anterior te ofrecemos dos de nuestros servicios de
                        manera virtual y cómoda para que te animes y hagas parte
                        de esta nueva metodología.
                          </p>
                        </div>
                        
                      </div>
                      <div class="row">
                      <div class="col-md-8">
                          <p class="col-md ">
                          <br/>En nuestro programa de yoga virtual, tendrás el
                            acompañamiento de profesionales, en una clase casi
                            personalizada. !Qué esperas, has parte¡
                            En nuestras clases de entrenamiento funcional
                            alcanzaras un mejor estado físico ya que siempre
                            tendrás a uno de nuestros profesionales guiándote
                          </p>
                        </div>
                      <div class="col-md-4">
                          <img
                            src="../img/hombreejercicio.png"
                            alt="Imagen hombre haciendo ejercicio"
                            class="img-compl"
                            height="300px"
                            width="360px"
                          />
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
        )
    }
}

//exportación del componente
export default Virtual;
import React,{Component} from "react";

class Experiencia extends Component{
    render(){
        return(
            <div class="container-fluid">
              <div class="row">
                <div class="col fondo-negro">
                  <p class="col-sm text-center  fw-bold fs-5">
                    ! Pensando en Ti ¡
                  </p>
                </div>
              </div>
              <div class="row" >
                <div class="col">.</div>
              </div>
              <div class="row">
                <div class="col fondo-negro">
                  <p class="col-sm ">
                    Gym style’s cuenta con una gran rama de entrenadores
                    calificados y profecionalmente preparados para enseñarte y
                    ejercer con ellos tu nuevo estilo de vida, ya llevamos algun
                    tiempo cambiando vidas de muchas personas haciendo de su
                    vida un estilo mas saludable y bueno.
                  </p>
                  <div class="row">
                    <div class="col-md-4">
                      <img
                        src="img/gruposelfie.png"
                        alt="Imagen mapa provisional"
                        class="img-fluid"
                      />
                    </div>
                    <div class="col-md-8">
                      
                        Nuestro equipo de trabajo cuenta con entrenadores
                        profesionales para enseñarte a llevar un mejor estilo de
                        vida saludable mediante clases que te ofrece Gym style’s
                        <p class="col-sm ">-Boxeo</p>
                        <p class="col-sm ">-Yoga</p>
                        <p class="col-sm ">-Trx</p>
                        <p class="col-sm ">
                          -Entrenamiento funcional
                        </p>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

export default Experiencia;
import React from "react";

const ClaseD = (props)=>{
    const dia= props.day;
    const clases= props.clases;

    console.log(dia);
    console.log(clases);
    const Prueba=()=>{

        let hola =clases.map(clase=>{
            if(clase && clase.day===dia)
            {
               console.log('hola');
               return (
                <div class="card flex-row flex-wrap">
                    <div class="card-header border-0">
                        <img class="img-fluid" src={clase.img} alt={clase.tipo}/>
                    </div>
                    <div class="card-block px-2">
                        <h4>
                            {clase.title}
                        </h4>
                        <p>
                            <strong>Hora de la clase:</strong> {clase.hora} <br/>
                            <strong>Instructor:</strong> {clase.inst} <br/>
                            <strong>Sede:</strong> { clase.sede } <br/>
                            <strong>Dia:</strong> {clase.dia} <br/>
                        </p>
                    </div>
                </div>
               )
            }
        });
        console.log(hola);
        return (<div>{hola}</div>);
    }
    return(
        <Prueba/>
    )
}

export default ClaseD;
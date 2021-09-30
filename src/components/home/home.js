import React,{Component} from "react";
import { Parallax } from "react-parallax"; 


    const mensaje="!para poder estar un una clase te tienes que registrar¡";
    const token= localStorage.getItem('token');

    function NumberList(props) {
        const numbers = props.numbers;
        const listItems = numbers.map((number) =>
        <div class="card col-3 mt-3">
            <img src={number.src} class="card-img-top mt-1" alt={number.alt} />
            <div class="card-body">
                <h5 class="card-title"> {number.title} </h5>
                <p class="card-text"> {number.description} </p>
                {
                    token?(<span></span>
                                            
                    ):(<p>{mensaje}</p>)
                }
            </div>
        </div>
        );
        const imagen1="https://i.pinimg.com/originals/06/b9/29/06b92953cb92f01d1b9f5e27e1e7c8e5.jpg";
        const inlineStyle={
            background:'#fff',
            left:'50%',
            top:'50%',
            position:'absolute',
            padding:'20px',
            Transform:'translate(-50%,-50%)'
        }
        return (
            <div class="row ">
            <Parallax bgImage={imagen1} strength={500}>
            <div style={{height:500}}>
                <div style={inlineStyle}><strong>Bienvenidos a GYM STYLE'S</strong></div>
            </div>
            </Parallax>
            {listItems}
                      </div>
        );
      }

class Home extends Component{
    //numbers = [1, 2, 3, 4, 5];
    cards =[ 
        {src:"img/1boxeo.png",
        alt:"Imagen de clases de boxeo",
        title:"Boxeo",
        description:"En esta clase podras encontrar y apoyarte de nuestros expertos en boxeo."    
    },
        {src:"img/2yoga.png",
        alt:"Imagen de clase de yoga",
        title:"Yoga",
        description:"En esta clase podras encontrar y apoyarte de nuestros expertos en Yoga.Empieza a llevar tu estilo de vida saludable."    
    },
        {src:"img/3trx.png",
        alt:"Imagen de clases de trx",
        title:"Trx",
        description:"En esta clase podras encontrar y apoyarte de nuestros expertos en TRX. Empieza a llevar tu estilo de vida saludable. "    
    },
        {src:"img/4entrenamiento.png",
        alt:"Imagen de clase de entrenamiento funcional",
        title:"Entrenamiento Funcional",
        description:"En esta clase podras encontrar y apoyarte de nuestros expertos en Entrenamiento funcional. Empieza a llevar tu estilo de vida saludable."    
    }];
    render(){
            return(
                <div ><NumberList numbers={this.cards} /> </div>
            )
    }
}


export default Home;
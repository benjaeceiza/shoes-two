
import { useState } from "react"

import zapas1 from "../assets/carrucel/nike-jordan1.png";
import zapas2 from "../assets/carrucel/nike-jordan2.png";
import zapas3 from "../assets/carrucel/nike-jordan3.png";
import zapas4 from "../assets/carrucel/nike-jordan4.png";
import zapas5 from "../assets/carrucel/nike-jordan5.png";
import zapas6 from "../assets/carrucel/nike-jordan6.png";
import zapas7 from "../assets/carrucel/nike-jordan7.png";


const Carrucel = () => {


    const [color, setColor] = useState(1)

    const restar = () => {

        if (color == 1) {

            setColor(7)
        } else {

            setColor(color - 1)
        }
        console.log(color)
    }

    const sumar = () => {

        if (color == 7) {

            setColor(1)
        } else {
            setColor(color + 1)
        }
        console.log(color)
    }




    return (
        <>
            <div id="carouselExample" className={"carousel slide fondo color"+color}>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={zapas1} className="d-block w-100 img-carrucel" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={zapas2} className="d-block w-100 img-carrucel" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={zapas3} className="d-block w-100 img-carrucel" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={zapas4} className="d-block w-100 img-carrucel" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={zapas5} className="d-block w-100 img-carrucel" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={zapas6} className="d-block w-100 img-carrucel" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={zapas7} className="d-block w-100 img-carrucel" alt="..."/>
                    </div>
                  
                    
                </div>
                <button onClick={() => restar()} className="carousel-control-prev fondo-btn" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button onClick={() => sumar()} className="carousel-control-next fondo-btn" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )

}


export default Carrucel;
import { useContext, useState } from "react";
import Brief from "./Brief";
import { CartContext } from "../contexto/CartContext";
import { Link } from "react-router-dom";


const Checkout = () => {

    const { carrito } = useContext(CartContext);
    const [nombreComprador, setNombreComprador] = useState("");
    const [numeroComprador, setNumeroComprador] = useState("");
    const [emailComprador, setEmailComprador] = useState("");
    const [apellidoComprador, setApellidoComprador] = useState("");


    if (carrito.length <= 0) {

        return (
            <div className="text-center cargando">
                <h1>CARRITO VACIO</h1>
                <Link to={"/"}><button className="boton-ir-pagar">Volver a Catálogo</button></Link>
            </div>
        )

    }



    return (
        <>
            <div className="contenedor-checkout">
                <div className="contenedor-form">
                    <h1 className="">Completa tus datos</h1>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nombre" aria-label="Username" aria-describedby="basic-addon1" onInput={(e) => { setNombreComprador(e.target.value) }} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Apellido" aria-label="Username" aria-describedby="basic-addon1" onInput={(e) => { setApellidoComprador(e.target.value) }} />
                    </div>

                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Correo Electronico" aria-label="Recipient's username" aria-describedby="basic-addon2" onInput={(e) => { setEmailComprador(e.target.value) }} />
                    </div>

                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Número" aria-label="Recipient's username" aria-describedby="basic-addon2" onInput={(e) => { setNumeroComprador(e.target.value) }} />
                    </div>

                </div>
                <div className="contenedor-detalle-compra">
                    <Brief nombre={nombreComprador} telefono={numeroComprador} email={emailComprador} apellido={apellidoComprador} />
                </div>

            </div>
        </>
    )
}

export default Checkout;
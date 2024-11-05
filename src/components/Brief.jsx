import { useContext } from "react";
import { CartContext } from "../contexto/CartContext";
import Pagar from "./Pagar";



const Brief = ({nombre,telefono,email,apellido}) => {

   

    const { carrito } = useContext(CartContext);

    let totalCompra = 0;

    {
        carrito.map(elemento => {
            totalCompra = (totalCompra + elemento.total)

        })
    }

    return (
        <>
            <h1>Detalles de la compra</h1>
            <table className="table table align-middle">
                <thead>
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {carrito.map(carrito => (
                        <tr key={carrito.numeroCarrito}>
                            <th scope="row"><img height={80} src={carrito.imagen} alt={carrito.nombre} /></th>
                            <td>{carrito.nombre}</td>
                            <td>{carrito.cantidad}</td>
                            <td>$ {carrito.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="contenedor-total-boton">
                <p><b>Total a Pagar ${totalCompra}</b></p>
                <Pagar nombre={nombre} telefono={telefono} email={email} apellido={apellido} finalCompra={totalCompra}/>
            </div>
        </>
    )
}

export default Brief;
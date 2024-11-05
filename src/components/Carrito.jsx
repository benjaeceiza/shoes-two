import { useContext, useState } from "react";
import { CartContext } from "../contexto/CartContext";
import tachito from "../assets/eliminar.png"
import { Link } from "react-router-dom";



const Carrito = () => {

    const { visible, carrito, eliminarProducto,setVisible } = useContext(CartContext);

    const [contador, setContador] = useState(0);
    let totalCompra=0;

    {carrito.map(elemento =>{
        totalCompra = (totalCompra+elemento.total)
       
    })}





    if (carrito.length == 0) {
        return (
            <>
                {visible ? <div onMouseLeave={() => {setVisible(false)}} className="carrito-vacio">
                    <h1 className="titulo-carrito-vacio">Carrito vacio</h1>
                </div> : ""}
            </>
        )
    }


    return (
        <>
            {visible ? <div onMouseLeave={() => {setVisible(false)}} className="contenedor-tabla-boton">
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
                                <th scope="row"><img height={80} src={carrito.imagen} alt="" /></th>
                                <td>{carrito.nombre}</td>
                                <td>{carrito.cantidad}</td>
                                <td>${carrito.total}</td>
                                <td><img onClick={() => { eliminarProducto(carrito.numeroCarrito) }} height={25} src={tachito} alt="" /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="contenedor-total-boton">
                    <p className="total">$ {totalCompra}</p>
                    <Link to={"/cart"}><button className="boton-ir-pagar">ir a pagar</button></Link>
                </div>
            </div> : ""}

        </>
    )

}


export default Carrito;
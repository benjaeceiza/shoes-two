import { useContext} from "react"
import { CartContext } from "../contexto/CartContext"


const ItemQuantitySelector = ({item,nombre}) => {

    const {cantidad,setCantidad,carrito} = useContext(CartContext);
         
    let totalStock = 0;

   

    const sumarUnidad = () => {

       
        if(cantidad < (item.stock-totalStock)){
            setCantidad(cantidad+1)
            
        }

    }

    const restarUnidad = () =>{
        if(cantidad >= 1){
            setCantidad(cantidad-1)
        }

    }

    carrito.map(elemento =>{
        if(elemento.nombre == nombre){
             totalStock=(elemento.cantidad+totalStock)  
        }
    })
     
    if(item.stock-totalStock==0){
        setCantidad(0);
    }


    return (
        <>
            <div className="contenedor-precio-boton-2">
                <button className="boton-stock" onClick={restarUnidad}>-</button>
                <p className="cantidad">{cantidad}</p>
                <button className="boton-stock" onClick={sumarUnidad}>+</button>
            </div>
        </>
    )
}

export default ItemQuantitySelector;
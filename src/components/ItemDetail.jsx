
import { useContext } from "react"
import AddItemButton from "./AddItemButton"
import Description from "./Description"
import ItemQuantitySelector from "./ItemQuantitySelector"
import Talles from "./Talles"


const ItemDetail = ({ item }) => {
    
 
    return (
        <>

            <div className="container my-5">
                <div key={item.numero} className="row">
                    <div className="col">
                        <img className="img-detail" src={item.imagen} alt={item.nombre} />
                    </div>
                    <div className="col text-center my-5">
                        <Description titulo={item.nombre} descripcion={item.descripcion} />
                        <Talles />
                        <div className="contenedor-precio-boton">
                            <div className="col">
                                <p><b>Precio: $ {item.precio}</b></p>
                                <ItemQuantitySelector item={item}  nombre={item.nombre}/>
                            </div>
                            <div className="col">
                                <AddItemButton item ={item} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )

}

export default ItemDetail
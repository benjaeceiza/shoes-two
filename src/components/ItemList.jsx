import { useState } from "react";
import Item from "./Item";


const ItemList = ({ productos }) => {

   

    return (
        <>
            {productos.map(producto => (
                    <Item productos={producto} />
            ))}
        </>
    )
}

export default ItemList
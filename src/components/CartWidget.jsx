

import { useContext } from "react"
import CarritoLogo from "../assets/carrito.png"
import { CartContext } from "../contexto/CartContext"



const CartWidget = () =>{

    const {setVisible,visible,carrito} = useContext(CartContext);

    const mostrarLista = () => {
        
       if(visible){
         setVisible(false)
       }else{

           setVisible(true) 
       }
    } 
     

    


    
    return(
        <>

        <div onClick={mostrarLista}   className="carrito-logo-numero">
         <img src={CarritoLogo} alt="imagen de Carrito" />
           {carrito.length > 0 ? <p>{carrito.length}</p>:""}
        </div>
          
        </>
    )
}

export default CartWidget
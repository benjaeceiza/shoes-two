
import { createContext, useState } from "react";



export const CartContext = createContext();


const CartContextProvider = ({children}) =>{

  
  
  
 
      // funcion que hace visible o no la lista del carrito
       const [visible,setVisible] = useState(false)

      
     // array de productos del carrito
    
      const [carrito,setCarrito] = useState([]);

      // Variable que determina la cantidad de productos

      const [cantidad,setCantidad] = useState(1)

      //variable que determina el numero del producto en la lista

      const[numCarrito,setNumCarrito] = useState(0);

      // funcion que agregar un objeto al array del carrito

      const agregarProducto = (item) => {

       if(cantidad > 0){

         setCarrito([...carrito,{numeroCarrito:numCarrito,cantidad:cantidad,total: item.precio*cantidad,...item}])
         setCantidad(1);
       }   

      }

      // funcion que elimina a un producto exacto del arrar de carrito

      const eliminarProducto = (numero) => {
      
       setCarrito(carrito.filter(elemento => elemento.numeroCarrito != numero));
        
      }
      

      const limpiarCarrito = () =>{
           
      setCarrito([])

      }


      return <CartContext.Provider value = {{visible,setVisible,carrito,setCarrito,agregarProducto,eliminarProducto,limpiarCarrito,cantidad,setCantidad,numCarrito,setNumCarrito}}>
        {children}
      </CartContext.Provider>
    
}


export default CartContextProvider
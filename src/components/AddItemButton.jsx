import { useContext } from "react"
import { CartContext } from "../contexto/CartContext"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const AddItemButton = ({ item }) => {

  const { agregarProducto, numCarrito, setNumCarrito,cantidad } = useContext(CartContext);
 
  const agregar = () => {

    setNumCarrito(numCarrito + 1)
    agregarProducto(item);
    if (cantidad>0){

      toast.success("Producto agregado a Carrito",{autoClose: 2000,theme: "dark",})
    }else{
      toast.error("Agrega un producto",{autoClose: 2000,theme: "dark",})
    }
     


  }

  return (
    <>
      <button onClick={agregar} className="btn-agregar-carrito">Agregar a Carrito</button>
      
      <ToastContainer />

    </>
  )
}


export default AddItemButton
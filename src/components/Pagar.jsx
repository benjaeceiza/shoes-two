import { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { CartContext } from '../contexto/CartContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';


const Pagar = ({ nombre, telefono, email, apellido, finalCompra }) => {

    const [orderId, setOrderId] = useState(0);

    const MySwal = withReactContent(Swal)
    const { carrito,limpiarCarrito } = useContext(CartContext)


    const controlPago = () => {

        if (nombre == "") {
            toast.error("Ingrese un nombre", { autoClose: 2000, theme: "dark", })

        } else {
            if (apellido == "") {
                toast.error("Ingrese un apellido", { autoClose: 2000, theme: "dark", })
            } else {
                if (email == "") {
                    toast.error("Ingrese un email", { autoClose: 2000, theme: "dark", })
                } else {
                    if (telefono == "") {
                        toast.error("Ingrese un número telefonico", { autoClose: 2000, theme: "dark", })
                    } else {
                        if (isNaN(telefono)) {
                            toast.error("Ingrese un número Válido", { autoClose: 2000, theme: "dark", })
                        } else {
                            pagoAprobado();
                        }

                    }
                }
            }
        }


    }

    const pagoAprobado = () => {
        MySwal.fire({
            title: <p>Procesando Pago</p>,
            timer: 1500,
            didOpen: () => {
                // `MySwal` is a subclass of `Swal` with all the same instance & static methods
                MySwal.showLoading()
            },
        }).then(() => {
            return MySwal.fire({
                icon: "success",
                title: "Pago Realizado",
                text: "GRACIAS POR SU COMPRA!",

            })
        })

        const order = {
            buyer: { nombre: nombre, apellido: apellido, telefono: telefono, email },
            items: carrito.map(producto => ({ id: producto.id, nombre: producto.nombre, cantidad: producto.cantidad, precio: producto.total })),
            precioFinal: finalCompra
        }

        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order).then(id => {
            setOrderId(id);
        })

       
       setTimeout(() =>{

           limpiarCarrito();

       },1500)





    }

    return (
        <>
            <button onClick={controlPago} className="boton-ir-pagar">pagar</button>
            <ToastContainer />
        </>
    )
}

export default Pagar;
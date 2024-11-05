
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loading from "./Loading";
import { CartContext } from "../contexto/CartContext";







const ItemDetailConteiner = () => {
 
   
    const {id} = useParams();
    const[item,setItem] = useState([]);
    const [cargando,setCargando] = useState(true)
    const {setCantidad} = useContext(CartContext);
     
    
    useEffect(() =>{
        
       const db = getFirestore();
       const docRef = doc(db,"productos",id);

       getDoc(docRef).then(snapShot =>{
         if(snapShot.exists()){
          
            setItem({id:snapShot.id,...snapShot.data()});
            setCargando(false)

         }else{
            console.error("error")
         }

       })
       
       setCantidad(1);
    },[id])

  
 

    return (
        <>
           {cargando ? <Loading/>:<ItemDetail item={item}/>}
        </>
    )
}

export default ItemDetailConteiner
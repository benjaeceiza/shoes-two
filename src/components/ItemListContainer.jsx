
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";



const ItemListContainer = () => {
  
  const [items,setItems] = useState([])
  const {idcategoria} = useParams();
  const [cargando,setCargando] = useState(true)

  useEffect(() =>{
   
    const db = getFirestore();
    const itemCollection = collection(db,"productos");
    const q = idcategoria ? query(itemCollection, where("categoria","==",idcategoria)) : itemCollection;

    getDocs(q).then(Snapshot =>{
      
      if(Snapshot.size > 0){
        
        setItems(Snapshot.docs.map(documento => ({id:documento.id,...documento.data()})));
        setCargando(false)
      }else{
        console.error("error")
      }
    })


  },[idcategoria])

  


  return (
    <>{cargando ? <Loading/> : 
      <div className="container my-5">
        <div className="row">

          <ItemList productos={items} />

        </div>
      </div>}
    
    </>

  )
}

export default ItemListContainer
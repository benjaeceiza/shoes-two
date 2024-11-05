
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/NavBar'
import ItemDetailConteiner from './components/ItemDetailContainer'
import Footer from './components/Footer'
import FooterMob from './components/FooterMob'
import CartContextProvider from './contexto/CartContext'
import Carrito from './components/Carrito'
import Checkout from './components/Checkout'
import NavBarMob from './components/NavBarMob'
import Inicio from './components/Inicio'


function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <NavBarMob/>
          <Carrito />
          <Routes>
            <Route path={"/"} element={<Inicio/>} />
            <Route path={"/productos"} element={<ItemListContainer/>}/>
            <Route path={"/category/:idcategoria"} element={<ItemListContainer/>}/>
            <Route path={"/item/:id"} element={<ItemDetailConteiner />}/>
            <Route path={"/cart"} element={<Checkout/>}/>
          </Routes>
          <Footer />
          <FooterMob />
        </BrowserRouter>
      </CartContextProvider>
    </>
  )
}

export default App

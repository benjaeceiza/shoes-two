
import instagram from "../assets/logos-redes/logo-instagram.png";
import youtube from "../assets/logos-redes/logo-youtube.png";
import facebook from "../assets/logos-redes/logo-facebook.png";
import x from "../assets/logos-redes/logo-x.png";
import puntero from "../assets/logos-redes/puntero.png";

const Footer = () => {

    return (
        <>
            <footer className="footer-contenedor bg-black" >
                <div className="row">
                    <div className="col">
                        <h3 className="footer-subtitulo">IR A TIENDA</h3>
                        <ul className="footer-lista">
                            <li className="footer-item"><a className="footer-link" href="#"></a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3 className="footer-subtitulo">AYUDA</h3>
                        <ul className="footer-lista">
                            <li className="item-lista"><a className="footer-link" href="#"></a></li>
                            <li className="footer-item"><a href="" className="footer-link">Envíos y entregas</a></li>
                            <li className="footer-item"><a href="" className="footer-link">Devoluciones</a></li>
                            <li className="footer-item"><a href="" className="footer-link">Cambios</a></li>
                            <li className="footer-item"><a href="" className="footer-link">Opciones de pago</a></li>
                            <li className="footer-item"><a href="" className="footer-link">Contacto</a></li>
                            <li className="footer-item"><a href="" className="footer-link">Defensa al consumidor</a></li>
                            <li className="footer-item"><a href="" className="footer-link">Libro de quejas</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3 className="footer-subtitulo">NOVEDADES</h3>
                        <ul className="footer-lista">
                            <li className="footer-item"><a href="" className="footer-link">Encontrá tu calzado</a></li>
                            <li className="footer-item"><a href="" className="footer-link">¿Como elegir tu top?</a></li>
                            <li className="footer-item"><a href="" className="footer-link">Tips saludables</a></li>
                            <li className="footer-item"><a href="" className="footer-link">Promociones</a></li>
                            <li className="footer-item"><a href="" className="footer-link">¿Como sigo mi envío?</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3 className="footer-subtitulo">REDES SOCIALES</h3>
                        <ul className="footer-lista redes">
                            <li className="footer-item"><a href="#" className="footer-link"><img src={instagram} alt="" /></a></li>
                            <li className="footer-item"><a href="#" className="footer-link"><img src={x} /></a></li>
                            <li className="footer-item"><a href="#" className="footer-link"><img src={facebook} alt="" /></a></li>
                            <li className="footer-item"><a href="#" className="footer-link"><img src={youtube} alt="" /></a></li>

                        </ul>
                    </div>
                </div>
                    <div className="subfooter">
                        <div className="ubicacion">
                            <img src={puntero} height={25} alt="Logo Ubicacion" />
                            <a href="">Argentina</a>
                            <p>© 2023 Southbay S.R.L. Todos los derechos reservados.</p>
                        </div>
                        <div className="terminos-condiciones">
                        <a href="">Términos y Condiciones</a>
                        <a href="">Política de Privacidad y Cookies</a>
                        </div>
                    </div>
            </footer>

        </>
    )
}

export default Footer
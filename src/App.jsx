import "./App.css";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import {
  MdShoppingCart,
  MdOutlineAccountCircle,
  MdMenu,
  MdClose,
  MdHome,
  MdCleaningServices,
  MdLocalDrink,
  MdWineBar,
  MdRestaurant,
  MdAcUnit,
  MdChildCare,
  MdInventory2,
  MdSchool,
  MdLocalPharmacy,
  MdBuild,
  MdFace,
  MdGrass,
  MdToys,
  MdEgg,
  MdPets,
  MdBakeryDining,
  MdLocalGroceryStore,
  MdKitchen,
  MdCategory,
  MdContactMail,
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdAccessTime,
  MdHelp,
  MdPrivacyTip,
  MdDescription,
} from "react-icons/md";


import ProductoDetalle from "./pages/cliente/ProductoDetalle";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import iconMerca from "./assets/iconmerca.png";
import promocion1 from "./assets/female-buying-food-supermarket-grocery-store.jpg";
import promocion2 from "./assets/family-supermarket-woman-brown-t-shirt-people-choose-products-mother-with-daughter.jpg";
import promocion3 from "./assets/vista-superior-caja-bocadillos-escolar.jpg";
import promocion4 from "./assets/family-supermarket-woman-brown-t-shirt-people-choose-products-mother-with-daughter.jpg";
import promocion5 from "./assets/vista-superior-caja-bocadillos-escolar.jpg";
import promocion6 from "./assets/vista-superior-caja-bocadillos-escolar.jpg";
import Productos_In from "./pages/cliente/Productos_In";


import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaXTwitter
} from "react-icons/fa6";

function App() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentX = useRef(0);

  
const handleMouseDown = (e) => {
  isDragging.current = true;
  startX.current = e.clientX;
  currentX.current = e.clientX;
};
   const handleMouseMove = (e) => {
     if (!isDragging.current) return;
   
     currentX.current = e.clientX;
   };
   
   const handleMouseUp = () => {
     if (!isDragging.current) return;
   
     isDragging.current = false;
   
     const distance = currentX.current - startX.current;
   
     if (Math.abs(distance) > 50) {
   
        if (distance < 0 && carouselIndex < 6) {
            setCarouselIndex(carouselIndex + 1);
        }
        
        if (distance > 0 && carouselIndex > 0) {
            setCarouselIndex(carouselIndex - 1);
        }
   
     }
   };


  return (
    <div className="home">

    <header className="navbar">
      <div className="nav-left">
     {menuOpen ? (
      <MdClose
          className="menu-icon"
          onClick={() => setMenuOpen(false)}
        />
      ) : (
        <MdMenu
          className="menu-icon"
          onClick={() => setMenuOpen(true)}
        />
      )} 
        
         <img
          src={iconMerca}           
          alt="Supermercados Merca"
         className="logo-img"
        />
            <span>Supermercados Merca</span>
  </div>


  <div className="nav-right">
  <MdShoppingCart
    className="cart-icon"
    onClick={() => navigate("/carrito")}
  />

      <MdOutlineAccountCircle
        className="login-icon"
        onClick={() => navigate("/login")}
      /></div>
    </header>



    {menuOpen && (
      <aside className="side-menu">    

        <div className="side-menu-title">
          <MdHome />
          <span>Categorías</span>
        </div>    

        <button>
          <MdHome />
          Accesorios del hogar
        </button>    

        <button>
          <MdCleaningServices />
          Limpieza del hogar
        </button>    

        <button>
          <MdLocalDrink />
          Bebidas
        </button>    

        <button>
          <MdWineBar />
          Vinos y licores
        </button>    

        <button>
          <MdRestaurant />
          Comida preparada
        </button>    

        <button>
          <MdAcUnit />
          Congelados y refrigerados
        </button>    

        <button>
          <MdChildCare />
          Bebés
        </button>    

        <button>
          <MdInventory2 />
          Despensa
        </button>    

        <button>
          <MdSchool />
          Escolar
        </button>    

        <button>
          <MdLocalPharmacy />
          Farmacia
        </button>    

        <button>
          <MdBuild />
          Ferretería
        </button>    

        <button>
          <MdFace />
          Higiene y belleza
        </button>    

        <button>
          <MdGrass />
          Jardinería
        </button>    

        <button>
          <MdToys />
          Juguetes
        </button>    

        <button>
          <MdEgg />
          Lácteos y huevos
        </button>    

        <button>
          <MdPets />
          Mascotas
        </button>    

        <button>
          <MdBakeryDining />
          Panadería y dulces
        </button>    

        <button>
          <MdLocalGroceryStore />
          Productos frescos
        </button>    

        <button>
          <MdKitchen />
          Cocina
        </button>    

      </aside>
    )}


<section className="hero"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
     >


<button
className="arrow left"
onClick={() =>
carouselIndex > 0 &&
setCarouselIndex(carouselIndex - 1)
}
>
❮
</button>
 
<button
className="arrow right"
onClick={() =>
carouselIndex < 6 &&
setCarouselIndex(carouselIndex + 1)
}
>
❯
</button>

<div  className="hero-track"
        style={{
           transform: `translateX(-${carouselIndex * 100}%)`
        }}
     >
{/* SLIDE principal */}
<div className="hero-slide hero-principal">


        <div className="hero-text">

          <h1>
            Supermercados Merca - Ahora Realiza tus Compras donde estes.....
          </h1>

          <p>
            Hacer las compras nunca a sido tan comodo, 
            descarga la app y prepara tus compras con mayor facilidad
          </p>

          <button className="hero-btn">
            Conocer Más
          </button>
  </div>
  </div>

  
{/* SLIDE 1*/}
        <div className="hero-slide promo-slide">
          <img src={promocion1} alt="Promoción 1" />
        </div>

{/* SLIDE 2*/}
        <div className="hero-slide promo-slide">
          <img src={promocion2} alt="Promoción 2" />
        </div>

{/* SLIDE 3*/}
        <div className="hero-slide promo-slide">
          <img src={promocion3} alt="Promoción 3" />
        </div>

{/* SLIDE 4*/}
        <div className="hero-slide promo-slide">
          <img src={promocion4} alt="Promoción 4"/>
        </div>

{/* SLIDE 5*/}
        <div className="hero-slide promo-slide">
          <img src={promocion5} alt="Promoción 5" />
        </div>

{/* SLIDE 6*/}
        <div className="hero-slide promo-slide">
          <img src={promocion6} alt="Promoción 6" />
        </div>
      </div>


    {/* INDICADORES */}
    <div className="indicadores">
    {/* Banner principal */}
        <span
            className={carouselIndex === 0 ? "activo" : ""}
            onClick={() => setCarouselIndex(0)}
        ></span>

        <span
            className={carouselIndex === 1 ? "activo" : ""}
            onClick={() => setCarouselIndex(1)}
        ></span>

        <span
            className={carouselIndex === 2 ? "activo" : ""}
            onClick={() => setCarouselIndex(2)}
        ></span>

        <span
            className={carouselIndex === 3 ? "activo" : ""}
            onClick={() => setCarouselIndex(3)}
        ></span>

        <span
            className={carouselIndex === 4 ? "activo" : ""}
            onClick={() => setCarouselIndex(4)}
        ></span>

        <span
            className={carouselIndex === 5 ? "activo" : ""}
            onClick={() => setCarouselIndex(5)}
        ></span>

        <span
            className={carouselIndex === 6 ? "activo" : ""}
            onClick={() => setCarouselIndex(6)}
        ></span>

    </div>
</section>
       <Productos_In />

<section className="social-section ">
  <h2>Síguenos en:</h2>

  <div className="social-icons">
    <a href="#" aria-label="Facebook">
      <FaFacebook />
    </a>

    <a href="#" aria-label="Instagram">
      <FaInstagram />
    </a>

    <a href="#" aria-label="TikTok">
      <FaTiktok />
    </a>

    <a href="#" aria-label="WhatsApp">
      <FaWhatsapp />
    </a>


    <a href="#" aria-label="X">
      <FaXTwitter />
    </a>
  </div>
</section>
<footer>

  <div className="footer-columns">


    <div className="footer-column">
      <h3>Quienes Somos</h3>

      <p>
        <MdHome />
        Misión y Visión
      </p>

      <p>
        <MdInventory2 />
        Beneficios
      </p>

      <p>
        <MdCategory />
        Servicios
      </p>

      <p>
        <MdContactMail />
        Promociones y Ofertas
      </p>
    </div>

    <div className="footer-column">
      <h3>Contacto</h3>

      <p>
        <MdEmail />
        mercasuperpedidos@merca.com
      </p>

      <p>
        <MdEmail />
        atencion_al_climerca@merca.com
      </p>


      <p>
        <MdPhone />
        +435-5464-64654
      </p>

      <p>
        <MdLocationOn />
        Sucursales
      </p>

      <p>
        <MdAccessTime />
        Horarios
      </p>
    </div>

    <div className="footer-column">
      <h3>Soporte</h3>

      <p>
        <MdHelp />
        Preguntas frecuentes
      </p>

      <p>
        <MdPrivacyTip />
        Política de privacidad
      </p>

      <p>
        <MdDescription />
        Términos y condiciones
      </p>

      <p>
        <MdHelp />
        Ayuda
      </p>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2026 Supermercados Merca. Todos los derechos reservados.</p>
  </div>

</footer>
    </div>
  );
}

export default App;
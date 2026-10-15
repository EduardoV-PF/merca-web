import ProductoDetalle from "./ProductoDetalle";
import "../../styles/Productos_In.css";
import { useEffect, useState } from "react";
import bebidas from "../../assets/categorias/bebidas.png";
import carnes from "../../assets/categorias/carness.png";
import lacteos from "../../assets/categorias/lacteos.png";
import frutas from "../../assets/categorias/frutas.png";
import limpieza from "../../assets/categorias/limpieza.png";
import mascotas from "../../assets/categorias/mascotas.png";
import panaderia from "../../assets/categorias/panaderia.png";


import tendencia1 from "../../assets/delicioso-sandwich-saludable-lonchera-galletas-cerezas.jpg";
import tendencia2 from "../../assets/caja-plana.jpg";
import tendencia3 from "../../assets/supemarttt.jpg";
import tendencia4 from "../../assets/ector.jpg";

import { useNavigate } from "react-router-dom";

function Productos_In() {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
 const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  
  const navigate = useNavigate();

  // URL del backend local
  const API_URL = "https://merca-api-qqzd.onrender.com";

  
  // URL del backend e render 
  //const API_URL = "http://127.0.0.1:8000";

  // Imágenes de las categorías
const imagenesCategorias = {
  bebidas,
  carnes,
  lacteos,
  panaderia,
  frutas,
  limpieza,
  mascotas,
};

  // Cargar productos destacados
  useEffect(() => {
    fetch(`${API_URL}/productos-destacados`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error HTTP: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Productos recibidos:", data);
        setProductos(data);
      })
      .catch((error) => {
        console.error("Error cargando productos:", error);
      });
  }, []);

  // Cargar categorías desde la base de datos
  useEffect(() => {
    fetch(`${API_URL}/categorias`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error HTTP: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Categorías recibidas:", data);
        setCategorias(data);
      })
      .catch((error) => {
        console.error("Error cargando categorías:", error);
      });
  }, []);

  // Normalizar nombres: Lácteos -> lacteos
   const obtenerClave = (nombre) => {
     const clave = (nombre || "")
       .toLowerCase()
       .normalize("NFD")
       .replace(/[\u0300-\u036f]/g, "")
       .trim();
   
     console.log("Original:", nombre);
     console.log("Clave:", clave);
   
     return clave;
   };


if (productoSeleccionado) {
  return (
    <ProductoDetalle
      id={productoSeleccionado}
    />
  );
}

  return (
    <section className="productos-in">
      {/* PRODUCTOS DESTACADOS */}
      <div className="productos-header">
        <h2>🛒 Productos Destacados</h2>
        <p>Descubre nuestras mejores ofertas y promociones.</p>
      </div>

      <div className="productos-grid">
        {productos.map((producto) => (
          <div className="producto-card" key={producto.id}


          //en desarrollo 

          //onClick={() => setProductoSeleccionado(producto.id)}
          >
            <div className="producto-img">
              <img
                src={
                  imagenesCategorias[
                    obtenerClave(producto.categoria)
                  ] || "/assets/producto-default.png"
                }
                alt={producto.categoria || "Producto"}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/assets/producto-default.png";
                }}
              />
            </div>

            <span className="producto-marca">
              {producto.marca}
            </span>

            <h3 className="producto-nombre">
              {producto.nombre}
            </h3>

            <span className="producto-precio">
              {producto.precio}
            </span>

            <button className="btn-carrito">
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>



      {/* BOTÓN VER MÁS */}
      <div className="ver-todos-productos">
        <button className="btn-vermas">
          Ver más productos
        </button>
      </div>




      {/* CATEGORÍAS DE LA BASE DE DATOS */}
      <section className="categorias-home">
        <h2>Categorías</h2>

        <div className="categorias-grid">
          {categorias.map((categoria) => {
            const clave = obtenerClave(categoria.nombre);

            return (
              <div
                className="categoria-item"
                key={categoria.id}
              >
                <div className="categoria-icono">
                  <img
                    src={
                      imagenesCategorias[clave] ||
                      "/assets/producto-default.png"
                    }
                    alt={categoria.nombre}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "/assets/producto-default.png";
                    }}
                  />
                </div>

                <p>{categoria.nombre}</p>
              </div>
            );
          })}
        </div>
      </section>





      {/* TENDENCIAS Y OFERTAS */}
      <section className="tendencias-home">
        <h2>Tendencias y Ofertas</h2>

        <div className="tendencias-grid">
          <div className="tendencia-banner">
            <img src={tendencia1} alt="Tendencia" />
          </div>

          <div className="tendencia-banner">
            <img src={tendencia2} alt="Tendencia" />
          </div>

          <div className="tendencia-banner">
            <img src={tendencia3} alt="Tendencia" />
          </div>

          <div className="tendencia-banner">
            <img src={tendencia4} alt="Tendencia" />
          </div>
        </div>
      </section>
    </section>
  );
}

export default Productos_In;

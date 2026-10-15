import "../../styles/ProductoDetalle.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import bebidas from "../../assets/categorias/bebidas.png";
import carnes from "../../assets/categorias/carness.png";
import lacteos from "../../assets/categorias/lacteos.png";
import frutas from "../../assets/categorias/frutas.png";
import limpieza from "../../assets/categorias/limpieza.png";
import mascotas from "../../assets/categorias/mascotas.png";
import panaderia from "../../assets/categorias/panaderia.png";

function ProductoDetalle() {

    const { id } = useParams();

    const [producto, setProducto] = useState(null);

    const API_URL = "http://127.0.0.1:8000";


    //configurar link render
    //const API_URL = "http://127.0.0.1:8000";


    const imagenesCategorias = {
  bebidas,
  carnes,
  lacteos,
  panaderia,
  frutas,
  limpieza,
  mascotas,
};


const obtenerClave = (nombre) => {
  return (nombre || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
};

    useEffect(() => {
        fetch(`${API_URL}/producto/${id}`)
            .then(res => res.json())
            .then(data => setProducto(data))
            .catch(err => console.error(err));
    }, [id]);

    if(!producto){
        return <h2>Cargando...</h2>;
    }

    return (
        <div className="detalle-container">

            <div className="detalle-img">
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

            <div className="detalle-info">

                <span className="detalle-marca">
                    {producto.marca}
                </span>

                <h1>
                    {producto.nombre}
                </h1>

                <p className="detalle-descripcion">
                    {producto.descripcion}
                </p>

                <div className="detalle-precio">
                    ${producto.precio}
                </div>

                <div className="detalle-datos">

                    <p>
                        <strong>Categoría:</strong>
                        {" "}
                        {producto.categoria_id}
                    </p>

                    <p>
                        <strong>Fecha de creación:</strong>
                        {" "}
                        {producto.fecha_creacion}
                    </p>

                </div>

                <button className="btn-agregar">
                    Agregar al carrito
                </button>

            </div>

        </div>
    );
}

export default ProductoDetalle;
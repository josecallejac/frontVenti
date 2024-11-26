import React, { useState, useEffect } from "react";

const TopList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Función para obtener los datos de la API
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://djangoventi.onrender.com/api/products/");
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const data = await response.json();
        setProducts(data); // Asigna los datos obtenidos al estado
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      } finally {
        setLoading(false); // Deja de mostrar el indicador de carga
      }
    };

    fetchProducts();
  }, []); // Se ejecuta solo una vez al montar el componente

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div className="container py-14">
      {/* header section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold">Nuestras pizzas</h1>
        <p>Este es nuestro top!</p>
      </div>
      {/* card section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((item, index) => (
          <div
            key={index}
            className="bg-white/30 p-5 sm:p-7 lg:p-6 rounded-3xl hover:scale-110 transition duration-300"
          >
           
            <div className="space-y-2">
              <p className="text-red-500">{item.rating || "⭐⭐⭐⭐⭐"}</p>
              <p className="text-lg font-semibold">{item.name}</p>
              <p>{item.description || item.desc}</p>
              <p className="text-lg font-semibold">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopList;

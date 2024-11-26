import React, { useState, useEffect } from "react";

const TopList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://djangoventi.onrender.com/api/products/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer <78cbe3644fa4d10b87e6f07be60fce2445a92ff6>", // Reemplaza <TU_TOKEN> con el token generado
          },
        });

        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div className="container py-14">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold">Nuestras pizzas</h1>
        <p>Este es nuestro top!</p>
      </div>
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

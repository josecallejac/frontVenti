import React from "react";
import pizzaMargarita from "../../assets/pizzaMargarita.jpg";
import pizzaPesto from "../../assets/pizzaPesto.jpg";

const FoodData = [
  {
    image: pizzaMargarita,
    rating: "⭐⭐⭐⭐⭐",
    price: "$10.000",
    name: "Pizza Margarita",
    desc: "Pizza Margarita a la Venti",
  },
  {
    image: pizzaPesto,
    rating: "⭐⭐⭐⭐⭐",
    price: "$12.000",
    name: "Pizza Pesto",
    desc: "Pizza con salsa de Pesto especial de Venti",
  },
  {
    image: pizzaPesto,
    rating: "⭐⭐⭐⭐⭐",
    price: "$15.000",
    name: "Pizza Pesto XL",
    desc: "Pizza XL con salsa de Pesto especial de Venti",
  },
];

const TopList = () => {
  return (
    <div className="container py-14">
      {/* header section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold">Nuestros pizzas</h1>
        <p>Este es nuestro top!</p>
      </div>
      {/* card section */}
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-8">
        {FoodData.map((item, index) => (
          <div
            key={index}
            className="bg-white/30 p-5 sm:p-7 lg:p-6 rounded-3xl hover:scale-110 transition duration-300 "
          >
            <img
              src={item.image}
              alt=""
              className="w-60  sm:w-40 sm:h-40 lg:w-[300px] mx-auto object-cover rounded-full img-shadow"
            />
            <div className="space-y-2">
              <p className="text-red-500">{item.rating}</p>
              <p className="text-lg font-semibold ">{item.name}</p>
              <p>{item.desc}</p>
              <p className="text-lg font-semibold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopList;
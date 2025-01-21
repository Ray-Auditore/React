import axios from "axios";
import { useState, useEffect } from "react";

export default function ShoppingCard() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Card</h1>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <li key={product.id} className="border p-4 rounded shadow">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover mb-2 rounded"
            />
            <div className="text-lg font-semibold">{product.title}</div>
            <div className="text-gray-700 mb-2">${product.price}</div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={() => setCart([...cart, product])}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mt-6">Cart</h2>
      <ul className="list-disc pl-6">
        {cart.map((item, index) => (
          <li key={index} className="text-gray-700 mb-1">
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}


import {   useEffect, useState } from "react";
import axios from "axios";

function CobaAxios() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data dari API
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response.data);
        setPosts(response.data); // Simpan data ke state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Kosongkan dependency array agar useEffect hanya berjalan sekali

  return (
    <div>
      <ul>
        {posts.map((product) => (
          <li key={product.id}>{product.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default CobaAxios;

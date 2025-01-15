import React from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Ini Adalah Halaman Utama</h1>
      <Link to="/about">Pergi ke Halaman About</Link>
    </div>
  );
}

function AboutPage() {
  return (
    <div>
      <h1>Ini Adalah Halaman About</h1>
      <Link to="/">Kembali ke Halaman Utama</Link>
    </div>
  );
}

function ErrorPage() {
  return (
    <div>
      <h1>Halaman Tidak Ditemukan</h1>
      <Link to="/">Kembali ke Halaman Utama</Link>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

function Ap21() {
  return <RouterProvider router={router} />;
}

export default Ap21;

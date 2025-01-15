import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

// Komponen untuk halaman utama
function CobaRouter() {
  return (
    <div>
      <h2>Halaman Utama</h2>
      <Link
        to="/Second"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Go to Second Place
      </Link>
    </div>
  );
}

// Komponen untuk halaman kedua
function SecondPlace() {
  return (
    <div>
      <h2>Halaman Kedua</h2>
      <Link
        to="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Back to Home
      </Link>
    </div>
  );
}

// Router konfigurasi
const router = createBrowserRouter([
  {
    path: "/",
    element: <CobaRouter />,
  },
  {
    path: "/Second",
    element: <SecondPlace />,
  },
]);

// Komponen utama aplikasi
function App20() {
  return <RouterProvider router={router} />;
}

export default App20;

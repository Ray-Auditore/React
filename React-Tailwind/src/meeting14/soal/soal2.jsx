import { createBrowserRouter, RouterProvider } from "react-router-dom";


import AxiosStore, { ProductDetail } from "./no2back";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AxiosStore />,
  },
  {
    path: "/:id",
    element: <ProductDetail />,
  },
]);

function Axioshop() {
  return <RouterProvider router={router} />;
}

export default Axioshop;

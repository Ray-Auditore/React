import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DetailProduct />,
  },
  {
    path: "/:id",
    element: <DetailProduct />,
  },
]);

function DetailProduct() {
  const { id } = useParams();
  return (
    <div>
      <h1>{id ? `Id Product: ${id}` : "Welcome to the Product Page"}</h1>
    </div>
  );
}

export default function CobauseParams() {
  return <RouterProvider router={router} />;
}

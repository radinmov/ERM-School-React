import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
// import HomePage from "./pages/HomePage";




const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/Login',
    element: <Login />
  },


]);



export default function Router() {
  return (
    <RouterProvider router={routes} />
  );
}
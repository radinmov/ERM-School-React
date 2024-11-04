import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { UserProfile } from "./Pages/UserProfile";


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/Login',
    element: <Login />
  },
  {
    path: '/UserProfile',
    element: <UserProfile />
  },


]);



export default function Router() {
  return (
    <RouterProvider router={routes} />
  );
}
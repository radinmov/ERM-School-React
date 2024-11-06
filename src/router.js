import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { UserProfile } from "./Pages/UserProfile";
import { HomeWork } from "./Pages/HomeWork";
import { HomeWorkUpload } from "./Pages/HomeWork/HomeWorkUpload";
import { PresentUser } from "./Pages/PresentUser";
import { Stationary } from "./Pages/Stationary";
import { ClassManegment } from "./Pages/ClassManegment";
import { UsersManegment } from "./Pages/UsersManegment";
import { Ticketing } from "./Pages/Ticketing";
import { Food } from "./Pages/Food";


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
  {
    path: '/HomeWork',
    element: <HomeWork />
  },
  {
    path: '/PresentUser',
    element: <PresentUser />
  },
  {
    path: '/Stationary',
    element: <Stationary />
  },
  {
    path: '/HomeWork/HomeWorkUpload',

    
    element: <HomeWorkUpload />
  },
  {
    path: '/ClassManegment',
    element: <ClassManegment />
  },
  {
    path: '/UsersManegment',
    element: <UsersManegment />
  },
  {
    path: '/Ticketing',
    element: <Ticketing />
  },
  {
    path: '/Food',
    element: <Food />
  },

]);



export default function Router() {
  return (
    <RouterProvider router={routes} />
  );
}
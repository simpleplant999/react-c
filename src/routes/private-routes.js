import About from "../views/about/About";
import Home from "../views//home/Home";
import Login from "../views/login/Login";

const privateRoutes = [
  {
    name: "Login",
    path: "/",
    component: <Login/>,
  },
  {
    name: "Home",
    path: "/home",
    component: <Home />,
  },
  {
    name: "About",
    path: "/about",
    component: <About />,
  },
];

export default privateRoutes;

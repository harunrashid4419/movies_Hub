import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home/Home";
import Main from "../Layout/Main";
import SingleMovie from "../components/Home/SingleMovie/SingleMovie";
import AllMovies from "../components/AllMoviesPage/AllMovies/AllMovies";
import Signup from "../components/Authentication/Signup/Signup";
import Login from "../components/Authentication/Login/Login";
import RequestMovies from "../components/AllMoviesPage/RequestMovies/RequestMovies";
import PrivateRoutes from "./PrivateRoutes";
import DashboardLayout from "../Layout/DashboardLayout";
import Users from "../components/Dashboard/Users/Users";
import UserRequestedMovies from "../components/Dashboard/UserRequestedMovies/UserRequestedMovies";
import MyRequest from "../components/Dashboard/MyRequest/MyRequest";
import AdminRoutes from "./AdminRoutes";
import Contact from "../components/ContactPage/Contact/Contact";
import About from "../components/AboutPage/About/About";
import TopRatedSingle from "../components/Home/TopRatedSingle/TopRatedSingle";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => fetch("https://movie-hub-server.vercel.app/movies"),
      },
      {
        path: "/movie/:id",
        loader: ({ params }) =>
          fetch(`https://movie-hub-server.vercel.app/movie/${params.id}`),
        element: <SingleMovie />,
      },
      {
        path: "/movies",
        element: <AllMovies />,
        loader: async () =>
          fetch("https://movie-hub-server.vercel.app/allMovies"),
      },
      {
        path: '/topRated/:id',
        element: <TopRatedSingle />,
        loader: ({params}) => fetch(`https://movie-hub-server.vercel.app/topRated/${params.id}`)
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/movieRequest",
        element: (
          <PrivateRoutes>
            <RequestMovies />
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />{" "}
      </PrivateRoutes>
    ),
    children: [
      {
        path: '/dashboard/myRequest',
        element: <MyRequest />
      },
      {
        path: "/dashboard/UserRequestedMovies",
        element: <AdminRoutes><UserRequestedMovies /></AdminRoutes>,
        loader: async () => fetch("https://movie-hub-server.vercel.app/movieRequested"),
      },
      {
        path: "/dashboard/user",
        element: <AdminRoutes><Users /></AdminRoutes>,
        loader: async () => fetch("https://movie-hub-server.vercel.app/allUser"),
      }
    ],
  },
]);

export default routes;

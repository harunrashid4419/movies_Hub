import {createBrowserRouter} from 'react-router-dom';
import Home from '../components/Home/Home/Home';
import Main from '../Layout/Main';
import SingleMovie from '../components/Home/SingleMovie/SingleMovie';
import AllMovies from '../components/AllMoviesPage/AllMovies/AllMovies';
import Signup from '../components/Authentication/Signup/Signup';
import Login from '../components/Authentication/Login/Login';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: async () => fetch('https://movie-hub-server.vercel.app/movies')
            },
            {
                path: '/movie/:id',
                loader: ({params}) => fetch(`https://movie-hub-server.vercel.app/movie/${params.id}`),
                element: <SingleMovie />
            },
            {
                path: '/movies',
                element: <AllMovies />,
                loader: async () => fetch('https://movie-hub-server.vercel.app/allMovies'),
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    }
])

export default routes;
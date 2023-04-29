import {createBrowserRouter} from 'react-router-dom';
import Home from '../components/Home/Home/Home';
import Main from '../Layout/Main';
import Movies from '../components/Home/Movies/Movies';
import SingleMovie from '../components/Home/SingleMovie/SingleMovie';
import AllMovies from '../components/AllMoviesPage/AllMovies/AllMovies';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: async () => fetch('http://localhost:5000/movies')
            },
            {
                path: '/movie/:id',
                loader: ({params}) => fetch(`http://localhost:5000/movie/${params.id}`),
                element: <SingleMovie />
            },
            {
                path: '/movies',
                element: <AllMovies />,
                loader: async () => fetch('http://localhost:5000/allMovies'),
            }
        ]
    }
])

export default routes;
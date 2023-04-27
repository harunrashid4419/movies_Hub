import {createBrowserRouter} from 'react-router-dom';
import Home from '../components/Home/Home/Home';
import Main from '../Layout/Main';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
])

export default routes;
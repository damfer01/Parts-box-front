import {
    createBrowserRouter,
} from 'react-router-dom';

import Register from '../pages/Register';
import Login from '../pages/login';


const router = createBrowserRouter([
    {
        path: "/",
        element: ( <Login /> ),
    },
    {
        path: "/register",
        element: ( <Register /> ),
    },

]);

export default router;

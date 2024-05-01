import Layout from "../components/layout/Layout";
import Home from '../pages/home/Home';
import Cows from '../pages/cows/Cows';
import Medical from '../pages/medical/Medical';
import Milke from '../pages/milke/Milke';
import NotFound from '../pages/notFound/NotFound'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'

const routes = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/cows',
                element: <Cows />
            },
            {
                path: '/medical',
                element: <Medical />
            },
            {
                path: '/milk',
                element: <Milke />
            },
            {
                path: '*',
                element: <NotFound />
            },
        ]
    },
])

export default function Router() {
    return (
        <RouterProvider router={routes} />
    )
}
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import Kontakt from './Kontakt.jsx';
import Meni from './Meni.jsx';
import Rezervacija from './Rezervacija.jsx';
import SignIn from "./signIn.jsx";
import SignUp from "./signUp.jsx";
import '../css/bootstrap.min.css'
import '../css/bootstrap-icons.css'
import '../css/slick.css'
import '../css/style.css'
import '../js/bootstrap.bundle.min.js'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/Kontakt",
        element: <Kontakt/>,
    },
    {
        path: "/Meni",
        element: <Meni/>,
    },
    {
        path: "/Rezervacija",
        element: <Rezervacija/>,
    },
    {
        path: "/SignIn",
        element: <SignIn/>,
    },
    {
        path: "/SignUp",
        element: <SignUp/>,
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
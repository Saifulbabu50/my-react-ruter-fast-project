import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Componnets/Root/Root';
import Home from './Componnets/Home/Home';
import AppliedJobs from './Componnets/AppliedJobs/AppliedJobs';
import ErrorPags from './Componnets/ErrorPags/ErrorPags';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPags></ErrorPags>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/applied',
        element:<AppliedJobs></AppliedJobs>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

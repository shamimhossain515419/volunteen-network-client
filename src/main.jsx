import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './Route/Route.jsx'
import Authprovider from './Authontication/Authprovider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className=' container mx-auto '>
 
    <React.StrictMode>
      <Authprovider>
        <RouterProvider router={Route}></RouterProvider>
      </Authprovider>

    </React.StrictMode>,
  </div>
)

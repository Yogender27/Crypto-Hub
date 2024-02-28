import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider,  createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import Exchange from './Components/Exchange.jsx'
import Coin from './Components/Coin.jsx'
import Home from './Components/Home.jsx'
import CoinDetails from './Components/CoinDetails.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
      <Route path='/' element = {<Home/>}/>
      <Route path='/exchange' element = {<Exchange/>}/>      
        <Route exact path='/coin' element={<Coin/>} />
        <Route path='/coin/:id' element={<CoinDetails/>} /> 

    </Route>
    

  )
)
  




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    
  </React.StrictMode>,
)

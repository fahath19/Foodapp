import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from '../../App'
import Body from './../src/Components/Body'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import OrderMenu from './Components/OrderMenu'
import Appstore from './ReduxFile/Appstore'
import { Provider } from 'react-redux'
import CartMenu from './Components/CartIMenu'
import ShrimmerUi1 from './Shrimmer/ShrimmerUi1'

const Layout=()=>{
   return(
    < Provider store={Appstore}>
    <div>
    
     <Header/>
     <Outlet/>
     <Footer/>
    </div>
    </Provider>
   )
}
const router=createBrowserRouter([{
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Body/>
    },
    {
      path:'/b',
      element:<ShrimmerUi1/>
    },
    {
      path:'/orderpage/:resid',
      element:<OrderMenu/>
    }
    ,{
      path:'/Cartpage',
      element:<CartMenu/>
    }
  
  ]
}])
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)

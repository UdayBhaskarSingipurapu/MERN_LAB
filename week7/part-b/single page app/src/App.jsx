import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import RootLayout from './RootLayout'
import Home from './components/home/Home';
import About from './components/about/About';
import Placements from './components/placements/Placements';
import Contact from './components/contact/Contact';
import Events from './components/events/Events';

function App({children}) {
  const browserRouter = createBrowserRouter([
    {
      path : '',
      element : <RootLayout />,
      children : [
        {
          path : '',
          element : <Home />
        },
        {
          path : '/about',
          element : <About /> 
        },
        {
          path : '/placements',
          element : <Placements />
        },
        {
          path : '/contact',
          element : <Contact />
        },
        {
          path : '/events',
          element : <Events />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={browserRouter}>{children}</RouterProvider>
  );
}

export default App

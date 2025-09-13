import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import { createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './Components/Layout/Applayout'
import Artists from './Components/Artists'
import Exhibitions from './Components/Exhibitions'
import ArtistDetail from './Components/ArtistDetail'
import Services from './Components/Services'
import ArtistRepresentation from './Components/ArtistRepresentation'
import ArtworkDetail from './Components/ArtworkDetail'
import ArtTherapy from './Components/ArtTherapy'


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
path:"services",
element:<Services/>
      },
      {
path:"ArtistRepresentation",
element:<ArtistRepresentation/>
      },
      {
path:"ArtTherapy",
element:<ArtTherapy/>
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "artists",
        element: <Artists />
      },
      {
        path: "exhibitions",
        element: <Exhibitions />,
      },
      {
        path: "artists/:artistName",
        element: <ArtistDetail />,
      },
      {
  path: "artists/:artistName/artwork/:artworkId",
  element: <ArtworkDetail />,
},

    ]
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

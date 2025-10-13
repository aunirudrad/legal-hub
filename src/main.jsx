import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Root from './pages/Root.jsx'
import Attorneys from './pages/Attorneys.jsx'
import Blog from './pages/Blog.jsx'
import Contact from './pages/Contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        path: '/',
        Component: Home
      },
      {
        path: 'about',
        Component: About
      },
      {
        path: 'attorneys',
        Component: Attorneys
      },
      {
        path: 'blog',
        Component: Blog
      },
      {
        path: 'contact',
        Component: Contact
      }

    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Course from './pages/Course';
import Blog from './pages/Blog';
import Blogdetails from './pages/Blogdetails';
import Error404 from './pages/Error404';
import Form from './pages/Form';

const root = ReactDOM.createRoot(document.getElementById('root'));

let allRoute = createBrowserRouter(
  [
    // Static Routing start
    {
      path: '/',
      element: <Home />
    },
    {
      path: 'about-us',
      element: <About />

    },
    {
      path: 'course',
      element: <Course />
    },
    {
      path: 'blog',
      element: <Blog />
    },
    // Static Routing end 

    // Dynamic Routing start 
    {
      path: 'blog/:id',
      element: <Blogdetails />
    },
    // Dynamic Routing end 
    // error 404 start
    {
      path: '*',
      element: <Error404 />
    },
    // error 404 end 
    {
      path:"form",
      element: <Form/>

    }
  ]
)

root.render(
  <React.StrictMode>
    <RouterProvider router={allRoute} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

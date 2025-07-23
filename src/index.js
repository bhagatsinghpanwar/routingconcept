import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Course from './pages/Course';
import Blog from './pages/Blog';

const root = ReactDOM.createRoot(document.getElementById('root'));

let allRoute = createBrowserRouter(
  [
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'about-us',
      element:<About/>

    },
    {
      path : 'course',
      element: <Course/>
    },
    {
      path : 'blog',
      element: <Blog/>
    }
  ]
)

root.render(
  <React.StrictMode>
    <RouterProvider router={allRoute}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

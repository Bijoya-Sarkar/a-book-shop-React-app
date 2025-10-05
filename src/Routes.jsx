import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Root from './Pages/Root/Root';
import Errorpage from './Pages/ErrorPage/Errorpage';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import BookDetails from './Pages/BookDetails/BookDetails';
import ReadList from './Pages/ReadList/ReadList';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<Errorpage></Errorpage>,
    children: [
      {
        index: true,
        loader:()=>fetch('booksData.json'),
        path:"/",
        Component:Home,

      },
      {
        path:"/about",
        Component:About,
      },
      {
        path: 'readList',
        loader:()=>fetch('booksData.json'),
        Component:ReadList,
      },
      {
        path:'/bookDetails/:id',
        loader:()=>fetch('./booksData.json'),
        Component:BookDetails,
      }
    ]
  },
]);


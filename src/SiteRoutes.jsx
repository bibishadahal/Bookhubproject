import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context.';
import './index.css';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
//import Library from './pages/Library/Library';
import PrivateRoute from './PrivateRoute';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

export const SiteRoutes = () => <BrowserRouter>
  
  <AppProvider>    
       <Routes>  
        <Route path = "/" element = {<Home />}>
          <Route path = "about" element = {<About />} />
          {/* <Route path = "library" element = {<Library />} /> */}
          <Route path = "book" element = {<BookList />} />
          <Route path = "/book/:id" element = {<BookDetails />} />
          </Route>
      </Routes>
  </AppProvider>
  </BrowserRouter>

  
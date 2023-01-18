import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/main/home";
import Vochmiban from "./components/main/product-card/Vochmiban";
import Layout from "./Layout";
import Catalog from './components/main/catalog/index';
import Error from './components/main/home/error/Error';

export default function AllRoutes() {
    return(
        <Routes>
  <Route path="/" element={<Layout />}>
  <Route index element={<Home />}/>
  <Route path="/new" element={<Vochmiban />}/>
  <Route path="/catalog" element={<Catalog />}/>
  <Route path="*" element={<Error />}/>
  </Route>
</Routes>
    )
}
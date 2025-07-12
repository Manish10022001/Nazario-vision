import React, { useState } from "react";
import "./App.css";

import { Home } from "./Components/Home";
import { Header } from "./Components/Header";
import { EyewearTypeSection } from "./Components/EyewearTypeSection";
import { CollectionCard } from "./Components/CollectionCard";

import { Footer } from "./Components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import products from "./data/products.json";
import type from "./data/type.json";

export default function App() {
  // Cart and favorites states
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter products by search query (brand or model)
  const filteredProducts = products.filter(
    (product) =>
      product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.model_no.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Header cartItems={cartItems} setSearchQuery={setSearchQuery} />
      <main>
        <Home />
        <CollectionCard
          product={filteredProducts}
          cartItems={cartItems}
          setCartItems={setCartItems}
          favorites={favorites}
          setFavorites={setFavorites}
        />
        <EyewearTypeSection type={type} />
        
      </main>
      <Footer />
    </>
  );
}

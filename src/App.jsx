import React from "react";
import "./App.css";

import { Home } from "./Components/Home";
import { Header } from "./Components/Header";
import { EyewearTypeSection } from "./Components/EyewearTypeSection";
import "bootstrap/dist/css/bootstrap.min.css";
import { CollectionCard } from "./Components/CollectionCard";

import products from "./data/products.json";
import type from "./data/type.json";
import { Footer } from "./Components/Footer";
// const type = [
//   { name: "Sunglasses", img: "/type/sunglasses.jpg" },
//   {
//     name: "Blue Light",
//     img: "/type/eyeglasses.jpg",
//   },
//   {
//     name: "reading glasses",
//     img: "/type/reading-glasses.jpg",
//   },
//   { name: "computer glasses", img: "/type/computerglasses.jpg" },
//   { name: "contact lenses", img: "/type/contactlens.png" },
//   { name: "accesories", img: "/type/accessories.jpg" },
// ];

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <CollectionCard product={products} />
        <EyewearTypeSection type={type} />
      </main>

    </>
  );
}

import React from "react";
import "./App.css";

import { Home } from "./controller/Home";
import {Header} from "./controller/Header";
import { EyewearTypeSection } from "./controller/EyewearTypeSection";
import "bootstrap/dist/css/bootstrap.min.css";
import { CollectionCard } from "./controller/CollectionCard";

import products from "./data/products.json";
import type from "./data/type.json";
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
      {/* <ProductCarousel /> */}
    </>
  );
}

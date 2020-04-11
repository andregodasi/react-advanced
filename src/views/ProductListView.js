/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { ProductsService } from "../services/ProductService";
import { Channel } from "../services/EventService";
import ProductList from "../components/ProductList";

export default function ProductListView() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    startData();
  }, []);

  useEffect(() => {
    if(products) {
      Channel.on("product:remove", remove);
    }
   
    return () => {
      Channel.removeListener("product:remove", remove);
    };
  }, [products]);

  const startData = async () => {
    const list = await ProductsService.list();
    await ProductsService.list();
    setProducts([...list]);
  };

  const remove = (productId) => {
    debugger;
    const productIndex = products.findIndex(
      (product) => product.id === productId
    );
   /*  await ProductsService.remove(productId); */
    products.splice(productIndex, 1);
    setProducts([...products]);
  };
  
  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ProductList products={products} />
    </div>
  );
}

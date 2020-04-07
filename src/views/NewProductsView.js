import React, { useState } from "react";
import { ProductsService } from "../services/ProductService";

export default function NewProductsView() {
  const [product, setProduct] = useState({
    image: "",
    description: "",
    price: 0,
  });

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = { ...product };
    if (newProduct.description && newProduct.price) {
      ProductsService.create(newProduct);
      setProduct({ image: "", description: "", price: 0 });
    }
  };
  return (
    <div>
      <h1>Novo Produto</h1>
      <form className="product-form" onSubmit={(event) => handleSubmit(event)}>
        <label>
          <span>Imagem</span>
          <input
            name="image"
            onChange={(event) => handleChange(event)}
            type="text"
            value={product.image}
          />
        </label>
        <label>
          <span>Descrição</span>
          <input
            name="description"
            onChange={(event) => handleChange(event)}
            type="text"
            value={product.description}
          />
        </label>
        <label>
          <span>Preço</span>
          <input
            name="price"
            onChange={(event) => handleChange(event)}
            type="text"
            value={product.price}
          />
        </label>
        <button type="submit">Criar produto</button>
      </form>
    </div>
  );
}

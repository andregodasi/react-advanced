import React, { useState } from "react";
import { ProductsService } from "../services/ProductService";
import { FormattedMessage } from "react-intl";

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
      <h1>
        <FormattedMessage defaultMessage="New Product" id="product.new.title" />
      </h1>
      <form className="product-form" onSubmit={(event) => handleSubmit(event)}>
        <label>
          <span>
            <FormattedMessage defaultMessage="Image" id="product.new.image" />
          </span>
          <input
            name="image"
            onChange={(event) => handleChange(event)}
            type="text"
            value={product.image}
          />
        </label>
        <label>
          <span>
            <FormattedMessage
              defaultMessage="Description"
              id="product.new.description"
            />
          </span>
          <input
            name="description"
            onChange={(event) => handleChange(event)}
            type="text"
            value={product.description}
          />
        </label>
        <label>
          <span>
            <FormattedMessage defaultMessage="Price" id="product.new.price" />
          </span>
          <input
            name="price"
            onChange={(event) => handleChange(event)}
            type="text"
            value={product.price}
          />
        </label>
        <button type="submit">
          <FormattedMessage
            defaultMessage="Create Product"
            id="product.new.create"
          />
        </button>
      </form>
    </div>
  );
}

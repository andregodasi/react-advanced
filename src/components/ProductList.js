import React, { useState } from "react";
import { useEffect } from "react";
import { Channel } from "../services/EventService";
import { FormattedNumber } from "react-intl";

export default function ProductList(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (props.products) {
      setProducts(props.products);
    }
  }, [props.products]);

  const remove = (product) => {
    Channel.emit("product:remove", product.id);
  };
  return (
    <ul className="product-list">
      {products &&
        products.map((product) => (
          <li key={product.id} className="product-list-item">
            <button onClick={() => remove(product)}>X</button>
            <img src={product.image} alt={product.description} />
            <div>{product.description}</div>
            <div>
              <FormattedNumber
                value={product.price}
                minimumFractionDigits={2}
                maximumFractionDigits={2}
              />
            </div>
          </li>
        ))}
    </ul>
  );
}

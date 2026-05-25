import React from "react";

import {
  FaShoppingBag,
  FaMinus,
  FaPlus,
} from "react-icons/fa";

const ProductActions = ({
  quantity,
  setQuantity,
}) => {
  return (
    <div className="cart-area">

      <div className="qty-box">

        <span>{quantity}</span>

        <div className="quantity-buttons">

          <button
            className="qty-btn"
            onClick={() =>
              setQuantity(
                quantity > 1
                  ? quantity - 1
                  : 1
              )
            }
          >
            <FaMinus />
          </button>

          <button
            className="qty-btn"
            onClick={() =>
              setQuantity(quantity + 1)
            }
          >
            <FaPlus />
          </button>

        </div>

      </div>

      <button className="add-cart">
        <FaShoppingBag />
        ADD TO CART
      </button>

    </div>
  );
};

export default ProductActions;
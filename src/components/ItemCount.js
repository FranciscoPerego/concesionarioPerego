import React, { useState } from "react";

const ItemCount = (props) => {
  const [itemCount, setItemCount] = useState(0);
  const minusCartPrice = (counter) => {
    props.setCartTotal((counter -= props.price));
  };

  const addCartPrice = (counter) => {
    props.setCartTotal((counter += props.price));
  };
  return (
    <div className="item">
      <p>{props.name}</p>
      <p>
        <i
          className="bi bi-dash-square-fill minus-item"
          onClick={() => {
            props.setCartCount(props.minusItem);
            setItemCount(itemCount - 1);
            props.setCartTotal(minusCartPrice);
          }}
        ></i>
        {itemCount}

        <i
          className="bi bi-plus-square-fill add-item"
          onClick={() => {
            props.setCartCount(props.addItem);
            setItemCount(itemCount + 1);
            props.setCartTotal(addCartPrice);
          }}
        ></i>
      </p>

      <p>{props.price}</p>
      <p>Delete</p>
    </div>
  );
};

export default ItemCount;
import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ product, handleRemoveCart }) => {
  const { img, name, price, quantity, id } = product;
  return (
    <div className="reviewItem-container">
      <div className="reviewItem-leftSide">
        <div className="reviewItem-img">
          <img src={img} alt={name} />
        </div>
        <div className="reviewItem-details">
          <h3>{name}</h3>
          <h5>Quantity: {quantity}</h5>
          <h5>
            Price: <span className="price-style">${price}</span>
          </h5>
        </div>
      </div>
      <div className="reviewItem-rightSide">
        <button onClick={() => handleRemoveCart (id)} className="delete-button">
          <FontAwesomeIcon className="icon" icon={faTrashAlt} />
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;

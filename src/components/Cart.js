import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodItemsCard from "./FoodItems";
import EmptyData from "./EmptyData";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="flex flex-col items-start p-4">
      <h1 className="font-bold text-3xl mb-4">Cart-Items</h1>
      <button
        className="bg-purple-300 px-3 py-1 rounded-lg"
        onClick={() => {
          handleClearCart();
        }}
      >
        Clear Cart
      </button>
      <div className="flex flex-wrap justify-center items-center">
        {cartItems.length == 0 ? (
          <EmptyData />
        ) : (
          cartItems.map((item, index) => (
            <FoodItemsCard key={index} {...item} />
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;

import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useRestaurantMenu from "../hooks/useRestaurantMenu"
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, menuItems] = useRestaurantMenu(id);

  return menuItems.length === 0 ? (
    <Shimmer />
  ) : (
    <div class="content-wrapper">
  <div class="left-content">
    <h1>{restaurant.name}</h1>
    <h3>Area : {restaurant.areaName}</h3>
    <img
      src={
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/" +
        restaurant.cloudinaryImageId
      }
      alt=""
    />
    <h3>Cuisines : {restaurant.cuisines.join(", ")}</h3>
    <h3>Avg Rating : {restaurant.avgRating} stars</h3>
    <h3>{`Cost : ${restaurant.costForTwoMessage}`}</h3>
  </div>
  <div class="right-content">
    <h1>Menu</h1>
    <ul class="menu">
      {menuItems.map((item) => {
        return (
          <li key={item.id}>
            <span class="item-name">{item.name}</span>
            <span class="item-price">Rs.{(item.price / 100).toFixed(2)}</span>
            <button class="order-button">Order</button>
          </li>
        );
      })}
    </ul>
  </div>
</div>

  );
};

// const RestaurantMenu = () => {
//   const {id} = useParams();
//   const [restaurantMenu, setRestaurantMenu] = useState([]);

//   async function getRestaurantMenu(){
//     let response= await fetch(`${swiggy_restaurantMenu_api}/${id}`);
//     let json = await response.json();
//     // console.log(json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card.itemCards)
//     console.log(json?.data?.cards[0].card.card)
//     setRestaurantMenu(json?.data?.cards)
//   }

//   useEffect(()=>{
//     const data = getRestaurantMenu();
//     console.log(data)
//   }, [])

//   return (
//     <div>
//         <h1>{restaurantMenu[0].card.card.info.name}</h1>
//         <img
//         src={
//           "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/" +
//           restaurantMenu[0].card.card.info.cloudinaryImageId
//         }
//         alt=""
//       />
//       <h3>{restaurantMenu[0].card.card.info.cuisines.join(", ")}</h3>
//       <h4>{restaurantMenu[0].card.card.info.avgRating} stars</h4>
//     </div>
//   )
// }

export default RestaurantMenu;

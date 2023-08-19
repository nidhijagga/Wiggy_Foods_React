import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useRestaurantMenu from "../hooks/useRestaurantMenu"
import Shimmer from "./Shimmer";
import { addItemToCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";



const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, menuItems] = useRestaurantMenu(id);

  const dispatch = useDispatch();
  
  const handleAddItem = (item) => {
    dispatch(addItemToCart(item));
  }

  return menuItems.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex justify-between">
  <div className="w-2/5 p-5 box-border">
    <h1 className="text-4xl">{restaurant.name}</h1>
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
  <div className="w-3/5 p-5 box-border">
    <h1 className="text-4xl m-2">Menu</h1>
    <ul className="flex flex-wrap">
      {menuItems.map((item) => {
        return (
          <li key={item.id} className="w-full m-2 p-2 box-border text-base border-2 rounded-lg flex justify-between items-center hover:bg-gray-100">
            <span className="flex-1 mr-2">{item.name}</span>
            <span className="font-bold">Rs.{(item.price / 100).toFixed(2)}</span>
            <button className="bg-purple-300 text-white border-none px-2 py-1 cursor-pointer ml-3 rounded-lg hover:bg-purple-800"
            onClick={()=> handleAddItem(item)}>Add-Item</button>
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

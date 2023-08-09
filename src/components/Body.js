// import { restaurantList } from "../config";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import ResturantCard from "./RestaurantCard";
import EmptyData from "./EmptyData";
import { swiggy_restaurant_api } from "../config";
import { filterData } from "../utils/helper";
const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  //To see the Shimmer Effect - Use Effect is necessary to use because we want to run this only on time when page relaods, search will not work properly if it renders everytime change in any state.
  // useEffect(() => {
  //   setTimeout(() => {
  //     setRestaurants(restaurantList);
  //     setFilteredRestaurants(restaurantList);
  //   }, 500);
  // }, []);

  // async function getRestaurant to fetch API data
  async function getRestaurants() {
    // handle the error using try... catch
    try {
      const response = await fetch(swiggy_restaurant_api);
      // if response is not ok then throw new Error
      if (!response.ok) {
        const err = response.status;
        throw new Error(err);
      } else {
        const json = await response.json();

        // initialize checkJsonData() function to check Swiggy Restaurant data
        async function checkJsonData(jsonData) {
          for (let i = 0; i < jsonData?.data?.cards.length; i++) {
            // initialize checkData for Swiggy Restaurant data
            let checkData =
              json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants;

            // if checkData is not undefined then return it
            if (checkData !== undefined) {
              return checkData;
            }
          }
        }

        // call the checkJsonData() function which return Swiggy Restaurant data
        const resData = await checkJsonData(json);

        setRestaurants(resData);
        setFilteredRestaurants(resData);
      }
    } catch (error) {
      console.error(error); // show error in console
    }
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  //Conditional Rendering
  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
            // console.log(e.target.value);
          }}
        />
        <button
          type="submit"
          className="search-btn"
          onClick={() => {
            // setRestaurants(restaurantList);
            const data = filterData(searchInput, restaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="res-list">
        {/* {ResturantCard(restaurantList[0])} */}

        {filteredRestaurants.length === 0 ? (
          <EmptyData />
        ) : (
          filteredRestaurants.map((item) => {
            return <ResturantCard {...item.info} key={item.info.id} />;
          })
        )}

        {/* <ResturantCard {...restaurantList[0]} />
        <ResturantCard
        name={restaurantList[1].name}
        img={restaurantList[1].img}
        cuisineType={restaurantList[1].cuisineType}
        rating={restaurantList[1].rating}
        />
        <ResturantCard {...restaurantList[2]} />
        <ResturantCard {...restaurantList[3]} />
        <ResturantCard {...restaurantList[4]} />
        <ResturantCard {...restaurantList[5]} />
        <ResturantCard {...restaurantList[6]} />
        <ResturantCard {...restaurantList[7]} />
        <ResturantCard {...restaurantList[8]} />
      <ResturantCard {...restaurantList[9]} /> */}
      </div>
    </>
  );
};



export default Body;

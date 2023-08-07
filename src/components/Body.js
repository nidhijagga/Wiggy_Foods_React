import { restaurantList } from "../config";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import ResturantCard from "./RestaurantCard";
import EmptyData from "./EmptyData";


const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  //To see the Shimmer Effect - Use Effect is necessary to use because we want to run this only on time when page relaods, search will not work properly if it renders everytime change in any state.
  useEffect(() => {
    setTimeout(() => {
      setRestaurants(restaurantList);
      setFilteredRestaurants(restaurantList);
    }, 500);
  }, []);

  // async function getRestaurants(){
  //   const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=29.5320731&lng=75.");
  //   const json = await data.json();
  //   setRestaurants(json.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants);
  //   // try {
  //   //   const response = await axios.request(options);
  //   //   console.log(response.data);
  //   // } catch (error) {
  //   //   console.error(error);
  //   // }
  // }

  // useEffect(()=>{
  //   getRestaurants();
  // }, [])

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

function filterData(searchText, restaurants) {
  const lowerCaseSearchInput = searchText.toLowerCase();
  const filterData = restaurants.filter((data) =>
    data.info.name.toLowerCase().includes(lowerCaseSearchInput)
  );
  return filterData;
}

export default Body;

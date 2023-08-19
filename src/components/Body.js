// import { restaurantList } from "../config";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import ResturantCard from "./RestaurantCard";
import EmptyData from "./EmptyData";
import { swiggy_restaurant_api } from "../config";
import { filterData } from "../utils/helper";
import useOnline from "../hooks/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const {userState, setUserState} = useContext(UserContext);
  //To see the Shimmer Effect - Use Effect is necessary to use because we want to run this only on time when page relaods, search will not work properly if it renders everytime change in any state. (Will create a mess check out class 10)
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


  const online = useOnline();
  if(!online){
    return <h1>OOPS! please check your internet connection</h1>
  }
  //Conditional Rendering
  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="border-2 rounded-lg mx-5 my-2 w-fit py-1">
        <input
          type="text"
          className="p-1 mx-1"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          type="submit"
          className="m-1 px-2"
          onClick={() => {
            // setRestaurants(restaurantList);
            const data = filterData(searchInput, restaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <input
          type="text"
          className="p-1 mx-1"
          placeholder="Enter your Name"
          onChange={(e) => {
            setUserState((previousUser)=>({
              ...previousUser,
              name : e.target.value
            }))
          }}
        />
         <input
          type="text"
          className="p-1 mx-1"
          placeholder="Enter your Email"
          onChange={(e) => {
            setUserState((previousUser)=>({
              ...previousUser,
              email: e.target.value + "@gmail.com"
            }))
          }}
        />
      </div>
      <div className="flex flex-wrap justify-center items-center">
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

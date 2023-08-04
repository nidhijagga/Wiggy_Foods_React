import { restaurantList } from "../config";
import { useState, useEffect  } from "react";
// const ResturantCard = ({restaurant}) => {
//   const {img, name, cuisineType, rating} = restaurant;
//   return (
//     <div className="card">
//       <img src={img} alt="" />
//       <h2>{name}</h2>
//       <h3>{cuisineType.join(", ")}</h3>
//       <h4>{rating} stars</h4>
//     </div>
//   );
// };

const ResturantCard = ({name, cuisines, avgRating, cloudinaryImageId}) => {
  // const {img, name, cuisineType, rating} = restaurant;
  console.log(cuisines);
  return (
    <div className="card">
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="" />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};


function filterData(searchText, restaurants) {
  const lowerCaseSearchInput = searchText.toLowerCase();
  const filterData = restaurants.filter((data) =>
    data.name.toLowerCase().includes(lowerCaseSearchInput)
  );
  return filterData;
}
const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);

  async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=29.551837&lng=75.025889");
    const json = await data.json();
    setRestaurants(json.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants);
  }

  useEffect(()=>{
    getRestaurants();
  }, [])

  console.log("render");

  return (
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
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="res-list">
        {/* {ResturantCard(restaurantList[0])} */}

        {restaurants.map((item) => {
          return <ResturantCard {...item.info} key={item.id} />;
        })}

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

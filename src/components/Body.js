import { restaurantList } from "../config";

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


const ResturantCard = ({ img, name, cuisineType, rating }) => {
    // const {img, name, cuisineType, rating} = restaurant;
    return (
      <div className="card">
        <img src={img} alt="" />
        <h2>{name}</h2>
        <h3>{cuisineType.join(", ")}</h3>
        <h4>{rating} stars</h4>
      </div>
    );
  };
  
const Body = () => {
    return (
      <div className="res-list">
        {/* {ResturantCard(restaurantList[0])} */}
        
        {
          restaurantList.map((item) => {
            return <ResturantCard {...item} key={item.id}/>
          })
        }
        
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
    );
  };
  
  export default Body;
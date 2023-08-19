import { Link } from "react-router-dom";
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


const ResturantCard = ({
  id,
  name,
  cuisines,
  avgRating,
  cloudinaryImageId,
}) => {
  // const {img, name, cuisineType, rating} = restaurant;
  return (
    <div className="w-72 h-96 m-2 p-2 border-2 border-black">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt=""
        className="w-full h-2/3"
      />
      <Link to={`/res/${id}`}>
        <h2>{name}</h2>
      </Link>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default ResturantCard;

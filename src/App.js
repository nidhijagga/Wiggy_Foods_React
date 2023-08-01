import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
const root = ReactDOM.createRoot(document.getElementById("root"));

/**
 * Header
 *  - Logo
 *  - Nav
 *  - Cart
 * Body
 *  - Search bar
 *  - Resturant List
 *    - Resturant Card
 *      - Image
 *      - Name
 *      - Rating
 *      - Casines
 * Footer
 *  - Links
 *  - Copyright
 */





const restaurantList = [
  {
    id: 10001,
    name: "Burger King",
    img: "https://d1rgpf387mknul.cloudfront.net/products/Home/web/2x_web_20221027205256021625_262x360jpg",
    cuisineType: ["American", "Burgers"],
    rating: 4.5,
  },
  {
    id: 10002,
    name: "Pizza Hut",
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/tandoori-paneer.4ef45717e972cf45b43c010e3cde5a22.1.jpg",
    cuisineType: ["American", "Pizza"],
    rating: 4.2,
  },
  {
    id: 10003,
    name: "Sushi Express",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLBHOEkoSw6h9WFTsTfLPnkrKzPxi3NC4xUg&usqp=CAU",
    cuisineType: ["Japanese", "Sushi"],
    rating: 4.7,
  },
  {
    id: 10004,
    name: "Mexican Grill",
    img: "https://b.zmtcdn.com/data/pictures/chains/8/20431908/7488f50b2427eca21c594220a179cd3b.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
    cuisineType: ["Mexican"],
    rating: 4.0,
  },
  {
    id: 10005,
    name: "Italian Bistro",
    img: "https://b.zmtcdn.com/data/pictures/chains/0/57980/529d3ccb892b9d02ff0bb0e8610090ed.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
    cuisineType: ["Italian", "Pasta"],
    rating: 4.8,
  },
  {
    id: 10006,
    name: "Thai Spice",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLjPMS_bQZ1WbMcLxrZxHAKK19Ur1s0IQkwQ&usqp=CAU",
    cuisineType: ["Thai"],
    rating: 4.3,
  },
  {
    id: 10007,
    name: "Indian Delights",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScjZA6g2gVbeMWwL07q16NSSHCIA9gjoII_A&usqp=CAU",
    cuisineType: ["Indian", "Curry"],
    rating: 4.6,
  },
  {
    id: 10008,
    name: "Steakhouse Supreme",
    img: "https://i0.wp.com/whospitalitygroup.com/wp-content/uploads/2022/06/STEAK-S-MENU-by-EDGE-178EDGEDIT-LR-scaled.jpg?fit=2560%2C1708&ssl=1",
    cuisineType: ["American", "Steakhouse"],
    rating: 4.9,
  },
  {
    id: 10009,
    name: "Mediterranean Flavors",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsLFKbNdz9TINGL_3lj7_2k1JMb7v0QUkBLTPII_n46oahu1E_Rc06NFjAvt1s03D59bo&usqp=CAU",
    cuisineType: ["Mediterranean"],
    rating: 4.4,
  },
  {
    id: 10010,
    name: "Chinese Garden",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFal64iOMpNJtcK7Eki0Xd4jIeL09bW_vd4lRCbaMGqNr_DKD4kXAt5ioC4bMEPVuku_o&usqp=CAU",
    cuisineType: ["Chinese"],
    rating: 4.1,
  },
];


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

const Footer = () => {
  return <h4>dfn kjbdf kjfg</h4>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

root.render(<AppLayout />);

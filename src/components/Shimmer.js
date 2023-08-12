// const Shimmer = () => {
//     // Create an array with 15 elements
//     const shimmerArray = new Array(15).fill(null);
  
//     return (
//       <div className="shimmer-wrapper">
//         {/* Map over the shimmerArray to render 15 shimmer cards */}
//         {shimmerArray.map((_, index) => (
//           <div className="shimmer-card shimmer" key={index}>
//             <div className="shimmer-image"></div>
//             <div className="shimmer-details">
//               <div className="shimmer-title"></div>
//               <div className="shimmer-cuisine"></div>
//               <div className="shimmer-rating"></div>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };


//   export default Shimmer;


const Shimmer = () => {
  // Create an array with 15 elements
  const shimmerArray = new Array(15).fill(null);

  return (
    <div className="flex flex-wrap justify-center items-center">
      {/* Map over the shimmerArray to render 15 shimmer cards */}
      {shimmerArray.map((_, index) => (
        <div className="w-72 h-96 border border-gray-300 p-4 m-4 bg-gray-200 animate-shimmer" key={index}>
          <div className="w-full h-1/2 bg-gray-300"></div>
          <div className="p-4">
            <div className="w-4/5 h-3 bg-gray-300 mb-1"></div>
            <div className="w-3/5 h-2 bg-gray-300 mb-1"></div>
            <div className="w-2/5 h-2 bg-gray-300"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;

const Shimmer = () => {
    // Create an array with 15 elements
    const shimmerArray = new Array(15).fill(null);
  
    return (
      <div className="shimmer-wrapper">
        {/* Map over the shimmerArray to render 15 shimmer cards */}
        {shimmerArray.map((_, index) => (
          <div className="shimmer-card shimmer" key={index}>
            <div className="shimmer-image"></div>
            <div className="shimmer-details">
              <div className="shimmer-title"></div>
              <div className="shimmer-cuisine"></div>
              <div className="shimmer-rating"></div>
            </div>
          </div>
        ))}
      </div>
    );
  };


  export default Shimmer;
import { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [isFullText, setIsFullText] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">from {price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {isFullText ? info : `${info.substring(0, 220)}...`}
          <span> </span>
          <button
            type="button"
            onClick={() => setIsFullText(!isFullText)}
            className="info-btn"
          >
            {isFullText ? "show less" : "show more"}
          </button>
        </p>
        <button
          type="button"
          className="btn btn-block delete-btn"
          onClick={() => removeTour(id)}
        >
          not intrested
        </button>
      </div>
    </article>
  );
};

export default Tour;

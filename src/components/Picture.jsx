import React from "react";
import data from "../helper/data";

const Picture = () => {
  return (
    <div className="pictures">
      {data.map((item, index) => (
        <div className="picture" key={index}>
          <ul>
            <div className="imageContainer">
              <img src={item.src.large} alt={item.photographer} width={200} />
            </div>

            <div className="names">
              <p>{item.photographer}</p>
            </div>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Picture;

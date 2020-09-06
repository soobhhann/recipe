import React from "react";

const Recepi = ({ calori, title, img, inger }) => {
  return (
    <div className="card">
      <img className="rec-image" src={img} alt="" />
      <h2>{title}</h2>
      <br />

      <span>
        <b>calories : </b>
      </span>
      <p>{Math.floor(calori)}</p>
      <br />

      <p>
        <b>what you need : </b>
      </p>
      <br />
      {inger.map((igr) => (
        <p style={{paddingBottom: "10px"}} key={Math.random()}>{igr.text}</p>
      ))}
    </div>
  );
};

export default Recepi;

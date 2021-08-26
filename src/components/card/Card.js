import React from "react";
import { LikeButton } from "../button/LikeButton";

export const Card = ({ post }) => {
  const { id, imag, title, likes } = post;
  return (
    <div className="card mb-3" key={id}>
      <img src={imag} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <LikeButton id={id} />
        <p>{likes}</p>
      </div>
    </div>
  );
};

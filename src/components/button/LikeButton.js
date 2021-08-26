import React from "react";
import { useDispatch } from "react-redux";
import { counterLike } from "../../actions/post";

export const LikeButton = ({ id }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(counterLike(id));
  };

  return (
    <button className="btn" onClick={handleClick}>
      <i className="fa fa-thumbs-up"></i>
    </button>
  );
};

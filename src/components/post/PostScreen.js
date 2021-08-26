import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPost } from "../../actions/post";
import { Card } from "../card/Card";
// import { NoteScreen } from '../notes/NoteScreen';
// import { NothingSelected } from './NothingSelected';
// import { useSelector } from 'react-redux';

import "./postScreen.css";

export const PostScreen = () => {
  const dispatch = useDispatch();
  const [load, setLoad] = useState(true);
  const { post = [] } = useSelector((state) => state.post);
  console.log(post);

  useEffect(() => {
    dispatch(loadPost());
    setTimeout(() => {
      setLoad(false);
    }, 1500);
  }, []);

  if (load) {
    return <h1>Wait...</h1>;
  }

  return (
    <div className="row">
      {post.map((postal) => (
        <Card post={postal} />
      ))}
    </div>
  );
};

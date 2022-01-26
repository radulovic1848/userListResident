import React, { useState } from "react";
import "./style.scss";

type Props = {
  name?: string;
  photo?: string;
};

const User: React.FC<Props> = ({ name, photo }) => {
  const [showPhoto, setShowPhoto] = useState(false);

  function showPhotoHandler() {
    setShowPhoto((prevState) => !prevState);
  }

  return (
    <div className="single-user-wrapper">
      <p>{name}</p>
      {!showPhoto ? (
        <button onClick={showPhotoHandler}>Show picture</button>
      ) : (
        <img src={photo} alt="user"></img>
      )}
    </div>
  );
};

export default User;

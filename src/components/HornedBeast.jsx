import { useState } from "react";

export default function HornedBeast({
  title,
  image_url,
  description,
  handleShowSb,
}) {
  // Put likes and setLikes into useState
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  // Return element
  return (
    <div className="hornedBeast">
      <h2>{title}</h2>
      <img
        src={image_url}
        alt=""
        onClick={() => handleShowSb({ title, image_url })}
      />
      <p> {description} </p>
      <p onClick={handleClick}> Click here to like &#10084; Likes {likes}</p>
    </div>
  );
}

import { useState } from "react";

export default function HornedBeast({ title, image_url, description }) {
  // Put likes and setLikes inti useState
  const [likes, setLikes] = useState(0);

  // Click handler
  function handleClick() {
    setLikes(likes + 1);
  }

  // Return element
  return (
    <div className="hornedBeast">
      <h2>{title}</h2>
      <img src={image_url} alt="" onClick={handleClick} />
      <p>{description}</p>

      <p>Favourites &hearts;{likes}</p>
    </div>
  );
}

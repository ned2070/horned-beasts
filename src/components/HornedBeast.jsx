import { useState } from "react";
import SelectedBeast from "./SelectedBeast";

export default function HornedBeast({ title, image_url, description }) {
  // Put likes and setLikes inti useState
  const [likes, setLikes] = useState(0);
  // start off not showing SelectedBeast
  const [showSb, setShowSb] = useState(false);

  function handleShowSb() {
    // flips the Boolean value of showSb
    setShowSb(!showSb);
  }

  // Click handler
  function handleClick() {
    setLikes(likes + 1);
    handleShowSb();
  }

  // Return element
  return (
    <div className="hornedBeast">
      <h2>{title}</h2>
      <img src={image_url} alt="" onClick={handleClick} />
      <p>{description}</p>
      <>
        {/* Switches whether SelectedBeast is shown */}

        {/* If the first value is
          false the second isn't read */}
        {showSb && <SelectedBeast handleShowSb={handleShowSb} />}
      </>

      <p>Favourites &hearts;{likes}</p>
    </div>
  );
}

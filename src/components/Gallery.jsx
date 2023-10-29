// Returns image gallery to App

import HornedBeast from "./HornedBeast";

export default function Gallery({ beastS, handleShowSb, horns }) {
  const hornsFiltered = beastS.filter(
    (beastS) => beastS.horns == horns || horns === ""
  );

  return (
    <div className="gallery">
      {hornsFiltered.map((beastS) => {
        return (
          <HornedBeast
            key={beastS._id}
            image_url={beastS.image_url}
            description={beastS.description}
            title={beastS.title}
            handleShowSb={handleShowSb}
          />
        );
      })}
    </div>
  );
}

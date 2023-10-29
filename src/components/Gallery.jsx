import HornedBeast from "./HornedBeast";

export default function Gallery({ beastS, handleShowSb }) {
  return (
    <div className="gallery">
      <h2>Gallery</h2>

      {beastS.map((beastS) => {
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

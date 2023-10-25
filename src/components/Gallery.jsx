import HornedBeast from "./HornedBeast";

export default function Gallery(props) {
  return (
    <div className="gallery">
      <h2>Gallery</h2>
      {props.beastS.map((beastS) => {
        return (
          <HornedBeast
            image_url={beastS.image_url}
            description={beastS.description}
            title={beastS.title}
          />
        );
      })}
    </div>
  );
}

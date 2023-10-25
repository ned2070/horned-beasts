export default function HornedBeast({ title, imageUrl, description }) {
  return (
    <div className="hornedBeast">
      <h2></h2>
      <img src={imageUrl} alt="" title={title}></img>
      <p> {description} </p>
    </div>
  );
}

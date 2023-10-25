export default function HornedBeast({ title, image_url, description }) {
  return (
    <div className="hornedBeast">
      <h2>{title}</h2>
      <img src={image_url} alt="" />
      <p>{description}</p>
    </div>
  );
}

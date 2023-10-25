export default function SelectedBeast({
  handleShowSb,
  title,
  image_url,
  description,
}) {
  return (
    <div className="selectedBeast">
      <h2>Selected Beast</h2>
      <h2>{title}</h2>
      <img src={image_url} alt="" />
      <p>{description}</p>
      <button onClick={handleShowSb}>Close</button>
    </div>
  );
}

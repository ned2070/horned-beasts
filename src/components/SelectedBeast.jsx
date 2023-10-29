export default function selectedBeast({ showSbModal, handleShowSb }) {
  // Test if component called
  // console.log("test");
  return (
    <div className="selectedBeast">
      <h2>Selected Beast</h2>
      <h2>{showSbModal.title}</h2>
      <img src={showSbModal.image_url} alt="" />

      <button onClick={handleShowSb}>Close</button>

      {/*} <p>{description}</p>*/}
    </div>
  );
}

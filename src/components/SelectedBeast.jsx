export default function SelectedBeast({ handleShowSb }) {
  return (
    <div className="selectedBeast">
      <h2>Selected Beast</h2>
      <button onClick={handleShowSb}>Close</button>
    </div>
  );
}

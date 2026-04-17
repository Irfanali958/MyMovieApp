function Search({ changeInput, userInput, fetchAPI }) {
  return (
    <>
      <div
        className="w-full text-center
      "
      >
        <input
          type="text"
          placeholder="Enter the movie name"
          className="bg-white text-center rounded-2xl p-2"
          value={userInput}
          onChange={changeInput}
        />
        <button
          className="border border-2 rounded-2xl ml-2 p-1 font-bold bg-violet-900"
          onClick={fetchAPI}
        >
          Search
        </button>
      </div>
    </>
  );
}
export default Search;

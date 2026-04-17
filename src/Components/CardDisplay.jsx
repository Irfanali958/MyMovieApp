function CardDisplay({ poster, title, year, type }) {
  return (
    <>
      <div className="border border-2 rounded hover:scale-105 transition duration-300">
        <img
          src={poster !== "N/A" ? poster : "/placeholder.jpg"}
          alt="Poster Image"
          className="w-full rounded-t"
        />
        <h2 className="font-bold">Title : {title}</h2>
        <p className="text-sm text-gray-500">Year : {year}</p>
        <p className="text-sm text-gray-500">Type : {type}</p>
      </div>
    </>
  );
}
export default CardDisplay;

import { useState } from "react";
import axios from "axios";
import Search from "./Components/Search";
import MovieCard from "./Components/MovieCard";
function App() {
  const [userInput, setUserInput] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  function changeInput(e) {
    setUserInput(e.target.value);
  }
  async function fetchAPI() {
    try {
      setIsLoading(true);
      setShowResult(false);
      const response = await axios(
        `https://www.omdbapi.com/?s=${userInput}&apikey=4bad4237`,
      );
      setMovieList(response.data.Search || []);
    } catch (error) {
      console.log("Error");
    } finally {
      setIsLoading(false);
      setShowResult(true);
    }
  }
  return (
    <>
      <div className="bg-violet-300 min-h-screen p-3">
        <div>
          <h1 className="text-center font-bold font-sans mb-4 text-3xl">
            Discover your next obsession
          </h1>
          <Search
            changeInput={changeInput}
            userInput={userInput}
            fetchAPI={fetchAPI}
          />
        </div>
        {isLoading && <p>Loading...</p>}
        {showResult && (
          <p className="font-bold text-2xl">Results for {userInput} : </p>
        )}
        <MovieCard movieList={movieList}></MovieCard>
      </div>
    </>
  );
}

export default App;

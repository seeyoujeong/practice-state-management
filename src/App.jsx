import { useState } from "react";
import PokeList from "./components/PokeList";
import axios from "axios";
import { BASE_URL } from "./constants/url";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInput = async (e) => {
    setSearchTerm(e.target.value);

    // if (e.target.value.length > 0) {
    //   try {
    //     const res = await axios.get(`${BASE_URL}pokemon/${e.target.value}`);
    //     const pokemonData = {
    //       url: `${BASE_URL}pokemon/${res.data.id}`,
    //       name: searchTerm,
    //     };

    //     setPokemons([pokemonData]);
    //   } catch (error) {
    //     setPokemons([]);
    //     console.error(error);
    //   }
    // } else {
    //   fetchPokeData();
    // }
  };

  return (
    <article className="pt-6">
      <header className="flex flex-col gap-2 w-full px-4 z-50">
        <div className="z-50">
          <form className="relative flex justify-center items-center w-[20.5rem] h-6 rounded-lg m-auto">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchInput}
              className="text-xs w-[20.5rem] h-6 px-2 py-1 bg-[hsl(214,13%,47%)] rounded-lg text-gray-300 text-center"
            />
            <button
              type="submit"
              className="text-xs bg-slate-900 text-slate-300 w-[2.5rem] h-6 px-2 py-1 rounded-r-lg text-center absolute right-0 hover:bg-slate-700"
            >
              검색
            </button>
          </form>
        </div>
      </header>
      <PokeList />
    </article>
  );
};

export default App;

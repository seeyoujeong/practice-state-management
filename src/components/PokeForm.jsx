import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../constants/url";

const PokeForm = ({ setPokemons }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInput = async (event) => {
    const targetValue = event.target.value;
    setSearchTerm(targetValue);

    if (targetValue.length > 0) {
      try {
        const res = await axios.get(`${BASE_URL}pokemon/${targetValue}`);
        const pokemonData = {
          url: `${BASE_URL}pokemon/${res.data.id}`,
          name: searchTerm,
        };

        setPokemons([pokemonData]);
      } catch (error) {
        setPokemons([]);
        console.error(error);
      }
    } else {
      // fetchPokeData();
    }
  };

  return (
    <div className="z-50">
      <form className="relative flex justify-center items-center w-[20.5rem] h-6 rounded-lg m-auto">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchInput}
          className="w-[20.5rem] h-6 px-2 py-1 bg-[hsl(214,13%,47%)] rounded-lg text-xs text-gray-300 text-center"
        />
        <button
          type="submit"
          className="absolute right-0 w-[2.5rem] h-6 px-2 py-1 bg-slate-900 hover:bg-slate-700 rounded-r-lg text-xs text-slate-300 text-center"
        >
          검색
        </button>
      </form>
    </div>
  );
};

export default PokeForm;

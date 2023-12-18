import PokeList from "./components/PokeList";
import PokeForm from "./components/PokeForm";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "./constants/url";
import { LIMIT } from "./constants/api";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);

  const fetchPokeData = useCallback(async () => {
    try {
      const url = `${BASE_URL}pokemon/?limit=${LIMIT}&offset=${offset}`;
      const {
        data: { results },
      } = await axios.get(url);

      setPokemons((prevData) =>
        offset === 0 ? results : [...prevData, ...results]
      );
    } catch (error) {
      console.error(error);
    }
  }, [offset]);

  useEffect(() => {
    fetchPokeData();
  }, [fetchPokeData]);

  return (
    <article className="pt-6">
      <header className="flex flex-col gap-2 w-full px-4 z-50">
        <PokeForm setPokemons={setPokemons} fetchPokeData={fetchPokeData} />
      </header>
      <PokeList pokemons={pokemons} setOffset={setOffset} />
    </article>
  );
};

export default App;

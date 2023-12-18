import PokeList from "./components/PokeList";
import PokeForm from "./components/PokeForm";
import { useState } from "react";

const App = () => {
  const [pokemons, setPokemons] = useState([]);

  return (
    <article className="pt-6">
      <header className="flex flex-col gap-2 w-full px-4 z-50">
        <PokeForm setPokemons={setPokemons} />
      </header>
      <PokeList pokemons={pokemons} setPokemons={setPokemons} />
    </article>
  );
};

export default App;

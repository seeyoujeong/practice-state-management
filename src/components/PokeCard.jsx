import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { textColor, bgColor } from "../constants/color";
import { IMAGE_URL } from "../constants/url";
import LazyImage from "./LazyImage";

const formatPokemonData = (params) => {
  const { id, types, name } = params;

  return {
    id,
    name,
    type: types[0].type.name,
  };
};

const PokeCard = ({ url, name }) => {
  const [pokemon, setPokemon] = useState();

  const fetchPokeDetailData = useCallback(async () => {
    try {
      const res = await axios.get(url);
      const pokemonData = formatPokemonData(res.data);
      setPokemon(pokemonData);
    } catch (error) {
      console.error(error);
    }
  }, [url]);

  useEffect(() => {
    fetchPokeDetailData();
  }, [fetchPokeDetailData]);

  return (
    <>
      {pokemon && (
        <a
          href={`/pokemon/${name}`}
          className="box-border rounded-lg w-[8.5rem] h-[8.5rem] z-0 bg-slate-800 justify-between items-center"
        >
          <div
            className={`${
              textColor[pokemon?.type]
            } h-[1.5rem] text-xs w-full pt-1 px-2 text-right rounded-t-lg`}
          >
            #{String(pokemon.id).padStart(3, "00")}
          </div>
          <div className="w-full flex items-center justify-center">
            <div className="box-border relative flex w-full h-[5.5rem] justify-center items-center">
              <LazyImage url={`${IMAGE_URL}${pokemon?.id}.png`} alt={name} />
            </div>
          </div>
          <div
            className={`${
              bgColor[pokemon?.type]
            } h-[1.5rem] w-full text-xs text-zinc-100 font-medium flex items-center justify-center rounded-b-lg uppercase`}
          >
            {pokemon.name}
          </div>
        </a>
      )}
    </>
  );
};

export default PokeCard;

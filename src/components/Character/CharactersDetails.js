import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CharactersDetails = () => {
  const [character, setCharacter] = useState([]);
  const { characterID } = useParams();

  const fetchCharacterData = async () => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${characterID}`
      );
      setCharacter(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCharacterData();
  }, []);

  return (
    <section className="flex justify-center items-center p-16 bg-stone-800 h-screen">
      <div className="flex justify-center items-center flex-wrap max-w-full">
        <article
          key={character.id}
          className="w-screen flex overflow-hidden bg-zinc-700 rounded-lg m-3 md:shadow-black-500"
        >
          <div className="characterImage h-[500px]">
            <img
              src={character.image}
              alt={character.name}
              className="h-full"
            />
          </div>
          <div className="charaterInfo p-3 flex flex-col lg:flex-1 items-center text-4xl">
            <div className="flex flex-col lg:flex-[0.1_1_0%] ">
              <h2 className="font-bold text-white">
                {character.name}
              </h2>
            </div>
            <div className="flex ite lg:flex-[1_1_0%] items-center text-center">
              <span className="h-2 w-2 mr-1.5 bg-green-400 rounded-full"></span>
              <span className="font-bold text-white">{character.status}</span>
            </div>
            <div className="flex flex-col lg:flex-[1_1_0%] text-center">
              <span className="text-gray-400">Gender:</span>
              <h2 className="font-bold text-white ">{character.gender}</h2>
            </div>
            <div className="flex flex-col lg:flex-[1_1_0%] text-center">
              <span className="text-gray-400">Species:</span>
              <h2 className="font-bold text-white">{character.species}</h2>
            </div>
            <div className="flex flex-col lg:flex-[1_1_0%] ">
          </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default CharactersDetails;

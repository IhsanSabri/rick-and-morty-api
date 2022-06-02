import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link  } from "react-router-dom";

const EpisodeCharacterDetails = ({ characterUrl }) => {
  const [character, setCharacter] = useState([]);

  const fetchEpisodeData = async (characterUrl) => {
    try {
      const response = await axios.get(characterUrl);
      setCharacter(response.data);
    }
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEpisodeData(characterUrl);
  }, [characterUrl]);


  return (
    <section className="inline-flex justify-center items-center p-1 bg-zinc-600">
      <div className="flex justify-center items-center flex-wrap max-w-full">
      <button></button>
        <Link to={`character/${character.id}`} key={character.id}>
          <article
            key={character.id}
            className="w-[300px] h-[150px] flex overflow-hidden bg-zinc-700 rounded-lg m-3 md:shadow-black-500"
          >
            <div className="characterImage">
              <img
                src={character.image}
                alt={character.name}
                className="h-full"
              />
            </div>
            <div className="charaterInfo p-1 w-full">
              <div className="section flex-col">
                <span className="font-bold">Character Name:</span>
                <h2 className="characterName text-gray-400">{character.name}</h2>
              </div>
              <div className="section flex-col">
                <span className="font-bold">Species:</span>
                <div className=" characterSpiecies text-gray-400">{character.species}</div>
              </div>
              <div className="section flex-col">
                <span className="font-bold">Status:</span>
                <div className="characterStatus text-gray-400">{character.status}</div>
              </div>
            </div>
          </article>
        </Link>
      </div>
    </section>
  );
};

export default EpisodeCharacterDetails;

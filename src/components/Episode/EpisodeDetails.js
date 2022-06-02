import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import EpisodeCharacterDetails from "./EpisodeCharacterDetails";

const EpisodeDetails = () => {
  const [episode, setEpisode] = useState([]);
  const [characters, setCharacters] = useState([]);
  const { episodeID } = useParams();


  const fetchEpisodeData = async (episodeID) => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/episode/${episodeID}`);
      setEpisode(response.data);
      setCharacters(response.data.characters);
    }
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEpisodeData(episodeID);
  }, [episodeID]);

  return (
    <section className="flex justify-center items-center p-16 bg-stone-800">
      <div className="flex justify-center items-center flex-wrap max-w-full">
        <article
          key={episode.id}
          className="w-[1280px] flex overflow-hidden bg-zinc-700 rounded-lg m-3 md:shadow-black-500"
        >
          <div className="charaterInfo p-6 relative text-white flex flex-col flex-[3_1_0%]">
            <div className="section flex-col text-center">
              <span className="font-bold text-white">Episode Name</span>
              <h2 className="text-gray-400">{episode.name}</h2>
            </div>
            <div className="section flex-col text-center">
              <span className="text-white font-bold">Air Date</span>
              <div className="text-gray-400">{episode.air_date}</div>
            </div>
            <div className="section flex-col text-center">
              <span className="">Episode</span>
              <div className="text-gray-400">{episode.episode}</div>
            </div>
            <div className="section flex-col text-center">
              <span className="text-white font-bold">Characters</span>
              <div className="mt-2.5">
                {characters.map((character, id) => {
                  return <EpisodeCharacterDetails key={id} characterUrl={character} />;
                })}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default EpisodeDetails;

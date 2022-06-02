import React, { useState, useEffect } from "react";
import axios from "axios";
import CharaterInfo from "./CharacterInfo";
import Pagination from "../Pagination";

const Character = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://rickandmortyapi.com/api/character"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();

  const getCharacterData = async (currentPageUrl) => {
    try {
      const response = await axios.get(currentPageUrl);
      setCharacters(response.data.results);
      setNextPageUrl(response.data.info.next);
      setPrevPageUrl(response.data.info.prev);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCharacterData(currentPageUrl);
  }, [currentPageUrl]);

  const nextPage = () => {
    setCurrentPageUrl(nextPageUrl);
  };

  const prevPage = () => {
    setCurrentPageUrl(prevPageUrl);
  };


  return (
    <section className="inline-block justify-center items-center p-8 bg-stone-800 min-h-[calc(100%-40px)]">
      <div className="flex justify-center items-center flex-wrap max-w-full">
        {characters.map((chars, id) => {
          return <CharaterInfo key={id} chars={chars} />;
        })}
      </div>
      <Pagination
        nextPage={nextPageUrl ? nextPage : null}
        prevPage={prevPageUrl ? prevPage : null}
      />
    </section>
  );
};

export default Character;

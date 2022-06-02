import React, { useState, useEffect } from "react";
import axios from 'axios';
import EpisodeInfo from "./EpisodeInfo";
import Pagination from "../Pagination";

const Episodes = () => {
  const [posts, setPosts] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://rickandmortyapi.com/api/episode"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();

  const getEpisodeData = async (currentPageUrl) => {
    try {
      const response = await axios.get(currentPageUrl);
      setPosts(response.data.results);
      setNextPageUrl(response.data.info.next);
      setPrevPageUrl(response.data.info.prev);
    }
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEpisodeData(currentPageUrl);
  }, [currentPageUrl]);

  const nextPage = () => {
    setCurrentPageUrl(nextPageUrl);
  }
  const prevPage = () => {
    setCurrentPageUrl(prevPageUrl);
  }

  return (
    <section className="inline-block justify-center items-center p-8 bg-stone-800 min-h-[calc(100%-40px)]">
      <div className="flex justify-center items-center flex-wrap max-w-full">
        {posts.map((chars, id) => {
          return <EpisodeInfo key={id} chars={chars} />;
        })}
      </div>
      <Pagination
        nextPage={nextPageUrl ? nextPage : null}
        prevPage={prevPageUrl ? prevPage : null}
      />
    </section>
  );
};

export default Episodes;

import React from "react";
import { Link } from "react-router-dom";

const EpisodeInfo = (props) => {
  return (
    <Link to={`episode/${props.chars.id}`} key={props.chars.id}>
    <article
      key={props.chars.id}
      className="w-[600px] h-[220px] flex overflow-hidden bg-zinc-700 rounded-lg m-3 md:shadow-black-500"
    >
      <div className="charaterInfo p-6 relative text-white flex flex-col flex-[3_1_0%]">
        <div className="section flex-col text-center">
          <span className="text-gray-400">Episde Name</span>
          <h2 className="font-bold text-white">{props.chars.name}</h2>
        </div>
        <div className="section flex-col text-center">
          <span className="text-gray-400">Air Date</span>
          <div className="text-white font-bold">
            {props.chars.air_date}
          </div>
        </div>
        <div className="section flex-col text-center">
          <span className="text-gray-400">Episode</span>
          <div className="text-white font-bold">{props.chars.episode}</div>
        </div>
        <div className="section flex-col text-center">
          <span className="text-gray-400">
            Charaters: Episode has {props.chars.characters.length}{" "}
            characters
          </span>
        </div>
      </div>
    </article>
  </Link>
  );
};

export default EpisodeInfo;

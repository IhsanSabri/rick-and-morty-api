import React from "react";
import { Link } from "react-router-dom";

const CharaterInfo = (props) => {
  return (
    <Link to={`character/${props.chars.id}`} key={props.chars.id}>
      <article
        key={props.chars.id}
        className="w-[600px] h-[220px] flex overflow-hidden bg-zinc-700 rounded-lg m-3 md:shadow-black-500"
      >
        <div className="characterImage">
          <img
            src={props.chars.image}
            alt={props.chars.name}
            className="h-full"
          />
        </div>
        <div className="charaterInfo p-3 flex flex-col lg:flex-1">
          <div className="flex flex-col lg:flex-[0.15_1_0%] ">
            <h2 className="font-bold text-white text-2xl">
              {props.chars.name}
            </h2>
          </div>
          <div className="flex ite lg:flex-[0.25_1_0%] items-center">
            <span className="h-2 w-2 mr-1.5 bg-green-400 rounded-full"></span>
            <span className="font-bold text-white">{props.chars.status}</span>
          </div>
          <div className="flex flex-col lg:flex-[0.25_1_0%] ">
            <span className="text-gray-400">Origin:</span>
            <h2 className="font-bold text-white">{props.chars.origin.name}</h2>
          </div>
          <div className="flex flex-col lg:flex-[0.25_1_0%] ">
            <span className="text-gray-400">Species:</span>
            <h2 className="font-bold text-white">{props.chars.species}</h2>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default CharaterInfo;

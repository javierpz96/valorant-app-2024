import React from "react";
import "./cardPersonaje.css";

const CardPersonaje = ({ imagen, nombre }) => {
  return (
    <div className="card-personaje bg-[#1a232e] w-full">
      <div className="flex justify-center items-center text-center flex-col">
        <img className="card-img-personaje" src={imagen}></img>
      </div>
      <div className="card-personaje-nombre md:h-14 h-10 items-center flex pl-2 uppercase">
        <h5 className="text-gray-800 md:text-xl text-lg font-extrabold">
          {nombre}
        </h5>
      </div>
    </div>
  );
};

export default CardPersonaje;

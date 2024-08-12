import React from "react";
import "./inicio.css";

const CardNew = ({ imagen, tiempo, tema, descripcion, subtema }) => {
  return (
    <div className="md:min-h-[420px] md:max-h-[420px]">
      <div className="md:w-[300px]">
        <img src={imagen} alt="" />
      </div>
      <div className="flex gap-2 mt-6 mb-2 items-center">
        <p className="text-danger font-bold text-tiny">{subtema}</p> |
        <p className="font-semibold text-tiny">{tiempo}</p>
      </div>
      <h3 className="text-lg md:text-xl font-bold">{tema}</h3>
      <p className="text-sm text-gray-600 font-normal mt-4">{descripcion}</p>
    </div>
  );
};

export default CardNew;

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./PersonajeDetail.css";

const PersonajeDetail = () => {
  const { id } = useParams();

  const [detallePersonaje, setDetallePersonaje] = useState([]);
  const [habilidadSeleccionada, setHabilidadSeleccionada] = useState(null);

  const handleAbilityClick = (item) => {
    setHabilidadSeleccionada(item);
  };

  const fetchDetail = async () => {
    const response = await fetch(`https://valorant-api.com/v1/agents/${id}`);
    const data = await response.json();
    setDetallePersonaje(data.data);
  };

  useEffect(() => {
    fetchDetail();
  }, [id]);

  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1 bg-[#0f1923]">
        <div className="w-full flex justify-center items-center">
          <div className="text-white h-full md:items-start items-center flex flex-col justify-center">
            <div className="md:w-[70%] flex justify-center md:items-start items-center flex-col gap-6 md:pl-12 mt-6 pl-8 pr-8">
              <h1 className="md:text-gigant text-gigantMobile font-bold">
                {detallePersonaje?.displayName}
              </h1>
              <p className="text-sm">{detallePersonaje?.description}</p>
              <div className="cont-role w-28 h-28 flex justify-center items-center flex-col">
                <img
                  className="w-8"
                  src={detallePersonaje?.role?.displayIcon}
                  alt="Role Icon"
                />
                <div className="text-tiny mt-2">
                  <span>ROL</span>
                </div>
                <div className="uppercase text-tiny">
                  <span>{detallePersonaje?.role?.displayName}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-center m-6 md:mt-6 mt-10"
          style={{
            backgroundImage: detallePersonaje?.background
              ? `url("${detallePersonaje.background}")`
              : "none",
          }}
        >
          <img className="md:w-full" src={detallePersonaje?.fullPortrait} />
        </div>
      </div>
      <div className="bg-[#0a1016] md:pl-8 flex flex-col gap-6 justify-center items-center pt-10 pb-10">
        <h1 className="md:text-gigantMobile text-xl text-white font-bold">
          SPECIAL ABILITIES
        </h1>
        <div className="flex">
          {detallePersonaje?.abilities?.map((item, index) => {
            const isSelected =
              habilidadSeleccionada?.description === item.description;
            return item.displayIcon ? (
              <img
                onClick={() => handleAbilityClick(item)}
                key={index}
                className={`w-16 ${isSelected ? "opacity-100" : "opacity-50"}`} // Cambia la opacidad según la selección
                src={item.displayIcon}
                alt={`Ability Icon ${index}`}
                style={{ transition: "opacity 0.3s", cursor: "pointer" }} // Agrega una transición suave
              />
            ) : undefined;
          })}
        </div>

        {habilidadSeleccionada && (
          <div className="text-white flex flex-col gap-4 pl-4 pr-4 md:pb-0 pb-20">
            <div class="border-t border-gray-300 my-4"></div>
            <h4 className="text-xl font-bold">
              {habilidadSeleccionada.displayName}
            </h4>
            <p className="md:text-sm text-smMobile h-16">
              {habilidadSeleccionada.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonajeDetail;

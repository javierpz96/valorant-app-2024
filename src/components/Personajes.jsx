import { useState, useEffect } from "react";
import CardPersonaje from "./CardPersonaje";
import { Link } from "react-router-dom";

const Personajes = () => {
  const [personajes, setPersonajes] = useState([]);

  const infoPersonajes = async () => {
    const response = await fetch("https://valorant-api.com/v1/agents");
    const data = await response.json();
    setPersonajes(data.data);
  };

  useEffect(() => {
    infoPersonajes();
  }, []);

  return (
    <div>
      <div className="md:pl-20 pl-8 flex items-end md:h-24 h-16 mb:pb-0 pb-2 text-white uppercase bg-[url('https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/122e6caea8b2a2dbb6d6e71eea4e24effab342da-5120x574.png?auto=format&fit=fill&q=80&w=1851')]">
        <h4 className="md:text-gigantMobile text-xl font-bold">Agentes</h4>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-2  gap-6 bg-[#0f1923] md:p-20 justify-content-center p-8 md:pt-12 pt-6 ">
        {personajes.map((item) => [
          <Link to={`/detalles/${item.uuid}`}>
            <CardPersonaje
              imagen={item.displayIcon}
              nombre={item.displayName}
            />
          </Link>,
        ])}
      </div>
    </div>
  );
};

export default Personajes;

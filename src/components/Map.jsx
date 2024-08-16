import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Map = () => {
  const [mapas, setMapas] = useState([]);

  const fetchMapas = async () => {
    const response = await fetch("https://valorant-api.com/v1/maps");
    const data = await response.json();
    setMapas(data.data);
  };

  useEffect(() => {
    fetchMapas();
  }, []);

  return (
    <div className="gap-4 grid grid-cols-2 sm:grid-cols-4 p-3 pt-6 pb-6">
      {mapas.map((item, index) => (
        <Link to={`/detalleMapa/${item.uuid}`}>
          <Card shadow="sm" key={index} isPressable>
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                alt={item.title}
                className="w-full object-cover"
                src={item.splash}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.displayName}</b>
              <b className="text-red-600">{item.tacticalDescription}</b>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default Map;

import { useParams } from "react-router-dom";
import { useState, useEffcet, useEffect } from "react";

const MapDetail = () => {
  const { id } = useParams();

  const [mapDetail, setMapDetail] = useState([]);

  const fetchDetail = async () => {
    const response = await fetch(`https://valorant-api.com/v1/maps/${id}`);
    const data = await response.json();
    setMapDetail(data.data);
  };

  useEffect(() => {
    fetchDetail();
  }, [id]);

  return (
    <div
      className=" bg-cover bg-center"
      style={{
        backgroundImage: mapDetail?.stylizedBackgroundImage
          ? `url("${mapDetail.stylizedBackgroundImage}")`
          : "none",
      }}
    >
      <div className="flex justify-center md:items-center md:flex-row flex-col pt-6 md:gap-44">
        <hr className="border-gray-300" />
        <div className="md:flex md:justify-center md:items-center md:flex-col md:gap-10 p-4">
          <div className="pl-3">
            <h1 className="text-xl text-white font-bold uppercase">
              {mapDetail.displayName}
            </h1>
            <h5 className="text-white text-smMobile font-semibold mt-6 md:mt-2">
              Callouts:
            </h5>
          </div>
          <div className="grid md:grid-cols-2  grid-cols-5 text-white w-full text-center pl-4 pr-4 font-semibold">
            {mapDetail?.callouts?.map((item) => (
              <span key={item.regionName}>{item.regionName}</span>
            ))}
          </div>
        </div>
        <div className="pb-8 ">
          <img className="md:w-[500px]" src={mapDetail.displayIcon}></img>
        </div>
      </div>
    </div>
  );
};

export default MapDetail;

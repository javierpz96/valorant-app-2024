import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#181818]">
      <div className="flex justify-center gap-3 pt-6 pb-6 w-full">
        <i className="fa-brands fa-x-twitter bg-[#292929] p-3 rounded-xl text-md text-white"></i>
        <i className="fa-brands fa-youtube bg-[#292929] p-3 rounded-xl  text-md text-white"></i>
        <i className="fa-brands fa-instagram bg-[#292929] p-3 rounded-xl text-md text-white"></i>
        <i className="fa-brands fa-tiktok bg-[#292929] p-3 rounded-xl text-md text-white"></i>
        <i className="fa-brands fa-facebook bg-[#292929] p-3 rounded-xl text-md text-white"></i>
        <i className="fa-brands fa-discord bg-[#292929] p-3 rounded-xl text-md text-white"></i>
      </div>
      <div className="flex justify-center pb-2 pt-2">
        <img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/47e4dd9a209ee97ce48e06cf6041a2ae2fc48bc6-98x55.png?&h=75&fit=max"></img>
      </div>
      <div className="flex justify-center text-[#7a7a7a] text-center pt-4 pb-4">
        <p className="text-sm md:w-[600px] w-[300px]">
          © 2020-2024 Riot Games, Inc. RIOT GAMES, VALORANT y todos los
          logotipos asociados son marcas comerciales, marcas de servicios o
          marcas registradas de Riot Games, Inc.
        </p>
      </div>
      <div className="text-white flex justify-center md:gap-10 gap-6 text-sm md:text-md font-medium uppercase md:flex-row flex-col text-center mt-4">
        <p>Política de Privacidad</p>
        <p>Términos de Uso</p>
        <p>Información de la empresa</p>
        <p>Preferencias de cookies</p>
      </div>
      <div className="flex justify-center md:gap-4 pt-10 pb-10 gap-1">
        <img
          className="bg-[#292929] p-3 rounded-xl"
          src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/bc77b73057e43fa06e60ddc11995b61f3211f655-1000x1000.jpg?&h=100&fit=max"
        ></img>
        <img
          className="bg-[#292929] p-3 rounded-xl"
          src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/c9a7bb751dcdd7f275709563cfe0f2295e1968a5-208x208.jpg?&h=100&fit=max"
        ></img>
        <img
          className="bg-[#292929] p-3 rounded-xl"
          src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/74616f83f75bd2c1b61d2140777961d722b5e3fc-208x254.jpg?&h=100&fit=max"
        ></img>
      </div>
    </footer>
  );
};

export default Footer;

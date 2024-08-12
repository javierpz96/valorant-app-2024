import "./inicio.css";
import CardNew from "./CardNew";

const Inicio = () => {
  return (
    <div>
      <div class="relative w-full h-[700px] md:h-[900px]">
        <div class="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-20 p-4 text-center gap-6">
          <p class="text-gray-300 text-sm font-normal">
            Un shooter táctico 5v5 basado en personajes
          </p>
          <img
            class="w-[230px] md:w-[430px]"
            src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/7b76209193f1bfe190d3ae6ef8728328870be9c3-736x138.png?auto=format&fit=fill&q=80&w=300"
          ></img>
          <button className="text-white button md:mt-10 mt-8 md:p-5 p-3 text-sm  font-medium">
            JUGAR GRATIS
          </button>
        </div>
        <div class="relative w-full h-full">
          <div class="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
          <img
            class="w-full object-cover md:h-[900px] h-[700px] z-0"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/e2f9d7131935021.619ecbab7c546.gif"
          ></img>
        </div>
      </div>
      <div className="bg-[url('https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/c8157d71a4776dd821d05ed6b82d5d875ca03386-5120x1644.png?auto=format&fit=fill&q=80&h=794')]">
        <div className="flex md:justify-between justify-around items-center md:mx-40 md:pt-8 md:mb-8 pt-6 pb-6">
          <h3 className="md:text-big font-bold">NOVEDADES</h3>
          <p className="md:text-md text-sm">
            IR A LA PÁGINA DE NOVEDADES{" "}
            <i class="fa-solid fa-arrow-right-from-bracket ml-1 md:ml-2 pt-2 text-danger"></i>
          </p>
        </div>
        <div className="flex gap-10 justify-center items-center md:mx-80 mx-5 pb-10 md:flex-row flex-col">
          <CardNew
            imagen="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/bbfd203ef66d38bd4fe14a2349279c4ba218165c-1920x1080.jpg?auto=format&fit=fill&q=80&w=493"
            subtema="ACTUALIZACIONES DEL JUEGO"
            tiempo="hace 4 semanas"
            tema="Anuncio de Evori Dreamwings"
            descripcion="Con Evori Dreamwings, siempre tendréis compañía. Estrenad los diseños en el Acto I del Episodio 9."
          />
          <CardNew
            imagen="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/367e2546ef67d6a89bc00ef6ed8b2359a6b3c4b7-1920x1080.jpg?auto=format&fit=fill&q=80&w=493"
            subtema="ACTUALIZACIONES DEL JUEGO"
            tiempo="hace 6 semanas"
            tema="Notas de la versión 8.11 de VALORANT"
            descripcion="Andaos con cuidado... Echad un vistazo al nuevo mapa: Abyss."
          />
          <CardNew
            descripcion="Desafiad las expectativas y marcad la diferencia en el EPISODIO 8 // ACTO III."
            tema="LA DIFERENCIA // Inicio del Episodio 8: Acto III"
            tiempo="hace 8 semanas"
            subtema="ACTUALIZACIONES DEL JUEGO"
            imagen="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/02d02798386fdc913d370c1a252941cc8056b7ba-1920x1080.jpg?auto=format&fit=fill&q=80&w=493"
          />
          <CardNew
            descripcion="Ha pasado bastante tiempo. Hablemos un rato."
            tema="Rotación de mapas, repeticiones y más"
            tiempo="hace 10 semanas"
            subtema="DESARROLLO"
            imagen="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/eeb966b0733f85f8474da6be1d58b5a69b214fe6-1920x1080.jpg?auto=format&fit=fill&q=80&w=493"
          />
        </div>
      </div>
      <div className="relative md:h-[800px] h-[450px]">
        <div className="absolute inset-0 flex flex-col items-start justify-center z-20 p-6 gap-10 md:ml-6 md:w-[300px] font-bold text-start ">
          <h3 className="md:text-gigant text-gigantMobile text-white ">
            MARCA LA DIFERENECIA
          </h3>
          <p className="text-white font-semibold">
            EPISODIO_08 // ACTO III / AÑO
          </p>
          <button className="button-white mt-6 w-full">VER AHORA</button>
        </div>
        <img
          className="w-full h-full object-cover object-[left_78%_top_0%] md:object-[left_50%_top_50%] "
          src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/318ad6d912fda811ef557c292bc8d70bc1704fec-3440x1020.jpg?auto=format&fit=fill&q=80&h=640"
        />
      </div>
      <div className="p-6 pt-10 bg-auto bg-center flex md:flex-row flex-col items-center justify-between md:h-[1050px] bg-[url('https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/c8157d71a4776dd821d05ed6b82d5d875ca03386-5120x1644.png?auto=format&fit=fill&q=80&h=794')]">
        <div className="md:w-[40%] p-6 pt-10">
          <h1 className="md:text-gigant text-gigantMobile font-bold">
            SOMOS VALORANT
          </h1>
          <p className="font-semibold pt-3 pb-3 md:pt-20">
            DESAFÍA LOS LÍMITES
          </p>
          <p className="text-smMobile">
            Combina tu estilo y experiencia en un escenario global y
            competitivo. Tienes 13 rondas para atacar y defender tu lado con
            armas precisas y habilidades tácticas. Además, al contar con una
            sola vida por ronda, tendrás que pensar más rápido que tu oponente
            si quieres sobrevivir. Enfréntate a enemigos en los modos
            competitivo y normal, así como en Deathmatch y Spike Rush.
          </p>
          <button className="button mt-10 w-full md:w-auto font-semibold">
            CONOCE EL JUEGO
          </button>
        </div>
        <div className="md:w-[50%] flex justify-center pb-6">
          <img
            className="w-[750px] "
            src="https://64.media.tumblr.com/c2ca5b9103909a4c4042a37a4f8dc30b/05082fe5ebb4ab2a-51/s540x810/1ce1ee3d5bc8c72e7a588a449e7e7801217f3fc2.gifv"
          ></img>
        </div>
      </div>
      <div className="p-6 pt-10 gap-10 bg-auto bg-center flex md:flex-row flex-col items-center md:h-[1050px] bg-[url('https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/b9f3efa9355803cc44e4c59d3f4437cab192bec3-5120x1616.png?auto=format&fit=fill&q=80&h=888')]">
        <div className="md:w-[40%]">
          <h1 className="md:text-gigant text-gigantMobile font-bold text-white">
            TUS AGENTES
          </h1>

          <p className="font-semibold text-white mt-3 mb-3 md:pt-20">
            DESAFÍA LOS LÍMITES
          </p>
          <p className="text-white md:text-md text-smMobile">
            Más allá de las armas y las balas, podrás elegir a un agente dotado
            de habilidades versátiles, veloces y letales con las que crearás
            oportunidades para sobresalir. Ningún agente se jugará igual, ni
            ningún momento memorable se verá igual.
          </p>
          <button className="button-white mt-10 w-full md:w-auto">
            VER TODOS LOS AGENTES
          </button>
        </div>
        <div className="md:w-[50%] flex justify-center">
          <img
            className="md:w-[850px] w-[320px]"
            src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/1d62a3751be9d7abfce84da8ca89be7d79f07fed-1232x1232.png"
          ></img>
        </div>
      </div>
      <div className="p-6 pt-10 gap-10 bg-auto bg-center md:h-[1050px] flex md:flex-row flex-col items-center justify-center bg-[url('https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/3828b05489971b4715f673bc0e2db81f6c7afac7-5120x1616.png?auto=format&fit=fill&q=80&h=888')] ">
        <div className="md:w-[50%]">
          <h1 className="md:text-gigant text-gigantMobile font-bold">
            TUS MAPAS
          </h1>
          <p className="font-semibold pt-3 pb-3 md:pt-20">
            PELEA ALREDEDOR DEL MUNDO
          </p>
          <p className="md:text-md text-smMobile">
            Cada mapa es un patio de recreo para mostrar su pensamiento
            creativo. Diseñado específicamente para estrategias de equipo,
            jugadas espectaculares y momentos decisivos. Haz la obra que otros
            imitarán en los años venideros.
          </p>
          <button className="button mt-10 w-full md:w-auto">
            VER TODOS LOS MAPAS
          </button>
        </div>
        <div className="md:w-[40%]">
          <img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/65c45804e00ee97977b6eef06da370543968d161-1232x1232.png?auto=format&fit=fill&q=80&w=728"></img>
        </div>
      </div>
      <div className="md:h-[100px] p-8 bg-[#292929] text-white flex md:flex-row flex-col justify-center items-center md:gap-6 gap-6 md:text-md text-sm font-semibold">
        <p>DESCARGAR EL JUEGO</p>
        <p>DESCARGAR LA APLICACIÓN RIOT MOBILE</p>
      </div>
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
    </div>
  );
};

export default Inicio;

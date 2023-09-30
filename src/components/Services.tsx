import { FaGooglePlay, FaApple } from "react-icons/fa";

import LottieW from "./LottiePlay";
import { Servicios } from "../data/servicios";
const Services = () => {
  return (
    <div
      id="service"
      className="  md:h-screen  relative overflow-hidden flex flex-col justify-center items-center min-h-[629px] "
    >
      <img
        src="/images/bg.webp"
        alt="ECAR fondo"
        className=" absolute top left-0 right-0 -z-20 h-full w-full "
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-800 opacity-90 -z-10 w-full h-1/4 "></div>

      <div className="min-w-[280PX] md:w-[900px] flex flex-col items-center justify-center pt-20">
        <h1
          className="text-black text-5xl font-black"
          data-aos="flip-up"
          data-aos-duration="500"
          data-aos-offset="0"
        >
          Servicios
        </h1>
        <div className="flex flex-wrap gap-x-5 gap-y-8 pt-8 justify-center ">
          {Servicios.map((s, index) => {
            let animation = "";

            if (index % 2 == 0) {
              animation = "fade-left";
            } else {
              animation = "fade-right";
            }
            return (
              <div
                key={index}
                className=" w-[250px] h-[337px] p-3 flex flex-col items-center bg-white rounded-xl  transition-all duration-500 hover:shadow-blue-500 shadow-2xl"
                data-aos={animation}
              >
                <LottieW path={s.lottie} styles="w-[240px] h-[152px]"></LottieW>
                <p className="text-[#386DF9] font-bold text-xl text-center">
                  {s.tittle}
                </p>
                <p className="text-slate-800 text-center">{s.description}</p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col md:flex-row gap-x-10 pt-5 pb-10 gap-y-2">
          <a
            href="https://play.google.com/store/apps/details?id=com.centinel.ecar&hl=es&gl=US"
            target="_blank"
          >
            <div
              className="w-[200px] text-white bg-black rounded-md p-1 flex justify-center items-center gap-x-5 leading-tight hover:bg-green-600 transition-all duration-400 shadow-lg  floating-element "
              data-aos="fade-up"
              data-offset="0"
              data-aos-offset="0"
            >
              <FaGooglePlay></FaGooglePlay>
              <div>
                <p className="font-thin opacity-75">disponible en</p>
                <p className="font-bold">Google Play</p>
              </div>
            </div>
          </a>
          <a
            href="https://apps.apple.com/pe/app/ecargo/id6459537519"
            target="_blank"
          >
            <div
              className="w-[200px] text-white bg-black rounded-md p-1 flex justify-center items-center gap-x-5 leading-tight hover:bg-gray-600 transition-all duration-400 shadow-lg  floating-element"
              data-aos="fade-up"
              data-aos-offset="0"
            >
              <FaApple></FaApple>
              <div>
                <p className="font-thin opacity-75">disponible en</p>
                <p className="font-bold">Apple store</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;

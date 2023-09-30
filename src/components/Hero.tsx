import { FaGooglePlay, FaApple } from "react-icons/fa";

const Hero = () => {
  return (
    <div
      id="hero"
      className=" h-screen relative overflow-hidden flex flex-col  justify-center  items-center min-h-[629px] fade-in"
      style={{
        backgroundImage: `url('/images/bg.webp')`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        //   backgroundPosition: "center",
      }}
    >
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-800 opacity-90 -z-10 w-full h-1/4 "></div>

      <div className=" flex flex-col justify-center items-center pt-20 pb-10">
        <img
          src="/images/logo-horizontal.webp"
          alt="imagen ECAR mobil"
          className=" w-[80px]   pb-3  floating-element"
          data-aos="fade-up"
          data-aos-duration="500"
        />
        <div className="shadow-2xl rounded-[30px]  floating-element">
          <img
            src="/images/mobil-ecar.webp"
            alt="imagen ECAR mobil"
            className=" w-[180px] md:w-[200px]  "
            data-aos="fade-up"
            data-aos-duration="500"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-x-10 pt-5 gap-y-2">
          <a
            href="https://play.google.com/store/apps/details?id=com.centinel.ecar&hl=es&gl=US"
            target="_blank"
          >
            <div className="w-[200px] text-white bg-black rounded-md p-1 flex justify-center items-center gap-x-5 leading-tight hover:bg-green-600 transition-all duration-400 shadow-lg  floating-element ">
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
            <div className="w-[200px] text-white bg-black rounded-md p-1 flex justify-center items-center gap-x-5 leading-tight hover:bg-gray-600 transition-all duration-400 shadow-lg  floating-element">
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

export default Hero;

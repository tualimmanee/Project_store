import React from "react"
import Truck from "../img/truck.jpg";
import background from "../img/background.jpg";
import { heroData } from "../utils/data";



export const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Storage
            </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
            src={Truck}
              className="w-full h-full object-contain"
              alt="truck"
            />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          The transport to
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            Your Site
            </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          TEXT TEST
        </p>
       
      </div>

      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={background}
          className=" ml-auto h-420 w-full lg:w-auto lg:h-650 rounded-3xl"
          alt="hero-bg"
        />
        
        
      </div>

    </section>
  )
}
export default HomeContainer;
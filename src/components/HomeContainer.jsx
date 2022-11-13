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
       
        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          The transport to
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            Your Site
            </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
        Communication today can communicate with each other quickly and without limits. Organizations using modern communication technology have a competitive advantage and achieve faster success. Construction material handling system Is a web application that remembers existing problems It is stock management of materials. To help facilitate both usage, material search, material picking, and easy product inspection. In addition, operators can also know the progress of various projects, thus enabling easy material management. Check the bill of material at any time. Save time in communication between employees and material warehouses.
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
import React from "react"
import Header from "./Header"
import CaptureLogo from "../assets/CaptureLogo.png"

export default function Main() {
    return (
        <div className="w-screen h-screen">
            <title>ProDEVs - Learn Everything About Programming!</title>
            <Header />
            <div className="group bg-white w-screen bg-white pt-[10%]">
                <div className="center"> {/* Logo */}
                    <img src={CaptureLogo} /> 
                </div>
                <p className="text-center bg-conic-180 from-indigo-600 via-indigo-50 to-indigo-600 text-transparent bg-clip-text text-[50px] font-medium max-[520px]:text-[35px]">ProDEVs</p>
                <p className="text-black text-center text-[26px] font-medium max-[520px]:text-[20px]">The area of code learning that never stops!</p>
                <div className="mt-[10px] mb-[20px] py-2 px-[10px] rounded-[25px] max-[520px]:text-[11px] w-fit text-white bg-[#5482ff] font-medium mx-auto cursor-pointer duration-[0.5s] group-hover:bg-white group-hover:border-2 group-hover:border-solid group-hover:border-[#5482ff] group-hover:text-[#5482ff] relative overflow-hidden
                active:bg-white active:border-2 active:border-solid active:border-[#5482ff] active:text-[#5482ff]
                ">
                    Start Learning
                    <div className="absolute bg-[#5482ff] w-[30px] h-full top-0 translate-x-[-30px] group-hover:translate-x-[115px] duration-[0.5s]"></div>    
                </div>
            </div>
        </div>
    )
}
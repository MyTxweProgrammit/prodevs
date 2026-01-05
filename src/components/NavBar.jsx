import React, { useState, useEffect } from "react"

export default function NavBar() {
    const [AppearBig, setAppearBig] = useState(false)
    const [invisible, setInvisible] = useState("")
    const setAllThings = () => {
        setAppearBig(!AppearBig)

        const newInvisible = AppearBig ? "" : "translate-x-[-50px]"
        setInvisible(newInvisible)
    } 

    return (
        <>
            {AppearBig ? (
                <div className={`border-test h-screen w-[170px] z-99 duration-[0.5s]`}>
                    <div onClick={setAllThings}>test</div>
                </div>
            ) : (
                <div
                    onClick={setAllThings} 
                    className={`absolute border-2 border-[#969696] border-solid cursor-pointer rounded-[100%] p-2 shadow-xl hover:scale-125 duration-[0.5s] ${invisible}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="none" stroke="#969696" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 6h18M3 12h18M3 18h18" />
                    </svg>
                </div>
            )
            }
        </>
    )
}
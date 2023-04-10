import React from "react";
import Globe from "../images/globe.png"
import "./Header.css"

export default function Header(){
    return(
        <header>
            <img src={Globe} alt="globe" />
            <span>my travel journal.</span>
        </header>
    )
}
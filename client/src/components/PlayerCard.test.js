import React from "react"; 
import ReactDOM from "react-dom"; 
import PlayerCard from "./PlayerCard.js"
import { render } from "@testing-library/react"; 
 

it("renders h1 tage", () => {
    render("2019 Player")
})
import HomePage from "./pages/homePage"
import React from "react";
import NewArrival from "./Components/landing-page/new-arrival";
import Hero from "../src/Components/landing-page/hero-section"

export default App;

function App() {
    return (
        <>
        <HomePage/>
        <Hero/>
       <NewArrival />
        </>
    )
}
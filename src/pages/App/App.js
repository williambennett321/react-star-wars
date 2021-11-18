import React, { useState } from "react"
import {Routes, Route } from "react-router-dom"
import './App.css';
import StarshipList from "./StarshipList/StarShipList";
import StarshipDetails from "./StarshipDetails/StarshipDetails";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<StarshipList />}/>
      <Route path="/starship/:idx" element={<StarshipDetails/>}/>
    </Routes>

    </>
  );
}

export default App;

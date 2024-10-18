import React from "react";

// Constructor de tarjetas para personajes
export const characterBodyBuilder = (data) => (
  <ul className="list-group list-group-flush text-start pb-2">
    <li className="list-group-item">
      Gender: {data?.properties?.gender ?? "Unknown"}
    </li>
    <li className="list-group-item">
      Eyes Color: {data?.properties?.eye_color ?? "Unknown"}
    </li>
    <li className="list-group-item">
      Hair Color: {data?.properties?.hair_color ?? "Unknown"}
    </li>
  </ul>
);

// Constructor de tarjetas para planetas
export const planetBodyBuilder = (data) => (
  <ul className="list-group list-group-flush text-start pb-2">
    <li className="list-group-item">
      Population: {data?.properties?.population ?? "Unknown"}
    </li>
    <li className="list-group-item">
      Terrains: {data?.properties?.terrain ?? "Unknown"}
    </li>
  </ul>
);

// Constructor de tarjetas para vehículos
export const vehiclesBodyBuilder = (data) => (
  <ul className="list-group list-group-flush text-start pb-2">
    <li className="list-group-item">
      Model: {data?.properties?.model ?? "Unknown"}
    </li>
    <li className="list-group-item">
      Manufacturer: {data?.properties?.manufacturer ?? "Unknown"}
    </li>
    <li className="list-group-item">
      Passengers: {data?.properties?.passengers ?? "Unknown"}
    </li>
  </ul>
);

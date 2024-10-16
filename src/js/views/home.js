import React, { useContext } from "react";
import "../../styles/home.css";
import InfoCard from "../component/InfoCard.jsx";
import { Context } from "../store/appContext.js";
import {
    characterBodyBuilder,
    planetBodyBuilder,
    vehiclesBodyBuilder,
} from "../Functions/CardBuilder.js";

const BASEURL = "https://www.swapi.tech/api/people";

export const Home = () => {
    const { store, actions } = useContext(Context);
    return (
        <div className="text-start mt-5">
            <h1 className="text-danger bold ms-3"> Characters</h1>
            <div className="overflow-container mb-3">
                {store.loading ? (
                    <div className="container-fluid d-flex justify-content-center align-items-center">
                        <div className="spinner-grow text-danger" role="status" style={{ width: "150px", height: "150px" }}>
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    store.peopleDetails.map((result, index) => {
                        let characterBody = characterBodyBuilder(result);  
                        return (
                            <InfoCard
                                key={index}
                                title={result.properties.name}
                                uid={result.uid}
                                body={characterBody} 
                                type="characters"
                                eyeColor={result.properties.eye_color}
                                hairColor={result.properties.hair_color}
                                gender={result.properties.gender}
                            />
                        );
                    })
                )}
            </div>

            <h1 className="text-danger bold ms-3"> Planets</h1>
            <div className="overflow-container mb-3">
                {store.planets.length <= 0
                    ? "Cargando Contenido"
                    : store.planetsDetails.map((result, index) => {
                        let planetBody = planetBodyBuilder(result);  
                        return (
                            <InfoCard
                                key={index}
                                title={result.properties.name}
                                uid={result.uid}
                                body={planetBody} 
                                type="planets"
                            />
                        );
                    })}
            </div>

            <h1 className="text-danger bold ms-3"> Vehicles</h1> 
            <div className="overflow-container mb-3">
                {store.vehiclesDetails.length <= 0
                    ? "Cargando Contenido"
                    : store.vehiclesDetails.map((result, index) => {
                        let vehicleBody = vehiclesBodyBuilder(result);  
                        return (
                            <InfoCard
                                key={index}
                                title={result.properties.name} 
                                uid={result.uid}
                                body={vehicleBody} 
                                type="vehicles" 
                            />
                        );
                    })}
            </div>
        </div>
    );
};

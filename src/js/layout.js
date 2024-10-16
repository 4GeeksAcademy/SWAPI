import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Detalles_characters from "./component/detalles_characters";
import Detalles_planets from "./component/detalles_planets";
import Detalles_vehicles from "./component/detalles_vehicles";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	const footerData = [
		{
			githubURL: "https://github.com/ezebellino",
			name: "Ezequiel Bellino",
			geeksName: "4geeksacademy",
			geeksURL: "https://4geeks.com/es",
		},
	];
	
	return (
		<div className="routerReact">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/person/detalles/:uid" element={<Detalles_characters />} />
						<Route path="/planets/detalles/:uid" element={<Detalles_planets />} />
						<Route path="/vehicles/detalles/:uid" element={<Detalles_vehicles />} />
					</Routes>
					<Footer properties={footerData}/>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};


export default injectContext(Layout);
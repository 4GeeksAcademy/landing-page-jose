import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

import {Navbar} from './navbar.jsx';
import {Card} from './card.jsx'; 
import {Welcome} from './welcome.jsx';
import {Footer} from './footer.jsx'
import { Version } from "./version.jsx";

const Home = () => {
	
	const setGrid = (cols) => {
    const container = document.getElementById("mainContainer");

    const cards = container.querySelectorAll(".card-col");

    cards.forEach((card) => {
    card.className = "card-col col-12 col-md-" + (12 / cols);
  });
};
	
	return (
	<div>
		<Navbar/>
		<Version setGrid={setGrid}/>
		
		<Welcome/>
		
		<div id= "mainContainer" className="container">
			<div className="row g-4">

				<div className="card-col col-12 col-md-3">
					<Card/>
				</div>

				<div className="card-col col-12 col-md-3">
					<Card/>
				</div>

				<div className="card-col col-12 col-md-3">
					<Card/>
				</div>

				<div className="card-col col-12 col-md-3">
					<Card/>
				</div>
			</div>
		</div>
		<Footer/>
	</div>
	);
};

export default Home;
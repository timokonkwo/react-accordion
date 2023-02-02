import { useState } from "react";
import "./App.css";
import Question from "./Question";
import data from "./data";

function App() {
	const questions = data.map((item) => (
		<Question title={item.title} key={item.id} info={item.info} />
	));

	return (
		<main>
			<div className="container">
				<h2>Accordion Demonstration with ReactJS</h2>

				<section className="info">{questions}</section>
			</div>
		</main>
	);
}

export default App;

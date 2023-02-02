import { useState } from "react";

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

export default function Question({ title, info }) {
	const [display, setDisplay] = useState(false);

	const toggle = () => {
		setDisplay((prev) => !prev);
	};
	return (
		<article className="question">
			<header>
				<h4>{title}</h4>
				<button onClick={toggle} className="btn">
					{display ? (
						<AiOutlineMinusCircle/>
					) : (
						<AiOutlinePlusCircle/>
					)}
				</button>
			</header>

			{display && <p>{info}</p>}
		</article>
	);
}

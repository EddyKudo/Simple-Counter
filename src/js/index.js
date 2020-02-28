//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

function MyCounter(props) {
	return (
		<div className="outerDiv">
			<div className="calendar">
				<i className="far fa-clock" />
			</div>

			<div className="six">{props.day % 10}</div>
			<div className="five">{props.hur % 10}</div>
			<div>:</div>
			<div className="four">{props.din % 6}</div>
			<div className="three">{props.min % 10}</div>
			<div>:</div>
			<div className="two">{props.dec % 6}</div>
			<div className="one">{props.sec % 10}</div>
		</div>
	);
}

MyCounter.propTypes = {
	sec: PropTypes.number,
	dec: PropTypes.number,
	min: PropTypes.number,
	din: PropTypes.number,
	hur: PropTypes.number,
	day: PropTypes.number
};
let counter = 0;
setInterval(function() {
	const oneSec = Math.floor(counter / 10);
	let tenSec = Math.floor(counter / 100);
	const oneMin = Math.floor(counter / 600);
	const tenMin = Math.floor(counter / 6000);
	const oneHour = Math.floor(counter / 36000);
	const oneDay = Math.floor(counter / 360000);

	ReactDOM.render(
		<MyCounter
			sec={oneSec}
			dec={tenSec}
			min={oneMin}
			din={tenMin}
			hur={oneHour}
			day={oneDay}
		/>,
		document.querySelector("#app")
	);
	counter++;
}, 100);

//render your react application

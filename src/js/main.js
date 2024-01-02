// console.log("the variable:", global.TYPED_ARRAY_SUPPORT);
import _ from "lodash";
import Engine from "./engine";

document.addEventListener("DOMContentLoaded", function() {
	const engine = new Engine();
	// call other methods or add additional setup here if needed

	console.log("Hey, something happened!");

	localStorage.clear();

	h1 = document.querySelector("h1");
	h1.addEventListener("click", function() {
		console.log("Clicked!");

		let count = localStorage.getItem("count");

		if (count) {
			console.log("Got count:", count);
			count = JSON.parse(count);

			let {index, value} = count;
			console.log(`${index}: ${value}`);
			index += 1;
			value += 1;

			localStorage.setItem("count", JSON.stringify({index:index, value:value}));
		}
		else
		{
			console.log("Got no count:", count);
			count = { index: 1, value: 1000 };
			localStorage.setItem("count", JSON.stringify(count));
		}

		engine.meter.tick();
	});
})

 
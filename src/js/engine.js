import "fpsmeter";

class Engine {
	constructor() {
		this.content = document.querySelector("main");
		this.meterContainer = this.content.querySelector("#meter")

		this.startButton = document.querySelector("#start")
		this.stopButton = document.querySelector("#stop")
		this.resetButton = document.querySelector(".count-reset")
		this.inputField = document.querySelector(".count-input")

		this.initFpsmeter()
		this.initClickCount()
	}

	initClickCount() {
		// Set up the click count
		localStorage.clear();

		canvas = document.querySelector("#canvas");

		meter = this.meter;
		canvas.addEventListener("click", function() {
			console.log("Clicked!");

			let count = localStorage.getItem("count");

			if (count) {
				// console.log("Got count:", count);
				count = JSON.parse(count);

				let {index, value} = count;
				console.log(`${index}: ${value}`);
				index += 1;
				value += 1;

				localStorage.setItem("count", JSON.stringify({index:index, value:value}));
			}
			else
			{
				// console.log("Got no count:", count);
				count = { index: 1, value: 1000 };
				localStorage.setItem("count", JSON.stringify(count));
			}

			meter.tick();
		});
	}

	initFpsmeter() {
		console.log("Init fps meter");
		this.meter = new window.FPSMeter(this.meterContainer, {
			graph: 0,
			position:"relative",
			maxFps: 100,
			// heat: 1,
			theme: "dark",
			// history: 25,
			// top: 0,
			// bottom: 40,
			// left: `calc(${this.width}px + 20.5em)`,
			// transform: "translateX(-100%)",
		})
	}
}

export default Engine;
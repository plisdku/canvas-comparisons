import "fpsmeter";

class Engine {
	constructor() {
		this.content = document.querySelector("main");
		this.meterContainer = this.content.querySelector(".meter")

		console.log("Meter container:", this.meterContainer)

		this.initFpsmeter()
	}

	initFpsmeter() {
		this.meter = new window.FPSMeter(this.meterContainer, {
			graph: 1,
			position:"relative",
			maxFps: 10,
			// heat: 1,
			// theme: "light",
			// history: 25,
			// top: 0,
			// bottom: 40,
			// left: `calc(${this.width}px + 20.5em)`,
			// transform: "translateX(-100%)",
		})
	}
}

export default Engine;
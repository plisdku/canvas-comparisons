import { startCoreAnimationLoop } from "scrawl-canvas";
import Engine from "./engine";

class DOMEngine extends Engine {
	constructor() {
		super();
		this.canvas = document.querySelector("#canvas");
		this.frameCount = 0;
		this.request = null;

		this.stopButton.addEventListener("click", () => {
			cancelAnimationFrame(this.request)
		})
		this.startButton.addEventListener("click", () => {
			this.request = requestAnimationFrame(() => this.animate())
		})

		this.inputField.addEventListener("input", () => {
			this.initRectangles(this.inputField.value)
		})
		this.resetButton.addEventListener("click", () => {
			console.log("Reset!")

			this.inputField.value = 10
			this.initRectangles(this.inputField.value)
		})

		let numRects = this.inputField.value || 10
		this.initRectangles(numRects)
	}

	initRectangles(numRects) {

		// Set up the rectangle drawing stuff
		this.rects = [];
		this.canvas.innerHTML = ""

		let width = this.canvas.clientWidth
		let height = this.canvas.clientHeight

		console.log("Canvas size:", width, height)

		for (let ii = 0; ii < numRects; ii++) {
			let r = document.createElement("div")
			let x = ii*10
			let y = ii*20
			let size = 30
			r.className = "rectangle"
			r.style.width = `${size}px`
			r.style.height = `${size}px`
			r.style.position = "absolute"
			r.style.border = "1px solid black"
			r.style.transform = `translate(${x}px, ${y}px)`
			this.rects.push({x, y, size, element: r})
			this.canvas.appendChild(r)
		}
	}


	animate() {
		// console.log("Frame count:", this.frameCount++);

		this.rects.forEach((record, index) => {
			record.x -= 10;
			if (record.x + record.size < 0) {
				record.x = this.canvas.clientWidth;
			}
			record.element.style.transform = `translate(${record.x}px, ${record.y}px`
		})

		this.request = requestAnimationFrame(() => this.animate())
		this.meter.tick()
	}

}

document.addEventListener("DOMContentLoaded", () => {
	const engine = new DOMEngine();
	// engine.render();
});

export default DOMEngine;
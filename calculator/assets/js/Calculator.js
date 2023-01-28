/*
		AQUARIUM Tank Size - Volume CALCULATOR
*/

// Base unit
let BASE = { dist: "cm", vol: "cm3" };

// User preferences for units
let UNITS = {
	dist: { cm: 1, m: 100, inch: 2.54, ft: 30.48 },
	vol: {
		cm3: 1,
		l: 1000,
		m3: 1000000,
		inch3: 16.387064,
		gal: 3785.411784,
		ft3: 28316.846592,
	},
};

// Input schema
class InputZ {
	constructor(value, unit) {
		this.value = Number(value);
		this.unit = unit;

		if (this.value === null || isNaN(this.value) || this.value < 0) {
			this.value = 0;
		}
	}
}

// Check for minimum number of inputs
function validate_minimum_inputs(...args) {
	let nullCounter = 0;

	for (let i = 0; i < args.length; i++) {
		if (args[i].value === 0) {
			nullCounter++;
		}
	}

	if (nullCounter < 2) {
		return true;
	} else {
		return `Please provide enough inputs`;
	}
}

// Convert to base unit
function convert_to_base(base_unit, ...inputs) {
	let _inputs = [...inputs];
	let _unit = base_unit === "cm" ? UNITS.dist : UNITS.vol;
	_inputs.forEach((input) => {
		if (input.unit !== base_unit) {
			input.value = input.value * _unit[input.unit];
		}
	});
	return _inputs;
}

// Convert back to user specified units
function convert_to_default(base_unit, ...inputs) {
	let _inputs = [...inputs];
	let _unit = base_unit === "cm" ? UNITS.dist : UNITS.vol;
	_inputs.forEach((input) => {
		if (input.unit !== base_unit) {
			input.value = input.value / _unit[input.unit];
		}
	});
	return _inputs;
}

// Find the fill depth
function fill_depth(percentage, volume, height) {
	percentage = percentage * 0.01;
	volume *= percentage;
	height *= percentage;
	return [volume, height];
}

class Tank {
	constructor(message, fill, volume, ...dimensions) {
		// Check for minimum number of inputs
		let _minimum = validate_minimum_inputs(volume, ...dimensions);
		if (_minimum !== true) {
			message.push(_minimum);
		} else {
			// Convert to base unit
			convert_to_base(BASE.vol, volume);
			convert_to_base(BASE.dist, ...dimensions);

			// Calculate the missing value
			this.calculate();

			// Convert back to user specified units
			convert_to_default(BASE.vol, volume);
			convert_to_default(BASE.dist, ...dimensions);

			// Find the fill depth
			let _fill = fill_depth(fill[0], volume.value, height.value);
			fill.push(..._fill);
		}

		// Results
		this.results = [...arguments];
	}
}

class Cuboid extends Tank {
	constructor(message, fill, volume, length, width, height) {
		super(...arguments);
	}

	calculate() {
		if (!length.value) {
			length.value = volume.value / (width.value * height.value);
		}
		if (!width.value) {
			width.value = volume.value / (length.value * height.value);
		}
		if (!height.value) {
			height.value = volume.value / (length.value * width.value);
		} else {
			volume.value = length.value * width.value * height.value;
		}
	}
}

class Cube extends Tank {
	constructor(message, fill, volume, length, width, height) {
		super(...arguments);
	}

	calculate() {
		if (!length.value) {
			length.value = Math.cbrt(volume.value);
		} else {
			volume.value = Math.pow(length.value, 3);
		}
	}
}

class Cylinder extends Tank {
	constructor(message, fill, volume, diameter, height) {
		super(...arguments);
	}

	calculate() {
		if (!diameter.value) {
			// d = 2 * (V / (pi * h))**(1/2);
			diameter.value =
				2 * (volume.value / (Math.PI * height.value)) ** (1 / 2);
		}
		if (!height.value) {
			// h = V / (pi * (d/2)**2);
			height.value = volume.value / (Math.PI * (diameter.value / 2) ** 2);
		} else {
			// v = pi * (d/2)**2 * h;
			volume.value = Math.PI * (diameter.value / 2) ** 2 * height.value;
		}
	}
}

//----------------------------------------
// 		Example
//----------------------------------------

// Input the percentage ["percentage", "volume", "height"]
// Results in user specified Units for the Input fields
// let fill = [10];

// Calculated by default
// let volume = new InputZ("1000", "l");

// Units should match the keys in UNITS
// let length = new InputZ(100, "cm");
// let width = new InputZ("0", "m");
// let height = new InputZ("100", "cm");

// For Cylinder only
// diameter = new InputZ("80", "cm");

// let tank;

//----------------------------------------
//		Cuboid
//----------------------------------------
// tank = new Cuboid([], fill, volume, length, width, height);

//----------------------------------------
// 		Cube
//----------------------------------------
// height = length
// height = InputZ() is necessary for fill depth calculation
// tank = new Cube([], fill, volume, length);

//----------------------------------------
// 		Cylinder
//----------------------------------------
// tank = new Cylinder([], fill, volume, diameter, height);

//----------------------------------------
//		Output
//----------------------------------------
// console.log(tank);






	
	// let length = new InputZ("100", "cm");
	// let width = new InputZ("0", "m");
	// let height = new InputZ("100", "cm");
	// let volume = new InputZ("100", "l");
	// let fill = [10];
	
	// let tank = new Cuboid([], fill, volume, length, width, height);
	// console.log(tank);


	function calculateCube(l, v, f) {
		
		length = new InputZ(l.value, l.unit);
		height = length;
		volume = new InputZ(v.value, v.unit);
		fill = f;

		let tank = new Cube([], fill, volume, length);

		return tank
		
	}
	
	function calculateCuboid(l, w,h, v, f) {
		
		length = new InputZ(l.value, l.unit);
		width = new InputZ(w.value, w.unit);
		height = new InputZ(h.value, h.unit);
		volume = new InputZ(v.value, v.unit);
		fill = f;

		let tank = new Cuboid([], fill, volume, length, width, height);

		return tank
		
	}
	
	function calculateCylinder(d, h, v, f) {
		
		diameter = new InputZ(d.value, d.unit);
		height = new InputZ(h.value, h.unit);
		volume = new InputZ(v.value, v.unit);
		fill = f;

		let tank = new Cylinder([], fill, volume, diameter, height);

		return tank
		
	}
	
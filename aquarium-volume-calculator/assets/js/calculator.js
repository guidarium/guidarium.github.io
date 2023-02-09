/*
tankProperties = {
	fill?: {
		percentage:80
		height?: {value:25, unit:"cm"}
		volume?: {value:35, unit:"l"}
	}
	volume: {value:125, unit:"l"}

        length: {value:25, unit:"cm"}
        width: {value:25, unit:"cm"}
        height: {value:25, unit:"cm"}
    }

    tankType = "cube"

    const tank = new Tank(tankType, tankProperties)

    // Validate Minimum Required Inputs
    // Validate Individual Inputs
    // Convert to Base Units
    // Calculate
    // Convert Back to Original Units
    // Return a Similar Object
    
*/

////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
// Input schema
class TankInput {
	constructor(value, unit) {
		this.value = Number(value);
		this.unit = String(unit);

		if (this.value === null || isNaN(this.value) || this.value < 0) {
			this.value = 0;
		}
	}
}
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////

////////////////////////////////////////////////////
// Base units
let BASE = { dist: "cm", vol: "cm3" };

// User preferences for units
let UNITS = {
	dist: {
		cm: 1,
		m: 100,
		inch: 2.54,
		ft: 30.48,
	},
	vol: {
		cm3: 1,
		l: 1000,
		m3: 1000000,
		inch3: 16.387064,
		gal: 3785.411784,
		ft3: 28316.846592,
	},
};

let volume,
	length,
	width,
	height,
	diameter,
	radius,
	side1,
	side2,
	side3,
	longWidth,
	circumference,
	lidCircumference,
	toCalculate;
////////////////////////////////////////////////////

//--------------------------------------------------
//      HELPER FOR CONSOLE LOG / TABLE
function Log(name, table) {
	if (!table) {
		console.log(
			`%c ${String(name)}`,
			"background: #222; color: #0d69f2; font-size:25px",
		);
	} else {
		console.log(
			`%c ${String(name)}`,
			"background: #222; color: #bada55; font-size:25px",
		);
		console.table(table);
	}
}
//--------------------------------------------------
// Helper for Debugging
function check() {
	let _every = {
		volume,
		length,
		width,
		height,
		diameter,
		radius,
		side1,
		side2,
		side3,
		longWidth,
		circumference,
		lidCircumference,
	};
	Log("Checking", _every);
}
//--------------------------------------------------

////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
// CREATE A TANK FROM THIS
function TANK(type, properties, calculate = "volume") {
	// Deep clone the object
	let _properties = structuredClone(properties);

	toCalculate = calculate;

	_properties[calculate].value = 0;

	({
		volume,
		length,
		width,
		height,
		diameter,
		radius,
		side1,
		side2,
		side3,
		longWidth,
		circumference,
		lidCircumference,
	} = _properties);

	switch (type) {
		case "cube":
			{
				new Cube(volume, length);
			}
			break;

		case "cuboid":
			{
				new Cuboid(volume, length, width, height);
			}
			break;

		case "cylinder":
			{	
				new Cylinder(volume, diameter, height);
			}
			break;

		case "halfCylinder":
			{
				new HalfCylinder(volume, diameter, height);
			}
			break;

		case "quarterCylinder":
			{
				new QuarterCylinder(volume, radius, height);
			}
			break;

		case "triangularPrism":
			{
				new TriangularPrism(volume, side1, side2, side3, height);
			}
			break;

		case "triangularPrismRA":
			{
				new TriangularPrismRA(volume, side1, height);
			}
			break;

		case "bowFront":
			{
				new BowFront(volume, length, width, longWidth, height);
			}
			break;

		case "cornerPentagon":
			{
				new CornerPentagon(volume, length, width, height);
			}
			break;

		case "hexagon":
			{
				new Hexagon(volume, width, height);
			}
			break;

		case "flatBackHexagon":
			{
				new FlatBackHex(volume, length, width, side1, side2, height);
			}
			break;

		case "lShaped":
			{
				new LShaped(volume, length, width, side1, side2, height);
			}
			break;

		case "bowl":
			{
				new Bowl(volume, circumference, lidCircumference, height);
			}
			break;

		default:
			throw `"Tank Type" is wrong or missing`;
	}

	// Convert Back to Original Units

	// Return a Similar Object
	return _properties;
}
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////

//--------------------------------------------------
// Check for minimum number of inputs
function hasEnoughInputs(args) {
	let nullCounter = 0;

	args.forEach((input) => {
		if (!(input.value > 0)) {
			nullCounter++;
		}
	});
	if (nullCounter > 1) {
		return false;
	}
	return true;
}
//--------------------------------------------------
// Convert to Base Units
function convert_to_base(base_unit, ...inputs) {
	let _unit = base_unit === "cm" ? UNITS.dist : UNITS.vol;
	inputs.forEach((input) => {
		input.value = input.value * _unit[input.unit];
	});
}
//--------------------------------------------------
// Convert to Original Units
function convert_to_original(base_unit, ...inputs) {
	let _unit = base_unit === "cm" ? UNITS.dist : UNITS.vol;
	inputs.forEach((input) => {
		input.value = input.value / _unit[input.unit];
		input.value = Number(input.value.toFixed(2));
	});
}
//--------------------------------------------------

////////////////////////////////////////////////////
// Find the fill depth
function FillDepth(percentage, volume, height) {
	let _percentage = percentage * 0.01;
	let _volume = volume * _percentage;
	let _height = height * _percentage;

	return {
		volume: Number(_volume.toFixed(2)),
		height: Number(_height.toFixed(2)),
	};
}
////////////////////////////////////////////////////

////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
class Tank {
	constructor([...args]) {
		// Validate Minimum Required Inputs
		if (!hasEnoughInputs(args)) {
			throw "You cannot leave the required fields empty";
		}

		const volume = args[0];
		const dimensions = args.slice(1);

		// Convert to Base
		convert_to_base(BASE.vol, volume);
		convert_to_base(BASE.dist, ...dimensions);

		// Calculate
		this.calculate();

		// Convert back to Original
		convert_to_original(BASE.vol, volume);
		convert_to_original(BASE.dist, ...dimensions);
	}
}
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////

////////////////////////////////////////////////////
class Cube extends Tank {
	constructor(volume, length) {
		super(arguments);
	}
	calculate() {
		if (toCalculate === "length") {
			length.value = Math.cbrt(volume.value);
		} else {
			volume.value = Math.pow(length.value, 3);
		}
	}
}
////////////////////////////////////////////////////
class Cuboid extends Tank {
	constructor(volume, length, width, height) {
		super(arguments);
	}
	calculate() {
		if (toCalculate === "length") {
			length.value = volume.value / (width.value * height.value);
		}
		if (toCalculate === "width") {
			width.value = volume.value / (length.value * height.value);
		}
		if (toCalculate === "height") {
			height.value = volume.value / (length.value * width.value);
		} else {
			volume.value = length.value * width.value * height.value;
		}
	}
}
////////////////////////////////////////////////////
class Cylinder extends Tank {
	constructor(volume, diameter, height) {
		super(arguments);
	}
	calculate() {
		if (toCalculate === "diameter") {
			// d = 2 * (V / (pi * h))**(1/2);
			diameter.value =
				2 * Math.sqrt(volume.value / (Math.PI * height.value));
		}
		if (toCalculate === "height") {
			// h = V / (pi * (d/2)**2);
			height.value = volume.value / (Math.PI * (diameter.value / 2) ** 2);
		} else {
			// v = pi * (d/2)**2 * h;
			volume.value = Math.PI * (diameter.value / 2) ** 2 * height.value;
		}
	}
}
////////////////////////////////////////////////////
class HalfCylinder extends Tank {
	constructor(volume, diameter, height) {
		super(arguments);
	}
	calculate() {
		if (toCalculate === "diameter") {
			diameter.value =
				2 * Math.sqrt((2 * volume.value) / (Math.PI * height.value));
		}
		if (toCalculate === "height") {
			height.value =
				(2 * volume.value) / (Math.PI * (diameter.value / 2) ** 2);
		} else {
			volume.value =
				0.5 * Math.PI * (diameter.value / 2) ** 2 * height.value;
		}
	}
}
////////////////////////////////////////////////////
class QuarterCylinder extends Tank {
	constructor(volume, radius, height) {
		super(arguments);
	}
	calculate() {
		if (toCalculate === "radius") {
			radius.value = Math.sqrt(
				(4 * volume.value) / (Math.PI * height.value),
			);
		}
		if (toCalculate === "height") {
			height.value = (4 * volume.value) / (Math.PI * radius.value ** 2);
		} else {
			volume.value = 0.25 * Math.PI * radius.value ** 2 * height.value;
		}
	}
}
////////////////////////////////////////////////////
class TriangularPrism extends Tank {
	constructor(volume, side1, side2, side3, height) {
		super(arguments);
	}
	calculate() {
		const s = (side1.value + side2.value + side3.value) / 2;
		const area = Math.sqrt(
			s * (s - side1.value) * (s - side2.value) * (s - side3.value),
		);

		if (toCalculate === "height") {
			height.value = volume.value / area;
			// } else if (toCalculate === "side1") {
			// 	side1.value = 2 * Math.sqrt(s * (s - side2.value) * (s - side3.value) / height.value);
			// } else if (toCalculate === "side2") {
			// 	side2.value = 2 * Math.sqrt(s * (s - side1.value) * (s - side3.value) / height.value);
			// } else if (toCalculate === "side3") {
			// 	side3.value = 2 * Math.sqrt(s * (s - side1.value) * (s - side2.value) / height.value);
		} else {
			volume.value = area * height.value;
		}
	}
}
////////////////////////////////////////////////////
class TriangularPrismRA extends Tank {
	constructor(volume, side1, height) {
		super(arguments);
	}
	calculate() {
		const area = 0.5 * side1.value * side1.value;

		if (toCalculate === "side1") {
			side1.value = Math.pow(
				Math.pow(side3.value, 2) - Math.pow(side2.value, 2),
				0.5,
			);
		} else if (toCalculate === "height") {
			height.value = volume.value / area;
		} else {
			volume.value = area * height.value;
		}
	}
}
////////////////////////////////////////////////////
class BowFront extends Tank {
	constructor(volume, length, width, longWidth, height) {
		super(arguments);
	}
	calculate() {
		// Radius Assumption is incorrect
		// const r =   const r = width.value / 2;
		// const beta = Math.atan(0.5 * length.value / (longWidth.value - width.value));
		// const alpha = 2 * Math.PI - 4 * beta;

		// if (toCalculate === "height") {
		// 	height.value = volume.value / (length.value * width.value + 0.5 * r * r * (alpha - Math.sin(alpha)));
		//   } else if (toCalculate === "length") {
		// 	length.value = volume.value / (height.value * width.value + 0.5 * r * r * (alpha - Math.sin(alpha)));
		//   } else if (toCalculate === "width") {
		// 	const newVolume = volume.value / (height.value * length.value + 0.5 * r * r * (alpha - Math.sin(alpha)));
		// 	width.value = 2 * Math.tan(alpha / 2) * Math.pow(newVolume / height.value, 0.5);
		//   } else if (toCalculate === "longWidth") {
		// 	const newVolume = volume.value / (height.value * length.value + 0.5 * r * r * (alpha - Math.sin(alpha)));
		// 	longWidth.value = 2 * r * Math.tan(alpha / 2) * Math.pow(newVolume / height.value, 0.5);
		//   } else {
		// 	volume.value = height.value * length.value * width.value + 0.5 * r * r * (alpha - Math.sin(alpha)) * height.value;
		//   }
		const area =
			(Math.PI * (length.value / 2) * (longWidth.value - width.value)) /
				2 +
			length.value * width.value;

		if (toCalculate === "height") {
			height.value = volume.value / area;
			// } else if (toCalculate === "length") {
			// 	length.value = area;
			// } else if (toCalculate === "width") {
			// 	width.value = area;
			// } else if (toCalculate === "longWidth") {
			// 	longWidth.value = area;
		} else {
			volume.value = area * height.value;
		}
	}
}
////////////////////////////////////////////////////
class CornerPentagon extends Tank {
	constructor(volume, length, width, height) {
		super(arguments);
	}
	calculate() {
		const squareArea = length.value ** 2;
		const triangleArea = (1 / 2) * (length.value - width.value) ** 2;
		const area = squareArea - triangleArea;

		if (toCalculate === "height") {
			height.value = volume.value / area;
		} else {
			volume.value = area * height.value;
		}
	}
}
////////////////////////////////////////////////////
class Hexagon extends Tank {
	constructor(volume, width, height) {
		super(arguments);
	}
	calculate() {
		const apothem = width.value / (2 * Math.tan(Math.PI / 6));

		if (toCalculate === "height") {
			height.value = volume.value / (3 * apothem * width.value);
			// } else if (toCalculate === "width") {
			// 	const apothem = Math.sqrt((3 * volume.value) / (height.value * 6));
			// 	width.value = (2 * apothem) / Math.tan(Math.PI / 6);
		} else {
			volume.value = 3 * apothem * width.value * height.value;
		}
	}
}
////////////////////////////////////////////////////
class FlatBackHex extends Tank {
	constructor(volume, length, width, side1, side2, height) {
		super(arguments);
	}
	calculate() {
		const h = Math.sqrt(
			side2.value ** 2 - ((length.value - side1.value) / 2) ** 2,
		);
		const trapaziumArea = ((length.value + side1.value) * h) / 2;
		const rectangleAre = length.value * width.value;
		const area = rectangleAre + trapaziumArea;

		if (toCalculate === "height") {
			height.value = volume.value / area;
		} else {
			volume.value = area * height.value;
		}
	}
}
////////////////////////////////////////////////////
class LShaped extends Tank {
	constructor(volume, length, width, side1, side2, height) {
		super(arguments);
	}
	calculate() {
		const area1 = length.value * side1.value;
		const area2 = width.value * side2.value;
		const center = side1.value * side2.value;

		const area = area1 + area2 - center;

		if (toCalculate === "height") {
			height.value = volume.value / area;
		} else {
			volume.value = area * height.value;
		}
	}
}
////////////////////////////////////////////////////
class Bowl extends Tank {
	constructor(volume, circumference, lidCircumference, height) {
		super(arguments);
	}
	calculate() {
		const r = circumference.value / (2 * Math.PI);
		const sphereVolume = (4 / 3) * Math.PI * r ** 3;

		const h = 2 * r - height.value;
		const capVolume = ((Math.PI * h ** 2) / 3) * (3 * r - h);
		const area = 1;

		volume.value = sphereVolume - capVolume;
	}
}
////////////////////////////////////////////////////

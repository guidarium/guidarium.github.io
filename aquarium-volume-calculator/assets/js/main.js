import "./style.css";
import javascriptLogo from "./javascript.svg";
import TANK, { TankInput, Log, FillDepth } from "./AquariumVolumeCalculator";
import { object } from "zod";
// import Tank from "./AquariumVolumeCalculator";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
//==                                             ==|
//==                   RUN                       ==|
//==                                             ==|
//--------------------------------------------------
//
Log("Hello")
//
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////


////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
//==                                             ==|
//==                 TEMPLATES                   ==|
//==                                             ==|
//--------------------------------------------------
//--------------------------------------------------
// const tankType = "cuboid";
//
// let tankProperties = {
// 	volume: new TankInput(702.94, "gal"),
// 	length: new TankInput(100, "inch"),
// 	width: new TankInput(25, "inch"),
// 	height: new TankInput(50, "inch"),
// };
//
// let toCalculate = "volume";
//--------------------------------------------------
//--------------------------------------------------
let fillPercentage = 90;
let fill;
//--------------------------------------------------
//--------------------------------------------------
// function calculate() {
// 	let tank = new TANK(tankType, tankProperties, toCalculate);
// 	Object.assign(tankProperties, tank);

// 	if (
// 		tankProperties.volume.value > 0 &&
// 		tankProperties.height.value > 0 &&
// 		fillPercentage > 0
// 	) {
// 		fill = FillDepth(
// 			fillPercentage,
// 			tankProperties.volume.value,
// 			tankProperties.height.value,
// 		);
// 	}
// }
//--------------------------------------------------
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////

//--------------------------------------------------
// This is common for every tank object.
// One of the tankProperties should be given as string
//--------------------------------------------------
// let toCalculate = "volume";
//--------------------------------------------------

//--------------------------------------------------
// Atleast one tank instance should be created
// Returns the calculated properties in the form of original object
//--------------------------------------------------
// const tank = new Tank(tankType, tankProperties, toCalculate);
//--------------------------------------------------

//--------------------------------------------------
// Should be created if only after the tank instance successfully calculated the values
// Returns the calculated properties as {volume: value, height: value}
// Unit is the default unit user chose in the input to calculate the original tank values
//--------------------------------------------------
// const fill = FillDepth(fillPercentage, tank.volume.value, tank.height.value);
//--------------------------------------------------

////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
//==                                             ==|
//==                   SHAPES                    ==|
//==                                             ==|
//--------------------------------------------------

//--------------------------------------------------
//==                                             ==|
//==                    Cube                     ==|
//==                                             ==|
//--------------------------------------------------
// const tankType = "cube";
//
// let tankProperties = {
// 	volume: new TankInput(702.94, "gal"),
// 	length: new TankInput(100, "inch"),
// };
//--------------------------------------------------

//--------------------------------------------------
//==                                             ==|
//==                   Cuboid                    ==|
//==                                             ==|
//--------------------------------------------------
// const tankType = "cuboid";
//
// let tankProperties = {
// 	volume: new TankInput(702.94, "gal"),
// 	length: new TankInput(100, "inch"),
// 	width: new TankInput(25, "inch"),
// 	height: new TankInput(50, "inch"),
// };
//--------------------------------------------------

//--------------------------------------------------
//==                                             ==|
//==                  Cylinder                   ==|
//==                                             ==|
//--------------------------------------------------
// const tankType = "cylinder";
//
// let tankProperties = {
// 	volume: new TankInput(702.94, "gal"),
// 	diameter: new TankInput(0.5, "m"),
// 	height: new TankInput(50, "inch"),
// };
//--------------------------------------------------

//--------------------------------------------------
//==                                             ==|
//==                Half Cylinder                ==|
//==                                             ==|
//--------------------------------------------------
// const tankType = "halfCylinder";
//
// let tankProperties = {
// 	volume: new TankInput(702.94, "gal"),
// 	diameter: new TankInput(0.5, "m"),              // Flat back length
// 	height: new TankInput(50, "inch"),
// };
//--------------------------------------------------

//--------------------------------------------------
//==                                             ==|
//==              Quarter Cylinder               ==|
//==                                             ==|
//--------------------------------------------------
// const tankType = "quarterCylinder";
//
// let tankProperties = {
// 	volume: new TankInput(702.94, "gal"),
// 	radius: new TankInput(50, "cm"),                // Length of a flat side
// 	height: new TankInput(50, "inch"),
// };
//--------------------------------------------------

//--------------------------------------------------
//==                                             ==|
//==              Triangular Prism               ==|// Placed at the center
//==                                             ==|
//--------------------------------------------------
// const tankType = "triangularPrism";
//
// let tankProperties = {
// 	volume: new TankInput(702.94, "gal"),
// 	side1: new TankInput(50, "inch"),               // One of the 3 sides of the triangle
// 	side2: new TankInput(50, "inch"),               // One of the 3 sides of the triangle
// 	side3: new TankInput(50, "cm"),                 // One of the 3 sides of the triangle
// 	height: new TankInput(50, "inch"),
// };
//--------------------------------------------------

//--------------------------------------------------
//==                                             ==|
//==          Corner Triangular Prism            ==|// Placed in the corner (Right angled)
//==                                             ==|
//--------------------------------------------------
// const tankType = "triangularPrismRA";
//
// let tankProperties = {
// 	volume: new TankInput(702.94, "gal"),
// 	side1: new TankInput(50, "inch"),               // One of the 2 sides adjacent to the corner
// 	height: new TankInput(50, "inch"),
// };
//--------------------------------------------------

//--------------------------------------------------
//==                                             ==|
//==                 Bow Front                   ==|
//==                                             ==|
//--------------------------------------------------
// const tankType = "bowFront";
//
// let tankProperties = {
// 	volume: new TankInput(702.94, "gal"),
// 	length: new TankInput(100, "inch"),
// 	width: new TankInput(25, "inch"),               // One of the 2 sides (Shortest width)
// 	longWidth: new TankInput(84.5, "cm"),           // Center width (Width of the bow)
// 	height: new TankInput(50, "inch"),
// };
//--------------------------------------------------

//--------------------------------------------------
//==                                             ==|
//==              Corner Pentagon                ==|// Right angled Symmetric
//==                                             ==|
//--------------------------------------------------
// const tankType = "cornerPentagon";
//
// let tankProperties = {
// 	volume: new TankInput(702.94, "gal"),
// 	length: new TankInput(100, "inch"),             // One of the two sides adjacent to the corner
// 	width: new TankInput(25, "inch"),               // One of the two sides opposite to the length
// 	height: new TankInput(50, "inch"),
// };
//--------------------------------------------------

//--------------------------------------------------
//==                                             ==|
//==                  Hexagon                    ==|// Symmetric
//==                                             ==|
//--------------------------------------------------
// const tankType = "hexagon";
//
// let tankProperties = {
// 	volume: new TankInput(702.94, "gal"),
// 	width: new TankInput(25, "inch"),               // Width of a single panel
// 	height: new TankInput(50, "inch"),
// };
//--------------------------------------------------

//--------------------------------------------------
//==                                             ==|
//==             Flat Back Hexagon               ==|// Symmetric hexagon face
//==                                             ==|
//--------------------------------------------------
// const tankType = "flatBackHexagon";
//
// let tankProperties = {
// 	volume: new TankInput(702.94, "gal"),
// 	length: new TankInput(100, "inch"),             // Flat back side
// 	width: new TankInput(25, "inch"),               // Side adjacent to the length
// 	side1: new TankInput(50, "inch"),               // Side opposite to the length
// 	side2: new TankInput(50, "inch"),               // Side adjacent to the side1
//  height: new TankInput(50, "inch"),
// };
//--------------------------------------------------

//--------------------------------------------------
//==                                             ==|
//==                 L-Shaped                    ==|
//==                                             ==|
//--------------------------------------------------
// const tankType = "lShaped";
//
// let tankProperties = {
// 	volume: new TankInput(702.94, "gal"),
// 	length: new TankInput(100, "inch"),             // One of the longest sides
// 	width: new TankInput(25, "inch"),               // One of the longest sides
// 	side1: new TankInput(50, "inch"),               // Side adjacent to length
// 	side2: new TankInput(50, "inch"),               // Side adjacent to width
// 	height: new TankInput(50, "inch"),
// };
//--------------------------------------------------

//--------------------------------------------------
//==                                             ==|
//==                    Bowl                     ==|// Perfect spherical bowl
//==                                             ==|
//--------------------------------------------------
// const tankType = "bowl";
//
// let tankProperties = {
// 	volume: new TankInput(702.94, "gal"),
// 	circumference: new TankInput(100, "inch"),      // Circumference of the widest point
// 	lidCircumference: new TankInput(25, "inch"),    // Circumference of the opening
// 	height: new TankInput(50, "inch"),              // Upto the lid (opening)
// };
//--------------------------------------------------

//import { add, subtract, multiply, divide, modulus } from "./math.js";
import * as math from "./math.js";
const a = 855555;
const b = 111;


console.log(`${a} + ${b} = ${math.add(a, b)}`);
console.log(`${a} - ${b} = ${math.subtract(a, b)}`);
console.log(`${a} * ${b} = ${math.multiply(a, b)}`);
console.log(`${a} / ${b} = ${math.divide(a, b)}`);
console.log(`${a} % ${b} = ${math.modulus(a, b)}`);
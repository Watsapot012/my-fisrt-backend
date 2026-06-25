// import * as math from "./math.js";
// // import { add, minus, multiply, divide, modulus} from "./math.js";

// const a = 8;
// const b = 9;

// console.log(`
//     ${a} + ${b} = ${math.add(a, b)}
//     ${a} - ${b} = ${math.minus(a, b)}
//     ${a} x ${b} = ${math.multiply(a, b)}
//     ${a} / ${b} = ${math.divide(a, b)}
//     ${a} % ${b} = ${math.modulus(a, b)}   หารเอาแค่เศษ
//     `);

// npm i dotenv first
import "dotenv/config";

const port = process.env.PORT;
const name = process.env.name;

console.log(port, name, process.env.SECRET_KEY);

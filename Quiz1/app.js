const massDejon = 92;
const massRob = 78;

const heightDejon = 1.95;
const heightRob = 1.69;

let RobBMI = massRob / (heightRob * heightDejon);
let DejonBMI = massDejon / (heightDejon * heightDejon);


let robGreaterdejon = RobBMI > DejonBMI;

console.log(`Does Rob hava a higher BMI than Dejon ${robGreaterdejon}`);


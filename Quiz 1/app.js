const robMass = 78
const dejonMass = 92

const robHeight = 1.69
const dejonHeight = 1.95

const robBMI = (robMass) / (robHeight * robHeight)
const dejonBMI = (dejonMass) / (dejonHeight * dejonHeight)

let robHigherdejon = robBMI > dejonBMI

console.log ('Does Rob have a higher BMI than Dejon') 
console.log (robHigherdejon);
const john = [89,120,103];
const mike = [116,94,123];

let johnAverage = (89 + 120 + 103) / 3
let mikeAverage = (116 + 94 +123) / 3

switch (johnAverage <= mikeAverage){
    case johnAverage >= mikeAverage:
        console.log('John has a higher average than Mike');
        break;
    case johnAverage <= mikeAverage:
        console.log('Mike has a higher average than John');
        break;
    case johnAverage = mikeAverage :
        console.log('John and Mike have the same average score');
        break;
    default:
        console.log('Code 404');
}
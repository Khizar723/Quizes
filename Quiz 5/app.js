//const number = document.querySelector('#list')


const list = document.querySelectorAll('li');
const listArray = Array.from(list);
//console.log(listArray);    we gucci here


 function keyWord(listArray){
    if(listArray.textContent === 'Flexbox') {
        return listArray;
    }
}


const listFiltered = listArray.filter(keyWord);
// console.log(listFiltered);   not gucci; maybe function needs to target each array element rather than the entire array
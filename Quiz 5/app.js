//const number = document.querySelector('#list')


const list = document.querySelectorAll('li');
const listArray = Array.from(list);
console.log(listArray);   


/*  function keyWord(listArray){
    if(listArray.textContent === 'Flexbox') {
        return listArray;
    }
}
 */
const filtered = listArray.filter(function(filters){
    if (filters.value === 'Flexbox' ) {
      return 'Hellos' ;
    }
 })
console.table(filtered)



/* 
function filterItems(arr, query) {
    return arr.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;

    })
}
 */
        //console.log(filterItems(listArray, 'box'))
//const listFiltered = listArray.filter('Flexbox');
//console.log(listFiltered); 
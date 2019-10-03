//const number = document.querySelector('#list')


//const list = document.querySelectorAll('li');
//const listArray = Array.from(list);
//console.log(listArray);   


/*  function keyWord(listArray){
    if(listArray.textContent === 'Flexbox') {
        return listArray;
    }
}
 */
//const filtered = listArray.filter(function(filters){
    //if (filters.value === 'Flexbox' ) {
     // return 'Hellos' ;
   // }
 //})
//console.table(filtered)



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

const LIs = Array.from(document.querySelectorAll('ul>li'));
//console.log(LIs)

const LIsFiltered = LIs.filter(LI => LI.textContent == "Flexbox Video");
//console.log(LIsFiltered)

const filteredChained = Array.from(document.querySelectorAll('ul>li'))
.filter(LI => LI.textContent == "Flexbox Video")
.map(obj =>{return obj.dataset.time;})
.map( timeCode => {
    const parts = timeCode.split(':');
    //console.log(parts);
    return (parseInt(parts[0] * 60)) + parseInt(parts[1]);
}).reduce((acc, val) => {
    return acc + val;
})

console.log(filteredChained);
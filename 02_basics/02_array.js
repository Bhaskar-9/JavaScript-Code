const marval_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marval_heros.push(dc_heros)    //It will give array inside array [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marval_heros);
// console.log(marval_heros[3][1]);

// const allHeros = marval_heros.concat(dc_heros)
// console.log(allHeros);     //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_heros = [...marval_heros, ...dc_heros]
// console.log(all_new_heros);   //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);   

console.log(Array.isArray("Bhaskar"));  //It will give false
console.log(Array.from("Bhaskar"));    //It will give ['B', 'h', 'a', 's', 'k', 'a', 'r']
console.log(Array.from({name: "Bhaskra"})); //Intresting (It will give a empty [])

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  //It gives [ 100, 200, 300 ]


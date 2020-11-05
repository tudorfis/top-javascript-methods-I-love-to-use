
const prices = [
    22.12,
    21.91,
    30.47,
    19,
    120
]

// forEach
prices.forEach( price => {
    
    if (!( price < 20 )) {
        console.log( price )
    }
    
})








// for...of
// for (const price of prices) {
//     if (price < 20) break
//     console.log( price )
// }











// for...length
// for (let i = 0; i <= prices.length; i++) {
//     if (prices[ i ] < 20) break
//     console.log( prices[ i ] )
// }













// while...
// let i = 0;
// while (i <= prices.length) {
//     if (prices[ i ] < 20) break
//     console.log( prices[ i ] )
//     i++
// }











// do..while
// let i = 0;
// do {
//     if (prices[ i ] < 20) break
//     console.log( prices[ i ] )
//     i++
// } while (i <= prices.length)

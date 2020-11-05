
const people = [
    { name: 'Cristina' },
    { name: 'Stan' },
    { name: 'Michael' },
    { name: 'Tudor' }
]

let i = 0
do {
    const person = people[ i ]
    // if (person.name === 'Cristina') continue
    console.log( person )
    i++
} while  (i < people.length ) 




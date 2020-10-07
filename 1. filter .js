// [ ].filter()

// What are we building? 
// PARTY APP v.0.0.1-beta
const CURRENT_PARTY_COUNTRY = 'UK'

const invitedPeople = [
    {
        name: 'Leonardo Di Caprio',
        awesomenessLevel: 6000,
        knowFor: [ 
            'Titanic',
            'Inception',
            'Wolf of wallstreet',
            'Grizzly aka Revenant'
        ],
        age: 52
    },

    {
        name: 'Brad Pitt',
        awesomenessLevel: 5999,
        knowFor: [ 'Angelina Jolie' ],
        age: 53
    },

    {
        name: 'noname',
        awesomenessLevel: -230,
        knowFor: null,
        age: 20
    },

    {
        name: 'hot-chick',
        awesomenessLevel: 430,
        knowFor: [ 'hotness' ],
        age: 17
    },
]

function getAcceptedPeople( people ) {
    // bad way
    // const validPeople = []
    // for (let i = 0; i < people.length; i++) {
    //     if (canComeToParty( people[ i ])) {
    //         validPeople.push( person )
    //     }
    // }
    // return validPeople
    
    ////////////////////////////////////////
    // decent way
    // const validPeople = []
    // for ( const person of people ) {
    //     if (canComeToParty( person )) {
    //         validPeople.push( person )
    //     }
    // }
    // return validPeople

    ////////////////////////////////////////
    // good way 
    // const validPeople = []
    // for ( const person of people ) {
    //     if (!canComeToParty( person )) continue
    //     validPeople.push( person )
    // }
    // return validPeople
    
    // best way
    ////////////////////////////////////////
    return people.filter( person =>  {
        return (
            person.awesomenessLevel > -500 &&
            isAboveAgeLimit( person)
        )
    })
}

// function canComeToParty( person ) {
//     return 
// }

function isAboveAgeLimit( person ) {
    const MINIMUM_AGE_REQUIREMENT = minimumAgeRequirementConfig[ CURRENT_PARTY_COUNTRY ]

    return person.age >= MINIMUM_AGE_REQUIREMENT
}

const minimumAgeRequirementConfig = {
    'US': 21,
    'UK': 18,
    'RO': 16,
    'CA': 14
}
 
console.log(
    getAcceptedPeople( invitedPeople )
)

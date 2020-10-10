
function pitagora(a, b) {
    return Math.sqrt( a*a + b*b ) + 100000
}

function calculeazamiDiagonalaTV( latime, lungime ) {
    return pitagora( latime, lungime )
}

const dimensiuni_tv = [
    [ 100, 160 ],
    [ 60, 80 ],
    [ 200, 300 ]
]

for (const dimensiune_tv of dimensiuni_tv) {
    const latime = dimensiune_tv[ 0 ]
    const lumgine = dimensiune_tv[ 1 ]

    console.log(
        calculeazamiDiagonalaTV( latime, lumgine )
    )
}

// string  
// number
const numele_adevarat_a_lui_bilu = 'tudor todorescu'
const numele_adevarat_a_lui_sis = 'filip andrei'
const numele_adevarat_a_lui_cheloo = 'andrei ceurean'

const numele_adevarat_a_lui_pui = 'cristina crisan'

function iubituLuiPui() {
    return numele_adevarat_a_lui_bilu
}

console.log( 
    numele_adevarat_a_lui_sis +
    ' ♥️ ' + 
    numele_adevarat_a_lui_pui
)

console.log(
    iubituLuiPui().split(' ').reverse().join(' ')
)

// boolean
// object
// array
// function
// class

// const
// let
// var

// if
// for

//////////////////

const esentiale_pt_nunta = [
    'sala de nunta',
    'fotograf', 
    'aranjamente florale',
    'candy bar',
    'videograf'
]

for (const un_text_din_lista of esentiale_pt_nunta) {
    console.log( '-------------' )

    if (
        verificaDacasRezolvate( un_text_din_lista )
    ) {
        console.log( un_text_din_lista )    
    } else {
        console.log( `${ un_text_din_lista.toUpperCase() } ☑️` )
    }

    console.log( '=============' )
}

function verificaDacasRezolvate( un_text_din_lista ) {
    return (
        un_text_din_lista.match( /video/ ) ||
        un_text_din_lista.match( /foto/ )
    )
}

// filter
// find
// map
// reduce
// includes

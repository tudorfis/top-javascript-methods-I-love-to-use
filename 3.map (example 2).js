


// [].map()

////////////////// EXAMPLE 2️ ///////////////////////////

// Let's fetch some comments
/// on our imaginary app

(async _ => {
    const url = 'https://jsonplaceholder.typicode.com/comments'
    let comments = await fetch(url).then(res => res.json())

    // console.log(
    //     comments
    // )

    /**
        body: string
        email: string
        id: number
        name: string
        postId: number
    */

    // Cool tricks comming up 🤠
    // console.log(
    //     comments.map( comment => comment.email )
    // ) 

    // console.log(
    //     comments.slice( 0, 5 ).map( comment => comment.email )
    // ) 

    // console.log(
    //     comments.slice( 0, 5 ).map( comment => comment.id )
    // )

    console.log(
        comments.slice(0, 5).map(({ id }) => id)
    )







})()




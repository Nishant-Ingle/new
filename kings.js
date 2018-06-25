// let king = 'John'

if (true) {
    // let king = 'Sam'

    if (true) {
        king = 
        // Below statement is dangerous as it initializes king as global variable
        // king = 'Ram'
        console.log(king)
    }
}

if (true) {
    console.log(king);
}
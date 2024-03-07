for (let i = 1; i <= 10; i++) {
    let coinFlip = Math.round(Math.random())
    if (!coinFlip) {
        console.log('Heads')
    } else {
        console.log('Tails')
    }
}
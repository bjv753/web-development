
for(let i = 0; i <= 100; i++){
    if (i%3 === 0 && i%5 === 0) {
        console.log('fizbuz')
    } else if (i%5 === 0) {
        console.log('buz')
    } else if(i%3 === 0) {
        console.log("fiz")
    } else {
        console.log(i)
    }
}

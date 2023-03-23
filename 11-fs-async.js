const {readFile, writeFile} = require('fs');

console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err){
        console.log(err)
        return
    }
    console.log(result)
    // => Hello this is first text file

    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err){
            console.log(err)
            return
        }
        console.log(result)
        // => Hello this is second text file

        const second = result
        writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}`, (err, result) => {
            if(err){
                console.log(err)
                return
            }
            console.log('done with this task')
            // => undefined
        })
    })
})
console.log('starting next task')
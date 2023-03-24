const {readFile, writeFile} = require('fs')
const util = require ('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async() => {
    try{
        const first = await readFilePromise('./content/first.txt', 'utf8')
        const second = await readFilePromise('./content/second.txt', 'utf8')
        await writeFilePromise('./content/result-mind-grenade.text', `THIS IS AWESOME : ${first} ${second}`, {flag: 'a'})
        console.log(first, second)
    }catch (error){
        console.log(error)
    }
}

start()

// const {readFile} = require('fs') 

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err){
//                 reject(err)
//                 return
//             }else{
//                 resolve(data)
//             }
//         })
//     })
// }

// getText('./content/first.txt')
// .then(result => console.log(result))
// .catch(err => console.log(err))


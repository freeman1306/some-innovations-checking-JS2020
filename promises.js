// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Success')
//     })
// })

// promise.then(data => console.log(data)
// )


const delay = ms => new Promise(
    (
        (resolve, reject) => {
            setTimeout(() => reject('DONE!'), ms)
        }
    )
)

delay(1000)
    .then(data => delay(500))
    .then(data => console.log(data))
    .catch(err => console.log(err))
    .finally(()=>console.log('Finally')
    )
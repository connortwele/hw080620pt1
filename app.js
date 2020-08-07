let p = new Promise ((resolve,reject) =>{
    let a = 1 + 1
    if (a == 2) {
        resolve ('success')
    } else {reject ('failed')}
})

p.then((message) => {console.log('this is in the then ' + message)
}).catch((message) =>{console.log('this is in the catch ' + message)
})

const userLeft = false;
const userWatchingCatMeme = false;
function watchTutorialPromise (){
    return new Promise ((resolve,reject) => {
        if (userLeft){
            reject({
                name: 'user left',
                message: ':('
            })
        } else if (userWatchingCatMeme){
            reject({
                name: 'User watching cat meme',
                message: 'cat meme > web dev'
            })
        } else {
            resolve ('thumbs up and subscribe')
        }
    })
}

watchTutorialPromise () .then((message) =>{
    console.log('success ' + message)
}).catch((error) => {
    console.log(error.name + ' ' + error.message)
})


const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
  })
  
  const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
  })
  
  const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
  })
  
  Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
  ]).then(messages => {
    console.log(messages)
  })
  
  Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
  ]).then(message => {
    console.log(message)
  })

console.log('about to fetch a rainbow')

catchRainbow().catch(error=>{
      console.log('error!')
   });

async function catchRainbow (){
    const response = await fetch('./birdOne.jpg');
    const blob = await response.blob();
    document.getElementById('rainbow').src = URL.createObjectURL(blob)

}


// fetch ('./birdOne.jpg').then(response=>{
//     return response.blob();
// }).then(blob =>{
//     document.getElementById('rainbow').src = URL.createObjectURL(blob)
// }).catch(error=>{
//     console.log('error!')
// });

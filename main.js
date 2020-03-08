let arrPictures = []
const ul = document.querySelector("ul")
let activate = document.getElementById('activate').addEventListener('click',() =>{
  let userInput = document.getElementById('userInput').value

  // console.log("cass")
  //
  // console.log(userInput)

  fetch(`https://dog.ceo/api/breed/${userInput}/images/random/3`)

    .then(res => res.json())
    .then(response =>{
      console.log(response.message);
      // console.log(response.message)
      document.getElementById('result').src=response.message[0]
      document.getElementById('resultOne').src=response.message[1]
      document.getElementById('resultTwo').src=response.message[2]

      // console.log([arrPictures])
      // document.getElementById('favResult').src= arrPictures[0]

      // fav.addEventListener('click',storeInFavArr)

    });
  })
  document.querySelectorAll('.fav').forEach(item => {
    item.addEventListener('click', event => {
      arrPictures.push(event.target.src)


      // console.log(arrPictures)
    })
  })

  let displayFav = document.getElementById('displayFav')
  displayFav.addEventListener('click',()=>{

    arrPictures.forEach(item => {
      // console.log("hello")
      event.preventDefault()

      // console.log(item.src)
      // document.getElementById('favResult').src= item.src


      let favImage = document.createElement("img")
      // console.log(favImage)
      // console.log(ul.appendChild(favImage))
      ul.appendChild(favImage)
      // favImage.appendChild(document.createTextNode(item.src))
      favImage.src= item
      // document.querySelector("#userItem").value = ""

    })
  })


// create an array
// append it with

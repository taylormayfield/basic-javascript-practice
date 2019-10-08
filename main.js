console.log('Hey, I am JavaScript on your page!')

let mainHeader = document.querySelector("h1")

console.log(mainHeader)

mainHeader.textContent = 'Thor is the best!'
mainHeader.setAttribute("style", "color:orange; border: 1px solid pink;");

document.body.setAttribute("style", "background-color: #dfdfdf;")

let myParagraph = document.createElement('p')
myParagraph.textContent = 'I am the best paragraph ever written!'

let myDiv = document.createElement('div')
myDiv.appendChild(myParagraph)

console.log(myDiv.textContent)
// myDiv.textContent = 'Hey, I am a Div!'

document.body.appendChild(myDiv)

let myPic = document.createElement('img')

myPic.setAttribute("src", 'https://www.esquireme.com/sites/default/files/styles/full_img/public/images/2019/07/17/thor.jpg?itok=tnod8VI8')

document.body.appendChild(myPic)
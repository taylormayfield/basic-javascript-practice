import { films } from '/assests/films.js'

console.log('Hey, I am JavaScript on your page!')

console.log(films[0].opening_crawl)

let film1 = document.createElement('div')
let title1 = document.createElement('h1')
let crawl1 = document.createElement('p')

film1.appendChild(title1)
film1.appendChild(crawl1)

title1.textContent = films[0].title
crawl1.textContent = film[0].opening_crawl

let mainArea = document.querySelector('main')
mainArea.appendChild(film1)
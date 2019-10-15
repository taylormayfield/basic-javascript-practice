import { films } from '/films.js'
import { people } from '/people.js'
import { starships } from '/starships.js'
import { species } from '/species.js'
import { planets } from '/planets.js'
import { vehicles } from '/vehicles.js'

console.log('Hey, I am JavaScript on your page!')

let mainArea = document.querySelector('main')

films.forEach(function (film) {
    let filmDiv = document.createElement('div')
    let title = document.createElement('h1')
    let crawl = document.createElement('p')
    let pic = document.createElement('img')

    filmDiv.appendChild(title)
    filmDiv.appendChild(crawl)

    title.textContent = films.title
    crawl.innerText = film.opening_crawl

    mainArea.appendChild(filmDiv)
})

people.forEach(function(person) {
    let personDiv = document.createElement('div')
    let name = document.createElement('h1')
    let gender = documetn.createElement('h3')
    
    personDiv.appendChild(name)
    personDiv.appendChild(gender)

    name.textContent = person.name
    gender.textContent = gender.name
    pic.src

    mainArea.appendChild(personDiv)
})

const maleCharacters = people.filter(person => person.gender === 'male')
console.log(maleCharacters)
const femaleCharacters = people.filter(person => person.gender === 'female')
console.log(femaleCharacters)
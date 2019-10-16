import { films } from '/assets/films.js'
import { people } from '/assets/people.js'
import { starships } from '/assets/starships.js'
import { species } from '/assets/species.js'
import { planets } from '/assets/planets.js'
import { vehicles } from '/assets/vehicles.js'

console.log('Hey, I am JavaScript on your page!')

let mainArea = document.querySelector('main')

films.forEach(function(film) {
    let filmDiv = document.createElement('div')
    let title = document.createElement('h1')
    let crawl = document.createElement('p')

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
    let pic = document.createElement('img')
    
    personDiv.appendChild(name)
    personDiv.appendChild(gender)
    personDiv.appendChild(pic)

    name.textContent = person.name
    gender.textContent = gender.name
    pic.src = 'https://starwars-visualguide.com/assets/img/characters/$(charNum).jpg'

    mainArea.appendChild(personDiv)
})

function getCharNumber(charURL) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end -2, end)
    if(charID.indexOf('/') !== -1 ) {
        return charID.slice(1,2)
    }
}

const maleCharacters = people.filter(person => person.gender === 'male')
console.log(maleCharacters)
const femaleCharacters = people.filter(person => person.gender === 'female')
console.log(femaleCharacters)
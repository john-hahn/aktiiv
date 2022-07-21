const app = document.getElementById('root')

const searchbar = document.createElement('input')
searchbar.setAttribute('type', 'text')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(searchbar)
app.appendChild(container)

var request = new XMLHttpRequest()

request.open('GET', 'https://wger.de/api/v2/exercise/?format=json', true)
request.onload = function () {
    var data = JSON.parse(this.response)
    exercises = data.results
    if (request.status >= 200 && request.status < 400) {
        exercises.forEach(exercise => {
            const card = document.createElement('div')
            card.setAttribute('class', 'card')

            const h1 = document.createElement('h1')
            h1.textContent = exercise.name

            const p = document.createElement('p')
            p.textContent = `${exercise.description}...`

            container.appendChild(card)
            card.appendChild(h1)
            card.appendChild(p)
        })
    } else {
        console.log('error')
    }
}

request.send()
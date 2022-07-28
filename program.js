const app = document.getElementById('root')

let input = document.getElementById('input')
let button = document.getElementById('btn')


const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container)

const lst = document.createElement('ol')
lst.setAttribute('id', 'list')
container.appendChild(lst)

var request = new XMLHttpRequest()

request.open('GET', 'https://wger.de/api/v2/exercise/?format=json', true)
request.onload = function () {
    var data = JSON.parse(this.response)
    exercises = data.results
    if (request.status >= 200 && request.status < 400) {
        exercises.forEach(exercise => {
            const card = document.createElement('li')
            card.setAttribute('class', 'exercise')

            const cardBody = document.createElement('div')
            cardBody.setAttribute('class', 'description')

            const h1 = document.createElement('h1')
            h1.textContent = exercise.name

            lst.appendChild(card)
            card.appendChild(h1)
            card.appendChild(cardBody)
            cardBody.innerHTML = `${exercise.description}`
        })
    } else {
        console.log('error')
    }
}

request.send()

function search_exercise() {
    var exerciseName = input.value
    var $lis = $('ol li');
    
    for (i = 0; i < $lis.length; i++) { 
        if (!$('ol li:eq(' + i + ')').text().includes(exerciseName)) {
            $('ol li:eq(' + i + ')')[0].style.display="none";
        }
        else {
            $('ol li:eq(' + i + ')')[0].style.display="inline";
        }
    }
}
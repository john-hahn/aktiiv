const date = new Date()

date.setDate(1)

const monthDays = document.querySelector('.days')

const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate()

const firstDayIndex = date.getDay()

const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay()

const nextDays = 7 - lastDayIndex - 1

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

document.querySelector('.date h1').innerHTML = months[date.getMonth()]

document.querySelector('.date p').innerHTML = date.toDateString()

let days = ''

for (let i = firstDayIndex; i > 0; i--) {
    days += `<div class="prev-date">${prevLastDay - i + 1}</div>`
}

for (let j = 1; j <= lastDay; j++) {
    if (j === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
        days += `<div class="today">${j}</div>`
    }
    else {
        days += `<div>${j}</div>`
    }
}

for (let k = 1; k <= nextDays; k++) {
    days += `<div class="next-date">${k}</div>`
    monthDays.innerHTML = days
}
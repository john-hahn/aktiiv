let countEl = document.getElementById("count-el")
let prevDate = document.getElementById("Chest")
let currDate
let count = 0
console.log(prevDate)

function increment() {
    count += 1
    countEl.textContent = count
}

let saveEl = document.getElementById("save-el")

function save() {
    textContent += count + " - "
}

function reset() {
    count = 0
    countEl.textContent = count
    saveEl.textContent = "Previous entries: "
}

function differenceInHours() {

}
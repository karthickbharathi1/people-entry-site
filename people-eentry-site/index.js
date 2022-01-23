let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let total = document.getElementById("total")
let count = 0
let totalCount = 0
let totalPersons = 0

function increment() {
    count += 1
    totalCount+=1
    countEl.textContent = count
}

function save() { 
    total.textContent = totalCount;
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
function clearAAll(){
    count = 0
    totalCount = 0
    countEl.textContent = count
    total.textContent = totalCount;
    saveEl.textContent = ""
}
import { data } from './data.js'

let exampleDataElement = document.querySelector('#example-data')

data.forEach(function(entry) {
    let p = document.createElement('p')
    p.innerHTML = entry.example
    exampleDataElement.appendChild(p)
})
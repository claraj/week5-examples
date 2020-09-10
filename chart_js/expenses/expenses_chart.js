/* Input elements */
let expenseNameInput = document.querySelector('#expense-name')
let expenseAmountInput = document.querySelector('#expense-amount')
let addExpenseButton = document.querySelector('#add-expense')

/* Chart creation */
let chartCanvas = document.querySelector('#expenses-doughnut-chart')
let ctx = chartCanvas.getContext('2d')

// Hide chart until data has been added 
chartCanvas.style.display = 'none'

let expensesChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [
            { 
                data: [],
                backgroundColor: []
             }
        ],
        labels: []
    },
    options: {}
})

let chartColors = [ 'tomato', 'orange', 'dodgerblue', 'mediumseagreen', 'slateblue', 'violet' ]

function addExpenseToChart(name, amount) {

    // Ensure chart is visible 
    chartCanvas.style.display = "block"

    // Add data to the label array, and first dataset data array 
    expensesChart.data.labels.push(name)
    expensesChart.data.datasets[0].data.push(amount)

    // How many colors have been used so far? 
    let colorCount = expensesChart.data.datasets[0].backgroundColor.length

    // What's the next color?
    // cycle back to the start of the list, if they've all been used 
    let color = chartColors[colorCount % chartColors.length]
    
    // Push the next color from the chartColor list 
    expensesChart.data.datasets[0].backgroundColor.push(color)

    expensesChart.update()
}


addExpenseButton.addEventListener('click', function() {

    let errors = []

    let expenseName = expenseNameInput.value 
    let expenseAmount = expenseAmountInput.value 

    // Validate both fields are filled in, and the amount is a positive number
    if (expenseName.length == 0) {
        errors.push('Enter a type of expense')
    }

    if (expenseAmount.length == 0 || expenseAmountInput < 0) {
        errors.push('Enter a positive amount for the expense')
    }

    // If any errors, alert and return - do not procede to add to chart 
    if (errors.length > 0) {
        alert( errors.join('\n') )
        return
    }

    // Update chart
    addExpenseToChart(expenseName, expenseAmount)

    // Clear inputs, ready for next expense name and amount.
    expenseNameInput.value = ''
    expenseAmountInput.value = ''

})

/* Event listener to click the Add Expense button when Enter key is pressed,
but only if the focus is on one of the input elements  */

window.addEventListener('keyup', function(event) {
    // Check if enter key is pressed, which has keyCode 13
    if (event.keyCode === 13) {
        // And if the focus is on one of the inputs, then click the addExpenseButton
        let inputElements = [ expenseNameInput, expenseAmountInput, addExpenseButton ] 
        if ( inputElements.includes(document.activeElement) ) {
            addExpenseButton.click()  // click button
            expenseNameInput.focus()  // move focus to expense name input, for convenience of entering new expense 
        }
    }
})




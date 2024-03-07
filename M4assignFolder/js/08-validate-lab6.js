// GLOBAL VARIABLES
let futureValue
let investment
let rate
let years

// COLLECT VALUES FROM USER
while (true) {
    investment = prompt('Enter investment amount as xxxx.xx')
    if (isNaN(investment)) {
        alert("Your entry was not a number. Please enter a number.")
    } else {
        break
    }
}

while (true) {
    rate = prompt('Enter rate as xx.x')
    if (isNaN(rate)) {
        alert("Your entry was not a number. Please enter a number.")
    } else if (rate < 0 || rate > 30) {
        alert("Enter a realistic rate: a number between 0 and 30.")
    } else {
        break
    }
}

while (true) {
    years = prompt('Enter the number of years')
    if (isNaN(years)) {
        alert("Your entry was not a number. Please enter a number.")
    } else if (years < 1 || years > 30) {
        alert("Enter a number of years from 1 to 30.")
    } else {
        break
    }
}

// CALCULATE FUTURE VALUE
futureValue = investment
for (let i = 0; i < years; i++) {
    futureValue *= (1 + rate / 100)
}

// DISPLAY RESULT
document.write(`Your original investment was: $${investment}<br>`)
document.write(`Interest rate: ${rate}%<br>`)
document.write(`Years invested: ${years}<br>`)
document.write(`Future value: $${futureValue.toFixed(2)}<br>`)
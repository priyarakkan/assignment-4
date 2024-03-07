let miles
let gallons
let mpg
let again = 'y'

do {
    miles = parseFloat(prompt('Enter miles driven:'))
    gallons = parseFloat(prompt('Enter gallons of gas used:'))
    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
        mpg = miles / gallons
        document.write(`Your MPG is ${mpg.toFixed(2)}.`)
    } else {
        alert('One or both entries are invalid.')
    }
    while (true) {
        again = prompt('Do you want to continue using the MPG App? (y or n)', 'y')
        if (again !== 'y' && again !== 'n') {
            alert('Please enter either y or n.')
        }
        else {
            break
        }
    }
} while (again === 'y')
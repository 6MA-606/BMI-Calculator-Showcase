import { removeBMI, showBMI } from "../UI/bmiUiController.js"
import { calculateBMI } from "../util/utility.js"

function calculateBtnHandler(event) {
    const weight = document.getElementById('weightInput').value
    const height = document.getElementById('heightInput').value

    if (weight === '' || height === '') {
        removeBMI()
        return
    }

    const bmi = calculateBMI(weight, height)
    
    localStorage.setItem('bmiData', JSON.stringify({weight, height, bmi}))

    showBMI(bmi)
}

function clearBtnHandler(event) {
    const weightInput = document.getElementById('weightInput')
    const heightInput = document.getElementById('heightInput')

    weightInput.value = ''
    heightInput.value = ''
}

function submitHandler(event) {
    if (event.key === 'Enter') calculateBtnHandler(event)
}

export { calculateBtnHandler, clearBtnHandler, submitHandler }
function showBMI(bmi) {
    removeBMI()

    const bmiBox = document.createElement('div')
    //! <div></div>

    bmiBox.setAttribute('class', 'bmiBox')
    //! <div class="bmiBox"></div>

    const h2 = document.createElement('h2')
    //* <h2></h2>

    h2.textContent = 'Your BMI is...'
    //* <h2>Your BMI is...</h2>

    const bmiText = document.createElement('span')
    //? <span></span>

    bmiText.setAttribute('id', 'bmiText')
    //? <span id="bmiText"></span>

    bmiText.textContent = bmi.toFixed(2) //  18.99
    //? <span id="bmiText">18.99</span>

    bmiBox.appendChild(h2)
    bmiBox.appendChild(bmiText)
    //! <div class="bmiBox">
    //*     <h2>Your BMI is...</h2>
    //?     <span id="bmiText">18.99</span>
    //! </div>

    const bmiContainer = document.querySelector('.bmiContainer')
    bmiContainer.appendChild(bmiBox)
}

function removeBMI() {
    const bmiContainer = document.querySelector('.bmiContainer')
    bmiContainer.innerHTML = ''
}

export { showBMI, removeBMI }
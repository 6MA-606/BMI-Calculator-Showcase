function calculateBMI(w, h) {
    return w / Math.pow(h/100, 2)
}

export { calculateBMI }
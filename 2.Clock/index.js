const app = getElementById('app')

;(function generateClock() {
    const left = 50.1
    const clock = createHTMLDIVElement()
    const hourArrow = arrowController(7, 165, 37, left)(3600, 30)
    const minuteArrow = arrowController(7, 130, 39.6, left)(60, 0.4)
    const secondArrow = arrowController(7, 130, 39.6, left)(1, 0.04)
    clock.className = 'clock'
    clock.appendChild(hourArrow)
    clock.appendChild(minuteArrow)
    clock.appendChild(secondArrow)
    app.appendChild(clock)
})()
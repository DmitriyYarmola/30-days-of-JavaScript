const arrowController = (width, height, top, left) => {
    const hourArrow = createArrow(width, height, top, left)
    let value = 0
    return (time, rotate) => {
        setInterval(() => {
            if(value >= 360) value = rotate
            else value += rotate
            hourArrow.style.transform = `translate(-50%, -50%) rotate(${value}deg)`
        }, secondsToMS(time))
        return hourArrow
    }
}
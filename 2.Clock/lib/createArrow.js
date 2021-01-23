const createArrow = (width, height, top, left, rotate = 0) => {
    const arrow = createHTMLDIVElement()
    arrow.style.height = `${height}px`
    arrow.style.width = `${width}px`
    arrow.style.background = '#344444'
    arrow.style.position = 'absolute'
    arrow.style.top = `${top}%`
    arrow.style.left = `${left}%`
    arrow.style.transform = `translate(-50%, -50%) rotate(${rotate}deg)`
    arrow.style.transformOrigin = 'bottom'
    return arrow
}
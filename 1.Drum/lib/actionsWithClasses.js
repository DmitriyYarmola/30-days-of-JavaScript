const setAndRemoveActiveClass = (target) => {
    target?.classList?.add(activeClass)
    setTimeout(() => {
        target?.classList?.remove(activeClass)
    }, 200)
}
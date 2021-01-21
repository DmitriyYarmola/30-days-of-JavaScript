const activeClass = 'active'

window.addEventListener('click', element => {
    const target = element.target
    const keyCode = findByKeyCode(+target.dataset.keyCode)?.lower
    const button = findButtonTag(keyCode)
    setAndRemoveActiveClass(button)
    const audio = findAudioTag(keyCode)
    if(!audio) return
    audio.play()
    audio.currentTime = 0
})

window.addEventListener('keypress', element => {
    const keyCode = findByKeyCode(element.keyCode)?.lower
    const button = findButtonTag(keyCode)
    setAndRemoveActiveClass(button)
    const audio = findAudioTag(keyCode)
    if(!audio) return
    audio.play()
    audio.currentTime = 0
})
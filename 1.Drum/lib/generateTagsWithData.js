const app = document.getElementById('app')

const generateKeys = () => {
    const keysWrapper = generateDivElement()
    codes.forEach(({name, keyCode, soundName}) => {

        const key = generateDivElement()
        key.className = 'key'
        key.dataset.keyCode = keyCode

        const keyName= generateDivElement()
        keyName.dataset.keyCode = keyCode
        keyName.innerText = name
        key.appendChild(keyName)

        const keySoundName = generateDivElement()
        keySoundName.className  = 'sound-name'
        keySoundName.dataset.keyCode = keyCode
        keySoundName.innerText = soundName
        key.appendChild(keySoundName)
        keysWrapper.appendChild(key)
    })
    keysWrapper.className = 'keys-wrapper'
    app.appendChild(keysWrapper)
}

const generateAudios = () => {
    const soundWrapper = generateDivElement()
    codes.forEach(({sound, keyCode}) => {
        const audio = generateAudio(sound)
        audio.dataset.soundKeyCode = keyCode
        soundWrapper.appendChild(audio)
    })
    soundWrapper.className = 'audios-wrapper'
    app.appendChild(soundWrapper)
}
generateKeys()
generateAudios()

const baseURL = `https://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds`

const codes = [
    { lowerKeyCode: 65, upperKeyCode: 97,name: 'A', sound: `${baseURL}/clap.wav`, soundName: 'CLAP' },
    { lowerKeyCode: 83, upperKeyCode: 115,name: 'S', sound: `${baseURL}/hihat.wav`, soundName: 'HIHAT' },
    { lowerKeyCode: 68, upperKeyCode: 100,name: 'D', sound: `${baseURL}/kick.wav`, soundName: 'KICK' },
    { lowerKeyCode: 70, upperKeyCode: 102,name: 'F', sound: `${baseURL}/openhat.wav`, soundName: 'OPENHAT' },
    { lowerKeyCode: 71, upperKeyCode: 103,name: 'G', sound: `${baseURL}/boom.wav`, soundName: 'BOOM' },
    { lowerKeyCode: 72, upperKeyCode: 104,name: 'H', sound: `${baseURL}/ride.wav`, soundName: 'RIDE' },
    { lowerKeyCode: 75, upperKeyCode: 106,name: 'J', sound: `${baseURL}/snare.wav`, soundName: 'SNARE' },
    { lowerKeyCode: 75, upperKeyCode: 107,name: 'K', sound: `${baseURL}/tom.wav`, soundName: 'TOM' },
    { lowerKeyCode: 76, upperKeyCode: 108,name: 'L', sound: `${baseURL}/tink.wav`, soundName: 'TINK' },
]

const app = document.getElementById('app')

const generateDivElement = () => document.createElement('div')
const generateAudio = (url) => new Audio(url)

const generateKeys = () => {
    const keysWrapper = generateDivElement()
    codes.forEach(({lowerKeyCode, name, soundName}) => {

        const key = generateDivElement()
        key.className = 'key'
        key.dataset.key = lowerKeyCode

        const keyName= generateDivElement()
        keyName.dataset.key = lowerKeyCode
        keyName.innerText = name
        key.appendChild(keyName)

        const keySoundName = generateDivElement()
        keySoundName.className  = 'sound-name'
        keySoundName.dataset.key = lowerKeyCode
        keySoundName.innerText = soundName
        key.appendChild(keySoundName)
        keysWrapper.appendChild(key)
    })
    keysWrapper.className = 'keys-wrapper'
    app.appendChild(keysWrapper)
}

const generateAudios = () => {
    const soundWrapper = generateDivElement()
    codes.forEach(({lowerKeyCode, sound, upperKeyCode}) => {
        const audio = generateAudio(sound)
        audio.dataset.soundLowerKey = lowerKeyCode
        audio.dataset.soundUpperKey = upperKeyCode
        soundWrapper.appendChild(audio)
    })
    soundWrapper.className = 'audios-wrapper'
    app.appendChild(soundWrapper)

}
generateKeys()
generateAudios()

const findAudioTagLowerLetter = (key) => document.querySelector(`[data-sound-lower-key="${key}"]`)
const findAudioTagUpperLetter = (key) => document.querySelector(`[data-sound-upper-key="${key}"]`)

window.addEventListener('click', element => {
    const keyCode = element.target.dataset.key
    const audio = findAudioTagLowerLetter(keyCode)
    if(!audio) return
    audio.play()
    audio.currentTime = 0
})

window.addEventListener('keypress', element => {
    const keyCode = element.charCode
    console.log(keyCode);
    const audio = keyCode <= 90 ? findAudioTagLowerLetter(keyCode) : findAudioTagUpperLetter(keyCode)
    if(!audio) return
    audio.play()
    audio.currentTime = 0
})
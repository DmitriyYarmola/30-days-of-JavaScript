const findByKeyCode = (keyCode) => {
    if(keyCode <= 96)
        return keysValue.find(keyValue => keyValue.lower === keyCode)
    else if(keyCode >= 97 && keyCode <= 115)
        return keysValue.find(keyValue => keyValue.upper === keyCode)
    else if(keyCode >= 116)
        return keysValue.find(keyValue => keyValue.lat === keyCode)
}
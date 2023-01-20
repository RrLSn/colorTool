// selector
const hexInput = document.querySelector('#hex')
const inputColor = document.querySelector('#inputColor')
const alteredColor = document.querySelector('#alteredColor')


hexInput.addEventListener(
    'keydown',
    () => {
        const hex = hexInput.value
        if(!isValidHex(hex)) return null
        const strippedHex = hex.replace('#','')
        inputColor.style.background = `#${strippedHex}`
    }
)


// function
const isValidHex = (hex) => {
    if(!hex) return false

    const strippedHex = hex.replace('#', '')
    return strippedHex.length === 3 || strippedHex.length === 6
}

const convertHexToRGB = (hex) => {
    if(!isValidHex(hex)) return null
    const hexToRGB = hex.replace('#', '')
    if(hexToRGB.length === 3){
        stripped = hexToRGB[0] + hexToRGB[0] + hexToRGB[1] + hexToRGB[1] + hexToRGB[2] + hexToRGB[2]
    }
    const r = parseInt(stripped.substring(0,2), 16)
    const g = parseInt(stripped.substring(2,4), 16)
    const b = parseInt(stripped.substring(4,6), 16)
    return {r,g,b}
}

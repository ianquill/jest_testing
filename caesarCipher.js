const caesarCipher = (string, shift) => {
    
    // convert string of characters to array of Unicode values
    function charToNum() {
        // convert to uppercase to make sure unicode conversion is correct
        let array = [...string.toUpperCase()];
        array.forEach((element, index) => {
            array[index] = element.charCodeAt() - 65;
        })
        return array;
    }

    let newString = String.fromCharCode(...shiftString());
    
    function shiftString() {
        let result = charToNum().map((x) => {
            if (x >= 0) {
                return ((x + shift) % 26) + 65;
            } else {
                return x + 65;
            }
        });
        return result;
    }
    

    const encryptedString = newString.toLowerCase();
    
    return encryptedString;
}

module.exports = caesarCipher;
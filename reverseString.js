const reverseString = (string) => {
    let array = [...string];
    return array.reverse().join('');
}

module.exports = reverseString; 
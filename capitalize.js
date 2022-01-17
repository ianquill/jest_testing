function capitalize(string) {
    const stringStart = string[0].toUpperCase();
    const stringEnd = string.substr(1);
    return stringStart + stringEnd;
}

module.exports = capitalize;
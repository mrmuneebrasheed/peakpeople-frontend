const capitalizeWord = (word) => {
    if (word) {
        const lowerCase = word.toLowerCase()
        return lowerCase[0].toUpperCase() + lowerCase.slice(1)
    }
}
module.exports = { capitalizeWord }

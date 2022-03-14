const capitalizeWord = (word) => {
    const lowerCase = word.toLowerCase()
    return lowerCase[0].toUpperCase() + lowerCase.slice(1)
}
module.exports = { capitalizeWord }

function reverse(x: number): number {
    let xToString = x.toString()
    let reverseNumber = xToString.split("").reverse().join("")
    if(reverseNumber[reverseNumber.length - 1] === "-" || reverseNumber[reverseNumber.length - 1] === "+") {
        const operator = reverseNumber[reverseNumber.length - 1]
        reverseNumber = reverseNumber.substring(0, reverseNumber.length - 1)
        reverseNumber = operator + reverseNumber
    }
    
    return Math.pow(2,31) >= parseInt(reverseNumber) && parseInt(reverseNumber) >= Math.pow(-2,31) ? parseInt(reverseNumber) : 0
}
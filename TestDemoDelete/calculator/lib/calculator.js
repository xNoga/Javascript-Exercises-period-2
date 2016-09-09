module.exports = {
    addNumber(n1, n2){
        return n1 + n2
    },
    subtract(n1, n2){
        return n1 - n2
    },
    multiply(n1, n2){
        return n1 * n2
    },
    divide(n1, n2){
        if(n1 === 0 || n2 === 0) throw new Error("Attempt to divide by 0")
        return n1 / n2
    }
}

// You should implement your task here.

module.exports = function towelSort (matrix = []) {
    let result = [];

    matrix.forEach((arr, i) => {
        if (i % 2 !== 0){
            arr = arr.reverse()
        }

        arr.forEach(el => {
            result.push(el)
        })
    })

    return result;
}

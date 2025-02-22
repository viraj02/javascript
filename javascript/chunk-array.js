function chunkArray(arr, size) {
    if (arr.length == 0 || size <= 0) return [];

    let chunkArr = [];

    while (arr.length > 0) {
        chunkArr.push(arr.splice(0, size));
    }

    return chunkArr;
}

let chunkArr = chunkArray([1, 2, 3, 4, 5], 2);
console.log(chunkArr);

let fruitChunk = chunkArray(['apple', 'banana', 'cherry'], 0);
console.log(fruitChunk);
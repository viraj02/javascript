const flattenArray = (nestedArray) => {
    if (nestedArray.length == 0) return [];

    const flatArray = [];

    const flatten = (array) => {
        let index = 0;
        while (index < array.length) {
            if (Array.isArray(array[index])) {
                flatten(array[index]);
            } else {
                flatArray.push(array[index]);
            }
            index++;
        }

    };

    flatten(nestedArray);

    return flatArray;

};

const flatArr = flattenArray([1, [2, 3], [4, [5, 6]]])
console.log(flatArr);
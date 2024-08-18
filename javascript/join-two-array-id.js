// https://leetcode.com/problems/join-two-arrays-by-id/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    let concatArr = [...arr1, ...arr2];

    let uniqObj = {};

    concatArr.forEach((d) => {
        uniqObj[d.id] = { ...uniqObj[d.id], ...d };
    });

    return Object.values(uniqObj);
};

let arr1 = [
    { id: 1, x: 1 },
    { id: 2, x: 9 },
];

let arr2 = [
    { id: 2, x: 10 },
    { id: 3, x: 5 },
];

let joinedArr = join(arr1, arr2);

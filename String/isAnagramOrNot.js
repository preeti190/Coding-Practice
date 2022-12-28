//Javascript Program To Check Whether Two Strings 
//Are Anagram Of Each Other

function isAnagram(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1.length !== arr2.length) {
            return false
        }
        if (!arr2.includes(arr1[i])) {
            return false
        }
    }
    return true
}
let str1 = 'LISTEN';
let str2 = 'SILENT';

let arr1 = [...str1];
let arr2 = [...str2];

let res = isAnagram(arr1, arr2);
console.log(res)
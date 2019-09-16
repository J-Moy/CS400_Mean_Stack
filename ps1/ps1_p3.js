// Justin Moy
// jkmoy@bu.edu
// U35772033

const func = (s, f) => f(s);

let x = func('supercalifragilisticexpialidocious', str => {
    let arr = str.split('c'); // split string by 'c'
    for(let i = 1; i < arr.length; i++)
    {
        // re-add missing separators to all but index 0
        arr[i] = 'c' + arr[i];
    }
    return arr
});

let y = func('supercalifragilisticexpialidocious', str => {
    let newStr = '';
    let count = 0;
    for (let i = 0; i < str.length; i++)
    {
        // find all 'a' and replace with 'A'
        if(str[i] == 'a')
        {
            newStr += 'A';
            count += 1;
        }
        else {newStr += str[i]}
    }
    // create object with previous variables
    const obj = {
        originalString: str,
        modifiedString: newStr,
        numberReplaced: count,
        length: newStr.length
    }
    return obj
})

console.log(x)
console.log(y)
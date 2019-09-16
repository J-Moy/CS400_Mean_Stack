// Justin Moy
// jkmoy@bu.edu
// U35772033

const orderChars = s =>
{
    let str = s.split('');
    str = str.sort();
    let ret = '';
    for (let i = 0; i < str.length; i++)
    {
        ret += str[i];
    }
    return ret;
}

console.log(orderChars('supercalifragilisticexpialidocious'));



// Justin Moy
// jkmoy@bu.edu
// U35772033

const parseExp = exp =>
{
    let operator = eval(exp);
    console.log(`${exp} = ${operator}`);
    return operator;
}

const eval = exp =>
{
    const left = exp[0];
    const right = exp[2];
    const op = exp[1];
    switch(op)
    {
        case '+':
            const a = parseInt(left) + parseInt(right);
            //console.log(`${exp} = ${a}`);
            return a;
            break;
        case '-':
            const b = parseInt(left) - parseInt(right);
            //console.log(`${exp} = ${b}`);
            return b;
            break;
        case '*':
            const c = parseInt(left) * parseInt(right);
            //console.log(`${exp} = ${c}`);
            return c;
            break;
        case '/':
            const d = parseInt(left) / parseInt(right);
            //console.log(`${exp} = ${d}`);
            return d;
    }
}
// functions themselves will print 'l + r = result'
// printouts below will print the returned result only (so 2 lines per)
console.log(parseExp('8+5'));
console.log(parseExp('5*7'));
console.log(parseExp('6-1'));
console.log(parseExp('9/2'));
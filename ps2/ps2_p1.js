// Justin Moy
// jkmoy@bu.edu
//

function* fib()
{
    let first = 0;
    let second = 1;
    let result = 0;

    yield first; // 0 comes first
    yield second; // 1 follows after 0 to start the fib sequence

    while(result < 9999)
    {
        result = first + second;
        first = second;
        second = result;
        yield result;
    }
}

function* evenFib()
{
    let count = 0;
    let fibs = fib();
    while (count < 6)
    {
        let nextYield = fibs.next().value;
        if(nextYield % 2 == 0 && nextYield != 0) // assuming 0 isn't considered even
        {
            yield nextYield;
        }
    }
}

const f = evenFib();
let count = 0;
while (count < 6)
{
    count++;
    console.log(f.next().value);
}

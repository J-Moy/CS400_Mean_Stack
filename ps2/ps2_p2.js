// Justin Moy
// jkmoy@bu.edu
//

function* words(str)
{
    let wordArray = str.split(' ');
    for(let count = 0; count < wordArray.length; count++)
    {
        yield wordArray[count];
    }
}
const gen = words('All I know is something like a bird within her sang');
for (f of gen)
{
    console.log(f);
}
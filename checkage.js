const ages = [ 32, 33 ];
const result = ages.filter(checkAge);

function check(age)
{
    return age>=30;
}

console.log(result);
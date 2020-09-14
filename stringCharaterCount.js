const str = 'Hello World';
const strRef = str.split('');
const strRefUnique = [...new Set([...strRef])].sort();
let result = [];

strRefUnique.forEach((ref)=>{
    const amount = strRef.filter(x => x==ref).length;
    result.push({
        'key':ref,
        'count':amount
    });
})

console.log(result);


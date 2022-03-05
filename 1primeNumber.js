let number = process.argv[2];
console.time();
primeNumber(number);
console.log(console.timeEnd());
function primeNumber(number) {
    number = parseInt(number);
    let arrPrimeNumber = new Array();
    for(let i = 2; arrPrimeNumber.length < number; i++) {
        if (i % 2 != 0 || i == 2) {
            arrPrimeNumber.push(i);
          }
        else {
            continue;
        }
    }
    console.log(arrPrimeNumber);
}
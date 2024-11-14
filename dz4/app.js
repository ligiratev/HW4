function printMultiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}


printMultiplicationTable(7);


//-----------------------------------------------------------------



function checkPalindrome(str) {

    str = str.toLowerCase().replace(/\s/g, '');


    return str === str.split('').reverse().join('');
}


console.log(checkPalindrome("Боб"));
console.log(checkPalindrome("Дед"));
console.log(checkPalindrome("Кот"));
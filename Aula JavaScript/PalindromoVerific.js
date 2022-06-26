//Primeira Solução
function checkPalindromo(str){
    let reversed = str.split("").reverse().join("")
    return str === reversed
}

console.log(checkPalindromo("reviver"));
console.log(checkPalindromo("asa"));
console.log(checkPalindromo("ana"));

//Segunda solução

function checkPalindrome(str){
    let reversed = [...str].reverse().join("")
    return str === reversed
}

console.log(checkPalindrome("ana"));
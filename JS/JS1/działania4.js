// a=5; b=16; c=56. Jeżeli suma a+b jest > 20 dodaj jej wynik do liczby c


let m=5;
let n=16;
let k=56


function plus(m,n){
    return m+n;
} 

let plus1 = plus(5,16);
console.log(plus1)

function add4(k){
    if (plus1 > 20){
      return plus1 + k}
}

let wynik = add4(56);
console.log(wynik)





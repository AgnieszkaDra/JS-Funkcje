function add1(e,f,g,h ){
    console.log(typeof(f))
    if(g||h === undefined){
        g=0;
        h=0;
        
    }return e+f+g +h;
}
let result90 = add1(6,90,8);
let result91 = add1(78,8);
let result92 = add1(56, 90, 78,90);
let resb= 6.2;
let resa= 1.2;
let result93 = add1(resb,resa)





console.log(result90);
console.log(result91);
console.log(result92);
console.log(result93);

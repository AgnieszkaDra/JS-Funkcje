function add1(e,f,g){
    console.log(typeof(f))
    if(g === undefined){
        
        return  e+f;
    }return e+f+g;
}
let result90 = add1(6,90,8);
let result91 = add1(78,8);



console.log(result90);
console.log(result91);
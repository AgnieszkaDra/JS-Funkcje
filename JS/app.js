    let result = document.getElementById("result");

    add(5,);
    add(10,20);
    add(10,20,5);

    function add(a, b)
    {
        if(typeof(b)==="undefined")
            {
                b=0;
            }
        if (arguments.length < 3)
        result.innerHTML += a + " + " + b + " = " + (a + b) + "<br>";
        else
        result.innerHTML += a + " + " + b + " + " + arguments[2] + " = " + (a + b + arguments[2]) + "<br>";
    }

    function hello()
    {
        alert("hello world");
    }
    hello();
 
// div id return2
    let result2 = document.getElementById("result2");

    function add2(c,d)
    {
        return "Wynik = " + (c + d) //zwracanie funkcji jako równanie do nowej zmiennej
                    // return funkja kończy swoje wykonywanie
        alert("next") ///już się nie wyświetli return - funkcja skoku kończy funkcję i wychodzi z danej funkcji
    }

    let sum = add2(5,5); //efekt zwrócenia funkcji do nowej zmiennej
    result2.innerHTML += "Suma = " + sum + "</br>";

//div id return3
    let result3 = document.getElementById("result3");

    function fn(name, ...nums)
    {
        console.log(name, ...nums);
    }

    fn('liczby', 3,5,6);

//div id return4

    function fn(a, b, c){
        if(a > 5){
            return 'stop'; /// 1< 5 stop
        }

        return a + b + c; // to juz się nie wykonuje

    }

    const res = fn(1, 2, 3);
    console.log(res);

//div id return5  

    [1, 2, 3].forEach(function(item) {
        console.log(item);               //funkcja anonimowa
    });

// div id return6

    const printInfo = function(el){
        console.log(el)
    };

    [1, 2, 3].forEach( printInfo );  //anonimowe wyrażenie funkcyjne

// div id return7

    function isEven(num){
        if(num %2 === 0){
            return true;
        }

            return false;
    }

    function showEvenNumbers(start, stop){
        for(let i=start; i < stop; i++){
            if(isEven(1)){ 
            console.log(i + 'jest parzysta');
            }
        }
    }

    showEvenNumbers(1, 10);

// div id return8

    function getUserInput(messageForUser){
        const userInput = prompt(messageForUser)
                return userInput;
        
    }

    const fn1 = getUserInput;

    const inputFromUser = fn1('Ile masz lat?');
    console.log = inputFromUser;

// div id return9 // funkcja anonimowa 
 
    const fn = function(messageForUser) {
    const userInput = prompt(messageForUser);
    return userInput;
    }
    const inputFromUser = fn('Ile masz lat?');
    console.log(inputFromUser);

// div id return10  callback- funkacja, która jest przekazywana jako parametr lub też parametr innej funkcji
const getUserInput = function(message) {
    return prompt(message);
   }
   const sumNumbersFromUser = function(userInputFn) {
    const a = userInputFn('Podaj liczbę a'); //    Wywołanie userInputFn() w ciele funkcji tak naprawdę oznacza uruchomienie getUserInput().To jest tzw. wywołanie zwrotne tj callback.

    const b = userInputFn('Podaj liczbę b');
    const sum = parseFloat(a) + parseFloat(b);
    return sum;
   }
   const result = sumNumbersFromUser(getUserInput);
   console.log(result);

// div id return10 callback jako funkcja anonimowa

const sumNumbersFromUser = function(userInputFn) {
    const a = userInputFn('Podaj liczbę a');
    const b = userInputFn('Podaj liczbę b');
    const sum = parseFloat(a) + parseFloat(b);
    return sum;
   }
   const result = sumNumbersFromUser(function(message) {
    return prompt(message);
   });
   console.log(result);

// div id return11 

   function calc(a, b, callback){
       console.log('calc', a, b, //callback()//   po dopisaniu a,b  funkcja już się wywołuje
                  )
        const res = callback();
        console.log(res);                            // wywołanie callback jako unidentifed
   }

   calc(1, 2, function() {
       console.log('wywołanie'); /// to nie będzie widoczne w konsoli. Ta funkcja nie została wywołana. 
                                // ta funkcja jest wartością, obiektem
        return 22; 
   });





    // [1, 2, 3].forEach(function(el){
    //     console.log(el);                /// to jest to samo
    // } );                             



  
    // alert(add2(10,30))

    // rekurencja // funkcja rekurencyjna wywołuje wewnątrz swego ciała samą siebie

    //silnia n = 5, 5 * 4 * 3 * 2 * 1 

    // function silnia(n)
    // {
       
    //     // silnia(n-1); //wywolywanie wewnątrz funkcji samej funkcji - tworzy się pętla nieskończona
    //     // dla silni licz mniejszych niż 0 nie obliczamy
    //     // silnia to n * wszystkie jej mniejsze składowe
    //     if (n == 1);
    //         return 1;
    //     else 
    //         return n * silnia (n-1);
    // }

    // result.innerHTML += "Silnia = " + silnia(5);

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
 

 

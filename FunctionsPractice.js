//Part 1
/*
function TripleFive () {
    for(var i = 0; i < 3; i++) {
        console.log("Five!");
    }
}

TripleFive();
*/



//Part 2
/*
function lastLetter (name) {
    return (name.charAt(name.length-1));
}

console.log(lastLetter('hello'));
console.log(lastLetter('island'));
*/



//Part 3
/*
function Square (number) {
    return (number * number);
}

console.log(Square(3));
console.log(Square(5));
*/



//Part 4
/*
function Negate (number) {
    return (number * -1);
}
console.log(Negate(5));
console.log(Negate(-8));
*/



//Part 5
/*
function toArray(a, b, c) {
    return ([a, b, c]);
}
console.log(toArray(1, 4, 5));
console.log(toArray(8, 9, 10));
*/



//Part 6
/*
function startsWithA(string) {
    if(string.charAt(0) === "a") {
        return("True");
    }
    else{
        return("False");
    }
}
console.log(startsWithA("aardvark"));
console.log(startsWithA("bear"));
*/



//Part 7
/*
function excite (string) {
    return (string + "!!!");
}
console.log(excite("yes"));
console.log(excite("go"));
*/



//Part 8
/*
function sun(string) {
    var n = string.indexOf("sun");
        if(n === -1) {
            return false;
        }
        else {
            return true;
        }
}
console.log(sun("sundries"));
console.log(sun("asunder"));
console.log(sun("catapult"));
*/



//Part 9
/*
function tiny (number) {
    if(number > 0 && number < 1) {
        return true;
    }
    else {
        return false;
    }
}
console.log(tiny(0.3));
console.log(tiny(14));
console.log(tiny(-5));
*/



//Part 10
/*
function getSeconds(string) {
    var minutes = string.substring(0, 2);
    var seconds = string.substring(3, 5);
    return(+minutes * 60 + +seconds);
}
console.log(getSeconds('01:30'));
console.log(getSeconds('10:25'));
*/

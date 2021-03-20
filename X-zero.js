
let flag = 0;
let count = 0;

function buttonX() {
    flag = 1;
    document.getElementById("disp").innerHTML = 'player 1st is X and player 2nd is O';
}

function buttonO() {
    flag = 0;
    document.getElementById("disp").innerHTML = 'player 1st is O and player 2nd is X';
}

function functionA() {
    document.getElementById("one");
    if(flag == 1) {
        one.innerHTML = 'X';
        flag = 0;
    }

    else if(flag == 0) {
        one.innerHTML = 'O';
        flag = 1;
    }
    count++;
    result_xo();
}
function functionB() {
    document.getElementById("two");
    if(flag == 1) {
        two.innerHTML = 'X';
        flag = 0;
    }
    else if(flag == 0) {
        two.innerHTML = 'O';
        flag = 1;
    }
    count++;
    result_xo();

}
function functionC() {
    document.getElementById("three");
    if(flag == 1) {
        three.innerHTML = 'X';
        flag = 0;
    }

    else if(flag == 0) {
        three.innerHTML = 'O';
        flag = 1;
    }
    count++;
    result_xo();
}
    
function functionD() {
    document.getElementById("four");
    if(flag == 1) {
        four.innerHTML = 'X';
        flag = 0;
    }

    else if(flag == 0) {
        four.innerHTML = 'O';
        flag = 1;
    }
    count++;
    result_xo();
}
function functionE() {
    document.getElementById("five");
    if(flag == 1) {
        five.innerHTML = 'X';
        flag = 0;
    }

    else if(flag == 0) {
        five.innerHTML = 'O';
        flag = 1;
    }
    count++;
    result_xo();
}
function functionF() {
    document.getElementById("six");
    if(flag == 1) {
        six.innerHTML = 'X';
        flag = 0;
    }

    else if(flag == 0) {
        six.innerHTML = 'O';
        flag = 1;
    }
    count++;
    result_xo();
}


function functionG() {
    document.getElementById("seven");
    if(flag == 1) {
        seven.innerHTML = 'X';
        flag = 0;
    }

    else if(flag == 0) {
        seven.innerHTML = 'O';
        flag = 1;
    }
    count++;
    result_xo();
}
function functionH() {
    document.getElementById("eight");
    if(flag == 1) {
        eight.innerHTML = 'X';
        flag = 0;
    }

    else if(flag == 0) {
        eight.innerHTML = 'O';
        flag = 1;
    }
    count++;
    result_xo();
}
function functionI() {
    document.getElementById("nine");
    if(flag == 1) {
        nine.innerHTML = 'X';
        flag = 0;
    }

    else if(flag == 0) {
        nine.innerHTML = 'O';
        flag = 1;
    }
    count++;
    result_xo();
}

function result_xo() {
    if(one.innerHTML =='X' && two.innerHTML == 'X' && three.innerHTML =='X')
    {
        one.innerHTML = 'w';
        one.style.color ="yellow";
        two.innerHTML = 'i';
        two.style.color ="yellow";
        three.innerHTML = 'n';
        three.style.color ="yellow";    
    }
    else if(four.innerHTML =='X' && five.innerHTML == 'X' && six.innerHTML =='X')
    {
        four.innerHTML = 'w';
        four.style.color ="yellow";
        five.innerHTML = 'i';
        five.style.color ="yellow";
        six.innerHTML = 'n';
        six.style.color ="yellow";    
    }
    else if(seven.innerHTML =='X' && eight.innerHTML == 'X' && nine.innerHTML =='X')
    {
        seven.innerHTML = 'w';
        seven.style.color ="yellow";
        eight.innerHTML = 'i';
        eight.style.color ="yellow";
        nine.innerHTML = 'n';
        nine.style.color ="yellow";    
    }

    if(one.innerHTML =='X' && four.innerHTML == 'X' && seven.innerHTML =='X')
    {
        one.innerHTML = 'w';
        one.style.color ="yellow";
        four.innerHTML = 'i';
        four.style.color ="yellow";
        seven.innerHTML = 'n';
        seven.style.color ="yellow";    
    }
    else if(two.innerHTML =='X' && five.innerHTML == 'X' && eight.innerHTML =='X')
    {
        two.innerHTML = 'w';
        two.style.color ="yellow";
        five.innerHTML = 'i';
        five.style.color ="yellow";
        eight.innerHTML = 'n';
        eight.style.color ="yellow";    
    }
    else if(three.innerHTML =='X' && six.innerHTML == 'X' && nine.innerHTML =='X')
    {
        three.innerHTML = 'w';
        three.style.color ="yellow";
        six.innerHTML = 'i';
        six.style.color ="yellow";
        nine.innerHTML = 'n';
        nine.style.color ="yellow";    
    }

    if(one.innerHTML =='O' && two.innerHTML == 'O' && three.innerHTML =='O')
    {
        one.innerHTML = 'w';
        one.style.color ="yellow";
        two.innerHTML = 'i';
        two.style.color ="yellow";
        three.innerHTML = 'n';
        three.style.color ="yellow";    
    }
    else if(four.innerHTML =='O' && five.innerHTML == 'O' && six.innerHTML =='O')
    {
        four.innerHTML = 'w';
        four.style.color ="yellow";
        five.innerHTML = 'i';
        five.style.color ="yellow";
        six.innerHTML = 'n';
        six.style.color ="yellow";    
    }
    else if(seven.innerHTML =='O' && eight.innerHTML == 'O' && nine.innerHTML =='O')
    {
        seven.innerHTML = 'w';
        seven.style.color ="yellow";
        eight.innerHTML = 'i';
        eight.style.color ="yellow";
        nine.innerHTML = 'n';
        nine.style.color ="yellow";    
    }

    if(one.innerHTML =='O' && four.innerHTML == 'O' && seven.innerHTML =='O')
    {
        one.innerHTML = 'w';
        one.style.color ="yellow";
        four.innerHTML = 'i';
        four.style.color ="yellow";
        seven.innerHTML = 'n';
        seven.style.color ="yellow";    
    }
    else if(two.innerHTML =='O' && five.innerHTML == 'O' && eight.innerHTML =='O')
    {
        two.innerHTML = 'w';
        two.style.color ="yellow";
        five.innerHTML = 'i';
        five.style.color ="yellow";
        eight.innerHTML = 'n';
        eight.style.color ="yellow";    
    }
    else if(three.innerHTML =='O' && six.innerHTML == 'O' && nine.innerHTML =='O')
    {
        three.innerHTML = 'w';
        three.style.color ="yellow";
        six.innerHTML = 'i';
        six.style.color ="yellow";
        nine.innerHTML = 'n';
        nine.style.color ="yellow";    
    }

    else if(one.innerHTML =='X' && five.innerHTML == 'X' && nine.innerHTML =='X')
    {
        one.innerHTML = 'w';
        one.style.color ="yellow";
        five.innerHTML = 'i';
        five.style.color ="yellow";
        nine.innerHTML = 'n';
        nine.style.color ="yellow";  
    }
    else if(three.innerHTML =='X' && five.innerHTML == 'X' && seven.innerHTML =='X')
    {
        three.innerHTML = 'n';
        three.style.color ="yellow";
        five.innerHTML = 'i';
        five.style.color ="yellow";
        seven.innerHTML = 'w';
        seven.style.color ="yellow";    
    }

    else if(one.innerHTML =='O' && five.innerHTML == 'O' && nine.innerHTML =='O')
    {
        one.innerHTML = 'w';
        one.style.color ="yellow";
        five.innerHTML = 'i';
        five.style.color ="yellow";
        nine.innerHTML = 'n';
        nine.style.color ="yellow";
    }
    else if(three.innerHTML =='O' && five.innerHTML == 'O' && seven.innerHTML =='O')
    {
        three.innerHTML = 'n';
        three.style.color ="yellow";
        five.innerHTML = 'i';
        five.style.color ="yellow";
        seven.innerHTML = 'w';
        seven.style.color ="yellow";
    }
    else if(count == 9)
    {
        alert(' DraW ');
    }
}





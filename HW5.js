function sumOfNumbers(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}


// console.log(sumOfNumbers(5));

function printEvenNumbers(m) {
    for(let i = 0; i <= m; i += 2) {
        console.log(i)
    }
}
//  printEvenNumbers(10);
// My even number start with 0 so i set i = 0. I put i <= m because m is the maximum number i want to print.
// I put i += 2 because then that will give me a +2 pattern showing only even numbers.
// In each step of the loop i console log out the even number.

function fibonacciSequance(n) {
    const cars = [0, 1];
    for(let i = 2; i < n; i++) {
        cars[i] = cars[i-1] + cars[i-2] ;
    }
    return cars;
}

// console.log(fibonacciSequance(10));
// I use const cars = [0, 1] because the first 2 numbers in the fibonacci is 0 and 1.
// My loop starts with 2 because i already defined 0 and 1.
// I used cars[i] = cars[i-1] + cars[i-2] because that is fibonacci sequance. The two numbers ahead added up is the sum.

function reverseString(str) {
    let newstr =""
    for(let i = str.length-1; i >= 0; i--) {
        newstr =newstr+ str[i];

    }
    return newstr;
}
// console.log(reverseString("abcdefghi"));
// I used newstar from the empty string.
// I used str.length so i could get the total amount of char.
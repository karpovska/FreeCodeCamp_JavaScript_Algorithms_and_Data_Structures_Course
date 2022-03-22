// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    //console.log("solution test");
    const positiveA = A.filter(a => a > 0); 
    console.log(positiveA);
    const sortedPostitive = positiveA.sort();
    console.log(sortedPostitive);
    let missingN = 1;
    let max = Math.max(...sortedPostitive);
    //console.log(max); 
    if(max === sortedPostitive.length) {
        missingN = max + 1;
        //return missingN;
    }
    for (let i = 1; i <= sortedPostitive.length; i++)
    {
        found = sortedPostitive.find(el => el == i);        
        if (found === undefined) {
            missingN = i;
            break;
        }
        //console.log(missingN);
    }
    console.log(missingN);
}
solution([3, -2, 5, -6, -2, 2, 1, 4, 6, 7]);

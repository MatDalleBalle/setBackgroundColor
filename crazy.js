console.log("hej");


function out(any) {
   console.log(typeof any);
    console.log(any);
}


out("hej");

out(out);


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

out(arr[0]);

arr.push(4);

out(arr.length);


out("Erik" +5>15)
out("Hej" + 5);
out("Hej" - 5);
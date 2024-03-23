/*Напишіть функцію checkBrackets(str) яка приймає рядок жс коду (someFn)
  і перевіряє правильність закриття дужок () {} []
  Якщо рядок містить коректний код функція повертає true.
  В іншому випадку повертає false
*/
const someFn = `function foo( ) {
  const arr = 1, 2, 3];
  console.log(arr);
}`;
function checkBrackets() { 
    const arr = [];
    for (let i = 0; i < someFn.length; i++) { 
        if (someFn[i] === "(") {
            arr.push("(");
        }
        if (someFn[i] === ")") {
            if (arr[arr.length - 1] === "(") {
                arr.pop();
                return true;
            } else {
                return false;
            }
        }
        if (someFn[i] === "{") {
            arr.push("{");
        }
        if (someFn[i] === "}") {
            if (arr[arr.length - 1] === "{") {
                arr.pop();
                return true
            } else {
                return false;
            }
        }
        if (someFn[i] === "[") {
            arr.push("[");
        }
        if (someFn[i] === "]") {
            if (arr[arr.length - 1] === "[") {
                arr.pop();
                return true
            } else {
                return false;
            }
        }
    }
}
console.log(checkBrackets(someFn));
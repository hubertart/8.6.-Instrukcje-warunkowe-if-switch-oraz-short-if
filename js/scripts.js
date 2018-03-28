var a = prompt("Enter value a:");
var b = prompt("Enter value b:");

var value = [(a * a) - (2 * a * b) - (b * b)];
console.log(value);

if (value > 0) {
    document.write("wynik dodatni");
} else if (value < 0) {
    document.write("wynik ujemny")
} else if (value == 0) {
    document.write("wynik jest równy zero")
}

//alert(value);

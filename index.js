// Write your solution here!
const cats = ["Milo","Otis", "Garfield"];
cats.length = 0;
cats.push("Milo", "Otis", "Garfield");
function destructivelyAppendCat(name) {
    cats.push(name);
    
}
cats.destructivelyAppendCat("Ralph");
cats.lenght = 0;
cats.push("Milo", "Otis", "Garfield");
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
cats.destructivelyPrependCat("Bob");
cats.length = 0;
cats.push("Milo", "Otis", "Garfield");
function destructivelyRemoveLastCat() {
    cats.pop();
}
cats.destructivelyRemoveLastCat();
cats.lenght = 0;
cats.push("Milo", "Otis", "Garfield")
function destructivelyRemoveFirstCat() {
    cats.shift();
}
cats.destructivelyRemoveFirstCat();
cats.length = 0;
cats.push("Milo", "Otis", "Garfield");
function appendCat(name) {
    const copyCats = [...cats, name];
    return copyCats;
}
cats.appendCat("Broom");
cats.length = 0;
cats.push("Milo", "Otis", "Garfield");
function prependCat(name) {
    const copyCats = [name, ...cats];
    return copyCats;

}
cats.prependCat("Arnold");
cats.length = 0;
cats.push("Milo", "Otis", "Garfield");
function removeLastCat() {
    return cats.slice(0, cats.length -1)
}
cats.removeLastCat();
cats.length = 0;
cats.push("Milo", "Otis", "Garfield");
function removeFirstCat() {
    return cats.slice(1);
}
cats.removeFirstCat();


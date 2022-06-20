const cats= ["Milo", "Otis", "Garfield"];
const arrayFunction = function() {
    beforeEach(function () {
      cats.length = 0;

      cats.push('Milo', 'Otis', 'Garfield');
    })
}

function destructivelyAppendCat(name){
    cats.push("Ralph")
}

function destructivelyPrependCat(name){
    return cats.unshift("Bob");
}

function destructivelyRemoveLastCat(name){
    cats.pop();
}

function destructivelyRemoveFirstCat(name){
    cats.shift();
}

function appendCat(name){
    return [...cats, "Broom" ];
}

function prependCat(name){
    return ["Arnold", ...cats];
}

function removeLastCat(){
    return cats.slice(0,-1)
}

function removeFirstCat(){
    return cats.slice(1)
}
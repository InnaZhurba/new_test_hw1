function reverseString1(str){
    return str.split("").reverse().join("");
}

//"string".split("").reverse().join("");
const rvsd = str => str.split("").reverse().join("")

function reverseString3(str){
    let rvsdString = "";
    for (let i = str.length - 1; i >= 0; i--){
        rvsdString += str[i];
    }
    return rvsdString;
}

function reverseString4(str) {
    let rvsdString = [];
    for (let i = 0; i < str.length; i++) {
        rvsdString.push(str[str.length - 1 - i]);
    }
    return rvsdString
}

function reverseString5(){
    let rvsdString = ''
    for(const letter of 'ghgkjkjhk'){
        rvsdString = letter + rvsdString;
    }
    console.log(rvsdString);
    //return rvsdString;
}

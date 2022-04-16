import logo from './logo.svg';

import './App.css';


function reverseString1(str){
  return str.split("").reverse().join("");
}

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

function reverseString5(str){
  let rvsdString = ''
  for(const letter of str){
    rvsdString = letter + rvsdString;
  }
  return rvsdString;
}

function App() {
  let variable = 'my name is Inna';
  console.log(variable);
  let new_var = reverseString1(variable);
  console.log(`${new_var}`);
}

export default App;

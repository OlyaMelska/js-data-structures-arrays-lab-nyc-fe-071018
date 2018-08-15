// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  return drivers.push(name);
}

function destructivelyPrependDriver(name){
  return drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
  return drivers.pop();
}

function destructivelyRemoveFirstDriver(){
  return drivers.shift(0);
}

function appendDriver(name){
  let newDrivers = drivers.slice();
  newDrivers.push(name);
  return newDrivers; 
}

function prependDriver(name){
  let newDrivers = drivers.slice();
  newDrivers.unshift(name);
  return newDrivers;   
}

function removeLastDriver(){
  let newDrivers = drivers.slice();
  newDrivers.pop();
  return newDrivers;  
}
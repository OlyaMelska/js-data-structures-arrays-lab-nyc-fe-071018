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
  //drivers.push(name);
  let newDrivers = drivers.slice();
  newDrivers.push(name);
  return newDrivers; 
}
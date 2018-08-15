// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  return drivers.push(name);
}

function destructivelyPrependDriver(name){
  return drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
  return drivers.shift(drivers.length-1);
}

function destructivelyRemoveFirstDriver(){
  return drivers.shift(0);
}

function appendDriver(name){
  drivers.push(name);
  let newDrivers = drivers.slice();
  return newDrivers; 
}
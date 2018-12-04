'use strict'
function ElectricalAppliances (name, power, status) {
  this.name = name;
  this.power = power;
  this.turnOn = status;
}
ElectricalAppliances.prototype.getName = function () {
  return this.name;
}
ElectricalAppliances.prototype.setName = function (newName) {
  this.name = newName;
}
ElectricalAppliances.prototype.getStatus = function () {
  return this.turnOn
};

function Tv (name, power, status) {
  ElectricalAppliances.apply(this, arguments)
}
Tv.prototype = Object.create(ElectricalAppliances.prototype)
Tv.prototype.constructor = Tv

function Computer (name, power, status) {
  ElectricalAppliances.apply(this, arguments)
}
Computer.prototype = Object.create(ElectricalAppliances.prototype)

Computer.prototype.constructor = Computer

function Lamp (name, power, status) {
  ElectricalAppliances.apply(this, arguments)
}
Lamp.prototype = Object.create(ElectricalAppliances.prototype)

Lamp.prototype.constructor = Lamp

let tv = new Tv('Philips', 110, false)
let computer = new Computer('Apple', 150, true)
let lamp = new Lamp('Perfecto Light', 30, true)

function Room (...electricalAppliances) {
  this.electricalAppliances = electricalAppliances
}
Room.prototype.getPower = function () {
  return (this.electricalAppliances.reduce((acc, item) => {
    return acc + item.power
  }, 0))
}
Room.prototype.search = function (value) {
  return this.electricalAppliances.filter(function (item) {
    return item.name.includes(value)
  })
}
let roomAppliances = new Room(tv, computer, lamp)
console.log(roomAppliances.getPower())
console.log(roomAppliances.search('Philips'))

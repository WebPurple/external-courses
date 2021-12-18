class Room {
  constructor(arrayDevices) {
    this.arrayDevices = arrayDevices;
    this.capacity = 0;
  }

  getTotalPower() {
    this.arrayDevices.forEach((item) => {
      if (item.switchedOn) {
        this.capacity += item.capacity;
      }
    });

    return this.capacity;
  }

  findDevice(name) {
    let chosenDevice;
    this.arrayDevices.forEach((item) => {
      if (item.name === name) {
        chosenDevice = `${name} find`;
      } else {
        chosenDevice = 'divice is not in the room';
      }
    });

    return chosenDevice;
  }
}

const device1 = {
  name: 'Vacuum cliner',
  switchedOn: true,
  capacity: 250,
};
const device2 = {
  name: 'Notebook',
  switchedOn: false,
  capacity: 150,
};
const device3 = {
  name: 'TV',
  switchedOn: true,
  capacity: 175,
};
const device4 = {
  name: 'lamp',
  switchedOn: true,
  capacity: 50,
};

const arrDevicesInTheRoom = [device1, device2, device3, device4];

const room = new Room(arrDevicesInTheRoom);

console.log(room.findDevice('Vacuum cliner'));
console.log(room.getTotalPower());

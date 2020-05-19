function Device(name, power, isPlugged) {
    this.name = name;
    this.power = power;
    this.isPlugged = isPlugged;
}

Device.prototype.plugInOut = function plugInOut() {
    if (this.isPlugged) {
        var pluged;
        console.log('plugged!');
        pluged = true;
    } else {
        console.log('not plugged!');
        pluged = false;
    }
    return pluged;
};

function Computer(name, power, isPlugged, rgbColorCount) {
    Device.call(this, name, power, isPlugged);
    this.rgbColorCount = rgbColorCount;
}

Computer.prototype = Object.create(Device.prototype);
Computer.prototype.constructor = Computer;

function Notebook(name, power, isPlugged, rgbColorCount, isClosed) {
    Computer.call(this, name, power, isPlugged, rgbColorCount);
    this.isClosed = isClosed;
}

Notebook.prototype = Object.create(Computer.prototype);
Notebook.prototype.constructor = Notebook;

Notebook.prototype.isClosed = function isClosed() {
    return this.isClosed;
};

function Apartment(rooms) {
    this.rooms = rooms || [];
}

Apartment.prototype.findDevice = function findDevice(name) {
    var result = 'Не найдено.';

    this.rooms.forEach(function(room) {
        if (room.findDevice(name)) {
            result = 'Найдено в ' + room.name;
        }
    });
    console.log(result);
};

Apartment.prototype.sumPower = function sumPower() {
    return this.rooms.reduce(
        function (sum, power) {
            return sum + power.getTotalWatt();
        },
        0
    ) + ' watt';
};

function Room(name, devices) {
    this.name = name;
    this.devices = devices || [];
}

Room.prototype.findDevice = function findDevice(name) {
    var result = false;

    this.devices.forEach(function(device) {
        if (device.name === name) {
            result = true;
        }
    });

    return result;
};


Room.prototype.getTotalWatt = function getTotalWatt() {
    return this.devices.reduce(
        function (sum, device) {
            return sum + device.power;
        },
        0
    );
};

Room.prototype.getPluggedList = function getPluggedList() {
    return this.devices.reduce(
        function (sum, device) {
            if (device.isPlugged()) {
                sum.push(device);
            }
            return sum;
        },
        []
    );
};

var computer = new Computer('PC-1', 500, false, 64);
var notebook = new Notebook('PC-1', 350, true, 0, true);

var room1 = new Room('room 1', [
    computer,
    new Computer('PC-2', 500, true, 64),
    new Notebook('PC-3', 350, false, 0, false)
]);

var room2 = new Room('room 2', [
    notebook,
    new Computer('PC-4', 750, false, 64),
    new Notebook('PC-5', 250, true, 0, true)
]);

var apartment = new Apartment([room1, room2]);
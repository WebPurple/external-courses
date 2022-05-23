class VacuumCleaner {
  constructor() {
    this.power = '220V';
    this.status = 'Off';
    this.cleaningMode = 'dry';
  }

  turnOn() {
    this.status = 'On';
    console.log(this.status);
  }

  turnOf() {
    this.status = 'Off';
    console.log(this.status);
  }

  changeCleaningMode() {
    if (this.status === 'Off') {
      return;
    }
    if (this.cleaningMode === 'dry') {
      this.cleaningMode = 'wet';
    } else {
      this.cleaningMode = 'dry';
    }

    console.log(this.cleaningMode);
  }

  getInfo() {
    console.log('power', this.power);
    console.log('cleaningMode', this.cleaningMode);
  }
}

class RobotCleaner extends VacuumCleaner {
  constructor() {
    super();
    this.map = false;
  }

  scan() {
    if (this.status === 'Off') {
      return;
    }
    this.map = true;
    console.log(this.map);
  }

  getInfo() {
    console.log('power', this.power);
    console.log('cleaningMode', this.cleaningMode);
    console.log('isMap', this.map);
  }
}

class RobotSoldier extends RobotCleaner {
  constructor() {
    super();
    this.shoot = false;
  }

  shootOn() {
    if (this.status === 'Off') {
      return;
    }
    this.shoot = true;
    console.log(this.shoot);
  }

  shootOf() {
    if (this.status === 'Off') {
      return;
    }
    this.shoot = false;
    console.log(this.shoot);
  }

  getInfo() {
    console.log('power', this.power);
    console.log('isShoot', this.shoot);
    console.log('isMap', this.map);
  }

  getShootState() {
    console.log('isShoot', this.shoot);
  }
}

const robotSoldier = new RobotSoldier();
robotSoldier.turnOn();

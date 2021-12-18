class NewYearPresent {
  constructor(present) {
    this.present = present;
    this.weight = 0;
  }
}

const candy1 = {
  type: 'chocolate',
  name: 'AlpenGold',
  weight: 80,
  amount: 2,
};
const candy2 = {
  type: 'marmelade',
  name: 'BonPary',
  weight: 65,
  amount: 3,
};
const candy3 = {
  type: 'chocolate bar',
  name: 'snickers',
  weight: 50,
  amount: 2,
};
const candy4 = {
  type: 'chocolate bar',
  name: 'Mars',
  weight: 50,
  amount: 1,
};

const present1 = [candy1, candy2, candy3, candy4];

NewYearPresent.prototype.presentWeight = () => {
  this.present.forEach((item) => {
    this.weight += (item.weight * item.amount);

    return this.weight;
  });
};

NewYearPresent.prototype.findCandy = (type) => {
  let amountCundy = 0;
  this.present.forEach((item) => {
    if (item.name === type) {
      amountCundy += item.amount;
    }
  });
  console.log(`As a gift ${amountCundy} ${type}`);

  return amountCundy;
};

NewYearPresent.prototype.sortCandy = () => this.present
  .sort((a, b) => parseFloat(a.weight) - parseFloat(b.weight));

const newYearPresent = new NewYearPresent(present1);

console.log(newYearPresent.presentWeight());
console.log(newYearPresent.sortCandy());
console.log(newYearPresent.findCandy('marmelade'));

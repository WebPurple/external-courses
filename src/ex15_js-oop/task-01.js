'use strict'

class Sweetness {
  constructor(nameSweetness, sortSweetness, weightSweetness) {
    this.nameSweetness = nameSweetness
    this.sortSweetness = sortSweetness
    this.weightSweetness = weightSweetness
  }
}

class Toffee extends Sweetness {
  constructor(nameSweetness, sortSweetness, weightSweetness, calorie) {
    super(nameSweetness, sortSweetness, weightSweetness)
    this.calorie = calorie
  }
}

class Chocolate extends Sweetness {
  constructor(nameSweetness, sortSweetness, weightSweetness, calorie) {
    super(nameSweetness, sortSweetness, weightSweetness)
    this.calorie = calorie
  }
}

let meller = new Toffee('Meller', 'Toffe ', 46, 410)
let milka = new Chocolate('Milka', 'Chocolate', 100, 534)
let alpenGold = new Chocolate('Alpen Gold', 'Chocolate', 90, 522)

class Gift {
  constructor(...gift) {
    this.gift = [...gift]
  }

  getWeight() {
    return (this.gift.reduce((acc, item) => {
      return acc + item.weightSweetness
    }, 0))
  }

  sort(value) {
    return this.gift.sort((a, b) => a[value] - b[value])
  }

  findSweetness(value) {
    return this.gift.filter(function (item) {
      return item.nameSweetness.includes(value)
    })
  }
}

let christmasGift = new Gift(meller, milka, alpenGold)

console.log(christmasGift.getWeight());
console.log(christmasGift.sort('weightSweetness'));
console.log(christmasGift.sort(' calorie'));
console.log(christmasGift.findSweetness('Milka'));
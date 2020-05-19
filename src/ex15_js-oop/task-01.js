class CandiesGift {
    constructor(...candies) {
        this.list = candies || [];
    }

    getList() {
        return Array.from(this.list);
    }
    putToList(candy) {
        let response;

        if (candy instanceof Candy) {
            this.list.push(candy);
            response = true;
        } else {
            response = false;
        }
        return response;
    }
    totalWeight() {
        return this.list.reduce(
            function (sum, item) {
                return sum + item.weight;
            },
            0
        ) + 'g';
    }
    findCandy(candyName) {
        let result = "Candy not found";
        this.list.forEach(function (name) {
            if (candyName === name.name) {
                result = "Candy is here";
            }
        });
        console.log(result);

    }
    sortByWeight() {
        this.list = this.list.sort(
            function (current, next) {
                let sort;
                if (current.weight < next.weight) {
                    sort = 1;
                } else if (current.weight > next.weight) {
                    sort = -1;
                } else {
                    sort = 0;
                }
                return sort;
            }
        );
        return Array.from(this.list);
    }
    sortByName() {
        this.list = this.list.sort(
            function (current, next) {
                let sort;
                if (current.name > next.name) {
                    sort = 1;
                } else if (current.name < next.name) {
                    sort = -1;
                } else {
                    sort = 0;
                }
                return sort;
            }
        );
        return Array.from(this.list);
    }
}

class Candy {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    sayName() {
        console.log(this.name);
    }

    sayWeight() {
        console.log(this.weight);
    }
}

class Lollipop extends Candy {
    constructor(name, weight, color) {
        super(name, weight);
        this.color = color;
    }

    sayWeight() {
        console.log(this.weight + 50, 'adding stick');
    }

    sayNetWeight() {
        super.sayWeight();
    }
}

let lollipop = new Lollipop('Chupa-Chups', 300, 'green');

let newGift = new CandiesGift(
    new Candy('Marsianka', 25),
    new Candy('Snickers', 15),
    new Candy('CaramelApple', 45),
    new Candy('Mishka na severe', 10),
    new Candy('Bounty', 20),
    new Candy('Waffles', 125)
);

newGift.putToList(lollipop);
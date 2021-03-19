const checkArrayForIdenticalValues = (arrGiven) => {
    const lastItem = arrGiven.length - 1;

    return arrGiven.every((item,index) => {
        if (index === lastItem) {
            return true;
        }

        if (item !== arrGiven[index+1]) {
            return false;
        }
        
        return true;
    });;
};

module.exports = checkArrayForIdenticalValues;

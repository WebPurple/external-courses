function createObject() {
    let Obj = {};

    Obj.number = 1;
    Obj.text = "Some String Here";
    Obj.bool = true;
    delete Obj.bool
}

module.exports = createObject
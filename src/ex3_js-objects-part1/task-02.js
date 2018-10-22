//ex3_task-02__Isaev_Arsenyi

obj1 = {
    num: 1,
    str: "string",
    bol: true
}

function Show(obj) {
    for (let key in obj) {
        if(obj.hasOwnProperty(key)) {
            console.log(key + ": " + obj[key]);
         }
    }
}

Show(obj1);

module.exports = Show;
const workWithObject = () => {
    let user = {};

    user.name = "object";
    user["likes pizza"] = true;
    user.age = 21;
    
    delete user.name;

    return;
};

module.exports = workWithObject;

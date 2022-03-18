const searchInProto = (key, object) => Object.getPrototypeOf(object)[key];

module.exports = searchInProto;

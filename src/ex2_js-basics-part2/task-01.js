module.exports = function numberOrString(myMessage) {
  const typeMyMessage = typeof (myMessage);
  
  if (typeMyMessage === "string") {
    return typeMyMessage;
  }
  
  if (typeMyMessage === "number" && !isNaN(myMessage)) {
    return typeMyMessage;
  }
  
  return undefined;
}

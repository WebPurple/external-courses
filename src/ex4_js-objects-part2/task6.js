function UpEveryFirst() {
    var string = 'i want uppercase chars';
    var splits = string.split(" ");
    var stringFinal = "";
  
    for (let i = 0; i < splits.length; i++) {
      let Name = splits[i];
      let First = Name.substring(0, 1).toUpperCase();
      let LeftChars = Name.substring(1, Name.length)
      stringFinal += First + LeftChars + " ";
    }
  
    console.log(stringFinal)
  }
  UpEveryFirst();
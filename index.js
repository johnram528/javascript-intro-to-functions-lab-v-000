function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string){
  var up = string.toUpperCase() ;
  if(string === "I love you, Grandma.") {
    return "I love you, too."
  }else if(string == up){
    return "YES INDEED!"
  }else{
    return "I can't hear you!"
  }
}




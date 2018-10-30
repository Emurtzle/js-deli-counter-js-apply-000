var totalServed = 0

function takeANumber(line) {
  //var i = 0;
  //var string = "test";

  //line[line.length] = name;

  line.push(++totalServed)
  //totalServed +=1;

  //line.push(name)
  return ". You are number " + line.length + " in line.";
}

let line = []
takeANumber(line) // line is [1]
takeANumber(line) // line is [1,2]

nowServing(line) //line is [2]
nowServing(line) // line is []

takeANumber(line) // line is [3]


function nowServing(line) {
  if (line.length == 0) {
    return "There is nobody waiting to be served!";
  } else {
    //var name = line[0];
    return `Currently serving ${line.shift()}.`;
  }
}

function currentLine(line) {
  var string = "The line is currently: ";
  if (line.length == 0) {
    return "The line is currently empty.";
  } else {
    var i;
    for (i = 0; i < line.length-1; i++) {
      string += i+1 + ". " + line[i] + ", ";
    }

    string += line.length + ". " + line[line.length-1];
  }
  return string;
}

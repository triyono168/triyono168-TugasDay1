/*Exercises1
input "hello world!"
output
"!dlrow olleh"*/

console.log('#Exercise 1')

function balikString(string){
  
  var kataBalik='';
  
  for(var i=string.length-1; i>=0; i--){
    kataBalik=kataBalik+string[i];
  }
  return kataBalik;
  
}

console.log(balikString('hello world!'));

console.log('');
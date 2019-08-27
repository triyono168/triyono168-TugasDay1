function targetTerdekat(arr) {
  // you can only write your code here!
  var lookingO = arr.indexOf('o');
  
  var isJarak = 0;
  var realJarak = arr.length; 
  
  for (var i=0; i<arr.length; i++){
    if (arr[i] === 'x') {
      isJarak = Math.abs(lookingO-i);
        if (isJarak < realJarak) {
        realJarak = isJarak;
      }
    }
  }
  if (arr.indexOf('x') ===-1) {
    return 0;
  }
  
  return realJarak;
}


console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x']));
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x']));
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); 
console.log(targetTerdekat(['', '', 'o', ''])); 
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x']));
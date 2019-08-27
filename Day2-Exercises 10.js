function perkalianUnik(arr) {
  // you can only write your code here!
  var angka =1;
  for (var i=0; i<arr.length; i++){
    angka *= arr[i];
  }
  
  var tampung =[];
  var hasil=0;
  for (var j=0; j<arr.length; j++){
    hasil = angka/arr[j];
    tampung.push(hasil);
  }
  return tampung;
}


console.log(perkalianUnik([2, 4, 6])); 
console.log(perkalianUnik([1, 2, 3, 4, 5])); 
console.log(perkalianUnik([1, 4, 3, 2, 5])); 
console.log(perkalianUnik([1, 3, 3, 1])); 
console.log(perkalianUnik([2, 1, 8, 10, 2])); 
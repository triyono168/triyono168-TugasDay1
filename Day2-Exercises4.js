// //contoh output
// ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]  

var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(arg){
  // var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
  
  input.splice(1,1, "Roman Alamsyah Elsharawy");
  input.splice(2,1, "Provinsi Bandar Lampung");
  input.splice(4,1, "Pria");
  input.splice(5,0, "SMA Internasional Metro");
  
  
  console.log(arg);
}
console.log(dataHandling2(input));

 //console.log(dataHandling2(input[3]));
 //input.split("")
console.log(input[3].split("/"));
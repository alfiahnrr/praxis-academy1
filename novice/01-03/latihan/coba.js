function greet(nama) {
    console.log("Hello " + nama);
  }
  greet("Harry");
  console.log("Bye");

//case lain
  function bagi(a,b){
    hasilBagi = a / b;
    return hasilBagi;
}

// memanggil fungsi
var nilai1 = 20;
var nilai2 = 5;
var hasilPembagian = bagi(nilai1, nilai2);

console.log(hasilPembagian); //-> 4
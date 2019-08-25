function pasanganTerbesar(num) {
	// you can only write your code here!
	num = num.toString();
	var box = 0;
	for (var i = 0; i < num.length; i++) {
		var banding = num[i] + num[i + 1];
		if (box < banding) {
			box = banding;
		}
	}
	return box;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
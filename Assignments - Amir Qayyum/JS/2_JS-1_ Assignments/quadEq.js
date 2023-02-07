
	function findRoots(a, b, c)
	{

		if (a == 0) {
			console.log("Invalid");
			return;
		}

		let d = b * b - 4 * a * c;
		let sqrt_val = Math.sqrt(Math.abs(d));

		if (d > 0) {
			console.log(
				"Roots are real and different \n" + "");

			console.log(
				(-b + sqrt_val) / (2 * a) + ""
				+ (-b - sqrt_val) / (2 * a));
		}
		else if (d == 0) {
			console.log(
				"Roots are real and same \n" + "");

			console.log(-b / (2 * a) + ""
							+ -b / (2 * a)) ;
		}
		else
		{
			console.log("Roots are complex \n");

			console.log(-b / (2 * a) + ""
							+ sqrt_val / (2 * a) + ""
							+ -b / (2 * a)
							+ "" + sqrt_val) / (2 * a) ;
		}
	}

		let a = 1, b = -7, c = 12;
		findRoots(a, b, c);

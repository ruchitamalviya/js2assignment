function userInputValue() {

		var inputValue = document.getElementById("user_input");
		var str = inputValue.value;
		alphabetPosition(str);
	}

	function alphabetPosition(text) {

		var result = "";
		for(var i = 0; i < text.length; i++) {

			var code = text.toUpperCase().charCodeAt(i);
		}
				
		if(code > 64 && code < 91) {
			result += (code - 64) + " "
			document.getElementById('indexValue').innerHTML = " The Index Of" + " " +result;

			}else{

			document.getElementById('indexValue').innerHTML = "The Input Is Not Alphabet";
			}
	
		}


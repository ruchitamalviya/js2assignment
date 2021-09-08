(function() {
    var inputValue = document.getElementById("user_input");

    function userInputValue() {
        var str = inputValue.value;
        var newlist = document.createElement('li');
        //alert(str);
        alphabetPosition(str, newlist);
    }
    inputValue.onkeyup = userInputValue;

    function alphabetPosition(text, newlist) {
        var result = "";
        for (var i = 0; i < text.length; i++) {
            var code = text.toUpperCase().charCodeAt(i);
            if (code > 64 && code < 91) {
                result = (code - 64) + " "
                document.getElementById('newadded').appendChild(newlist).innerHTML = "The index of "+"'" + text[i] +"'"+ " " + result;
            } else {
                document.getElementById('newadded').appendChild(newlist).innerHTML = "'" + text[i] +"'"+ " is not an alphabet";

            }
        }

    }
})();
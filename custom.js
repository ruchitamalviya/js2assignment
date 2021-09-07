(function() {
    var inputValue = document.getElementById("user_input");

    function userInputValue() {
        var str = inputValue.value;
        var newlist = document.createElement('ul');
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
                document.getElementById('newadded').appendChild(newlist).innerHTML = "<li>The index of " + text[i] + " " + result + "</li>";
            } else {
                document.getElementById('newadded').appendChild(newlist).innerHTML = "<li>" + text[i] + " is not an alphabet</li>";

            }
        }

    }
})();
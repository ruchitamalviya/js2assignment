(function() {
    let inputValue = document.getElementById("user_input");
    inputValue.onkeyup = function() {
        let str = inputValue.value;
        alphabetPosition(str);
    }

    function alphabetPosition(text) {
        let result = html = "";
        for(let i = 0; i < text.length; i++) {
            let code = text.toUpperCase().charCodeAt(i);
            if(code > 64 && code < 91) {
                result = (code - 64) + " "
                html += "<li>" + "The index of " + "'" + text[i] + "'" + " " + result + "</li>";
            } else {
                html += "<li>" + "'" + text[i] + "'" + " is not an alphabet" + "</li>";
            }
        }
        document.getElementById('newadded').innerHTML = html;
    }
})();
window.onload = function(){
    document.getElementById("send").onclick = function(){
        sprawdzFormularz_1();
    }
}

function sprawdzFormularz_1(){

    alert(email());
}

function updateDone(){
    if(zadanie.readyState == 4 && zadanie.status == 200)
    {
        document.getElementById("message").innerHTML = zadanie.responseText;
    }
}

function sex() {
    if(document.querySelector('input[name="sex"]:checked') == null){
        return false;
    }else{
        return true;
    }
}

function name() {
    if(document.getElementById("name").value.split('\n') == ""){
        return 0;
    }else{
        var name = document.getElementById("name").value.split('\n')
        if (/^[A-Za-z]+$/.test(name)) {
            return 1;
        }else{
            return 2;
        }

    }
}

function last_name() {
    if(document.getElementById("last_name").value.split('\n') == ""){
        return 0;
    }else{
        var last_name = document.getElementById("last_name").value.split('\n')
        if (/^[A-Za-z]+$/.test(last_name)) {
            return 1;
        }else{
            return 2;
        }

    }
}

function adress() {
    if(document.getElementById("adress").value.split('\n') == ""){
        return false;
    }else{
        return true;
    }
}

function number_album() {
    if(document.getElementById("number_album").value.split('\n') == ""){
        return 0;
    }else{
        var number_album = document.getElementById("number_album").value.split('\n')
        if (/^[0-9]+$/.test(number_album)) {
            return 1;
        }else{
            return 2;
        }

    }
}

function field() {
    if(document.getElementById("field").value.split('\n') == ""){
        return 0;
    }else{
        var field = document.getElementById("field").value.split('\n')
        if (/^[A-Za-z]+$/.test(field)) {
            return 1;
        }else{
            return 2;
        }

    }
}

function email() {
    if(document.getElementById("email").value.split('\n') == ""){
        return 0;
    }else{
        var email = document.getElementById("email").value.split('\n')
        if (validateEmail(email)) {
            return 1;
        }else{
            return 2;
        }

    }
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
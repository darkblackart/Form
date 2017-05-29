var sex;
var name;
var last_name;
var adress;
var number_album;
var field;
var email;

window.onload = function(){
    document.getElementById("send").onclick = function(){
        sprawdzFormularz_1();
    }
}

function sprawdzFormularz_1(){
    zadanie = "";
    zadanie = new XMLHttpRequest();

    sex = sex_f();
    name = name_f();
    last_name = last_name_f();
    adress = adress_f();
    number_album = number_album_f();
    field = field_f();
    email = email_f();

    var zawartosc =
        "sex=" + sex  +
        "&name=" + name +
        "&last_name=" + last_name +
        "&adress=" + adress +
        "&number_album=" + number_album +
        "&field=" + field +
        "&email=" + email;

    var url = "script.php";
    zadanie.onreadystatechange = updateDone;
    zadanie.open("POST", url, true);
    zadanie.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    zadanie.send(zawartosc);
}

function updateDone(){
    if(zadanie.readyState == 4 && zadanie.status == 200)
    {

    document.getElementById("alert_send").innerHTML = zadanie.responseText;
     var empty = "<div class=\"alert alert-danger\" role=\"alert\"> <strong>Błąd!</strong> Pole wyboru jest puste</div>";
     var error = "<div class=\"alert alert-danger\" role=\"alert\"> <strong>Błąd!</strong> Proszę wprowadzić poprawne dane</div>";

     if(sex == 0){
         document.getElementById("alert_sex").innerHTML = empty;
     }else if(sex == 2){
         document.getElementById("alert_sex").innerHTML = error;
     }else{
         document.getElementById("alert_sex").innerHTML = "";
     }

    if(name == 0){
        document.getElementById("alert_name").innerHTML = empty;
    }else if(name == 2){
        document.getElementById("alert_name").innerHTML = error;
    }else{
        document.getElementById("alert_name").innerHTML = "";
    }

    if(last_name == 0){
        document.getElementById("alert_last_name").innerHTML = empty;
    }else if(last_name == 2){
        document.getElementById("alert_last_name").innerHTML = error;
    }else{
        document.getElementById("alert_last_name").innerHTML = "";
    }

    if(adress == 0){
        document.getElementById("alert_adress").innerHTML = empty;
    }else if(adress == 2){
        document.getElementById("alert_adress").innerHTML = error;
    }else{
        document.getElementById("alert_adress").innerHTML = "";
    }

    if(number_album == 0){
        document.getElementById("alert_number_album").innerHTML = empty;
    }else if(number_album == 2){
        document.getElementById("alert_number_album").innerHTML = error;
    }else{
        document.getElementById("alert_number_album").innerHTML = "";
    }

    if(field == 0){
        document.getElementById("alert_field").innerHTML = empty;
    }else if(field == 2){
        document.getElementById("alert_field").innerHTML = error;
    }else{
        document.getElementById("alert_field").innerHTML = "";
    }

    if(email == 0){
        document.getElementById("alert_email").innerHTML = empty;
    }else if(email == 2){
        document.getElementById("alert_email").innerHTML = error;
    }else{
        document.getElementById("alert_email").innerHTML = "";
    }
    }
}

function sex_f() {
    if(document.querySelector('input[name="sex"]:checked') == null){
        return 0;
    }else{
        return 1;
    }
}

function name_f() {
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

function last_name_f() {
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

function adress_f() {
    if(document.getElementById("adress").value.split('\n') == ""){
        return 0;
    }else{
        return 1;
    }
}

function number_album_f() {
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

function field_f() {
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

function email_f() {
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
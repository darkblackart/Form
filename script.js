var sex = 0;
var name = 0;
var last_name = 0;
var adress = 0;
var number_album = 0;
var field = 0;
var email = 0;

/*window.onload = function(){
    document.getElementById("send").onclick = function(){
        sprawdzFormularz_1();
    }
}*/

function sprawdzFormularz_1(){
    zadanie = "";
    zadanie = new XMLHttpRequest();
	
	if(document.querySelector('input[name="sex"]:checked') != null){
		sex = sex_f(document.querySelector('input[name="sex"]:checked').value);
	}

    name = name_f(document.getElementById("name").value.split('\n'));
    last_name = last_name_f(document.getElementById("last_name").value.split('\n'));
    adress = adress_f(document.getElementById("adress").value.split('\n'));
    number_album = number_album_f(document.getElementById("number_album").value.split('\n'));
    field = field_f(document.getElementById("field").value.split('\n'));
    email = email_f(document.getElementById("email").value.split('\n'));
	

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

function sex_f(cmd) {
    if(cmd == ""){
        return 0;
    }else{
        return cmd;
    }
}

function name_f(cmd) {
    if(cmd == ""){
        return 0;
    }else{
        if (/^[A-Za-z]+$/.test(cmd)) {
            return cmd;
        }else{
            return 2;
        }

    }
}

function last_name_f(cmd) {
    if(cmd == ""){
        return 0;
    }else{
        if (/^[A-Za-z]+$/.test(cmd)) {
            return cmd;
        }else{
            return 2;
        }

    }
}

function adress_f(cmd) {
    if(cmd == ""){
        return 0;
    }else{
        return cmd;
    }
}

function number_album_f(cmd) {
    if(cmd == ""){
        return 0;
    }else{
        if (/^[0-9]+$/.test(cmd)) {
            return cmd;
        }else{
            return 2;
        }

    }
}

function field_f(cmd) {
    if(cmd == ""){
        return 0;
    }else{
        if (/^[A-Za-z]+$/.test(cmd)) {
            return cmd;
        }else{
            return 2;
        }

    }
}

function email_f(cmd) {
    if(cmd == ""){
        return 0;
    }else{
        if (validateEmail(cmd)) {
            return cmd;
        }else{
            return 2;
        }

    }
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function updateDone(){
    if(zadanie.readyState == 4 && zadanie.status == 200)
    {

		document.getElementById("alert_send").innerHTML = zadanie.responseText;
		 var empty = "<div class=\"alert alert-danger\" role=\"alert\"> <strong>Błąd!</strong> Pole wyboru jest puste</div>";
		 var error = "<div class=\"alert alert-danger\" role=\"alert\"> <strong>Błąd!</strong> Proszę wprowadzić poprawne dane</div>";

		 if(sex == 0){
			 document.getElementById("alert_sex").innerHTML = empty;
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

module.exports = {
    sex_f: sex_f,
    name_f: name_f,
    last_name_f: last_name_f,
    adress_f: adress_f,
    number_album_f: number_album_f,
    field_f: field_f,
    email_f:email_f
};
<?php

if(
	!empty($_POST['sex']) && 
	$_POST['sex'] != "0" &&
	
	!empty($_POST['name']) &&
	!is_numeric($_POST['name']) &&
	$_POST['name'] != "0" &&
	$_POST['name'] != "2" &&
	
	!empty($_POST['last_name']) &&
	!is_numeric($_POST['last_name']) &&
	$_POST['last_name'] != "0" &&
	$_POST['last_name'] != "2" &&	
	
	!empty($_POST['adress']) &&
	$_POST['adress'] != "0"	&&
	
	!empty($_POST['number_album']) &&
	is_numeric($_POST['number_album']) &&
	$_POST['number_album'] != "0" &&
	$_POST['number_album'] != "2" &&
	
	!empty($_POST['field']) &&
	!is_numeric($_POST['field']) &&
	$_POST['field'] != "0" &&
	$_POST['field'] != "2" &&	
	
	!empty($_POST['email']) &&
	$_POST['email'] != "0" &&
	$_POST['email'] != "2"	

){
	

$message = "
Plec: ".$_POST['sex'].",
Imie: ".$_POST['name'].",
Nazwisko: ".$_POST['last_name'].",
Adres Zamieszkania: ".$_POST['adress'].",
Numer Albumu: ".$_POST['number_album'].",
Kierunek Studiow: ".$_POST['field'].",
Email: ".$_POST['email']."
";

		$to = "it@ignpolska.pl";
		$subject = "Zgłoszenie studenta: ".$_POST['name']." ".$_POST['last_name'];
		$from = "darkblackarts@gmail.com";
		$headers .= 'From: darkblackarts@gmail.com' . "\r\n" .
			'Reply-To: '.$_POST['email'].'' . "\r\n" .
			'X-Mailer: PHP/' . phpversion();


		if (mail($to,$subject,$message,$headers)){
			?>
			<div class="alert alert-success" role="alert">
			  <strong>Gratulujemy!</strong> Twoje zgloszenie zostalo wyslane.
			</div>
			<?php
		}else{ 
			?>
			<div class="alert alert-danger" role="alert">
			  Wystapil problem, spróbuj jeszcze raz.
			</div>
			<?php
		}
	
}
?>
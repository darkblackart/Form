<?php

if(!empty($_POST['sex']) && !empty($_POST['name']) && !empty($_POST['last_name']) && !empty($_POST['adress']) && !empty($_POST['number_album']) && !empty($_POST['field']) && !empty($_POST['email'])){

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
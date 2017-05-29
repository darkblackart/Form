<?php
if($_POST['sex'] == 1 && $_POST['name'] == 1 && $_POST['last_name'] == 1 && $_POST['adress'] == 1 && $_POST['number_album'] == 1 && $_POST['field'] == 1 && $_POST['email'] == 1){
		$adresat = 'it@ignpolska.pl'; 
		$headers = "MIME-Version: 1.0\r\n";
		$headers .= "Content-type: text/html\r\n";
		$headers .= 'From: it@ignpolska.pl' . "\r\n" .
					'Reply-To: '.$_POST['email'].'' . "\r\n" .
					'X-Mailer: PHP/' . phpversion();
		$content = "
		Plec: ".$POST['sex'].",<br>
		Imie: ".$POST['name'].",<br>
		Nazwisko: ".$POST['last_name'].",<br>
		Adres Zamieszkania: ".$POST['adress'].",<br>
		Numer Albumu: ".$POST['number_album'].",<br>
		Kierunek Studiow: ".$POST['field'].",<br>
		Email: ".$POST['email']."<br>
		";
	
		if (mail($adresat, 'Konkurs - '.$_POST['mail'].'', $content, $headers)){
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